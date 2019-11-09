---
title: "Home Automation Setup"
excerpt_separator: "<!--more-->"
permalink: pages/blogs/hass-setup.html
categories:
  - Blog
  - Tutorial
tags:
  - hobby
  - technology
classes: wide
comments: true
---

<p>This guide is a work-in-progress. Some parts may be out of date or not available yet.</p>{: .notice--primary}

# Intro
I've setup everything in my home to talk to everything else, which is no small feat. I have my media center, lights, music, switches, and more controlled with Home Assistant. Sonarr and Radarr download and organize movies & TV shows that Plex then streams to any device. I can press one button on my universal remote to dim the lights and turn on my TV and soundbar to the right input to start a movie. This is what it takes to make that happen.

## Parts List
Most guides for Home Assistant assume you're using a generic Linux box or a Raspberry Pi. While many things are the same between Synology's Linux and Debian-based distros like Ubuntu and Raspbian, there's some differences when using a Synology device.

* 🖥Synology DS418play
* 🔎USBZB-1 USB Hub
* 💡Sylvania RGBW Bulbs
* 🔄Sylvania Switch
* 📺Harmony Hub + Home Control remote

# Step 1: Preparing your NAS and Docker
While you will need to use the command line to setup Home Assistant in docker, I still use the docker package that's available to easily manage my six other docker installs, which do not need the command line options to start. The Docker package doesn't support the device argument, which is used to allow the docker container to read the Zigbee/Z-Wave USB stick. It's easy to do, just follow this guide to install the .spk.

You'll also need to enable SSH under Control Panel > Terminal and SNMP

# Step 2: Installing Home Assistant
Installing home assistant requires a few steps with Docker and your NAS.

## Step 2.1: Installing the USB drivers
The Z-Wave/Zigbee USB stick requires some third-party drivers to function properly. Find the right version [here](http://www.jadahl.com/). You'll need to know the CPU generation of your Synology. The DS418play has an Apollo Lake processor. The device will require a reboot once the drivers installed.

## Step 2.2: Install the Home Assistant docker container
Docker "containers" are tiny operating systems built to run a specific program or set of programs. They're nice to use because they're easy to update and configure.

When Docker is upgraded, all data in the container is lost. To make sure you don't lost any data, make a folder in a Synology library. You'll tell the Home Assistant container to store configuration files in this folder. This will also make them much easier to edit.

## Step 2.3 (Optional): Install Home Assistant Configurator
You can edit your files with the Synology text editor, or mount your file share on a PC and use your favorite text editing program. Another option is to use HASS Configurator, a web-based text editor than can load your config files. It also provides helpful links and verification that your files are formatted correctly.

To verify you've installed Home Assistant correctly, go to http://your_Synology_IP:8123 and ensure you can see the Home Assistant welcome screen.

# Step 3: Configuring Home Assistant
Now that Home Assistant is installed and running, we can work on configuring services for it to use.

I use the following services or devices:

* Logitech Harmony Hub & Remote
* Google Assistant
* Sylvania Smart Lights (Zigbee)
* Sylvania dimmer switches (Zigbee)
* TP-Link HS110 smart plugs
* Dark Sky (weather provider)
* Spotify

I'll go through each and describe what I use it for and my configuration.

## Zigbee Lights & Switches
Adding your Zigbee devices takes some command-line wizardry. First, SSH into your Synology device. Run cat /dev/tty*. You should see /dev/ttyUSB0 and /dev/ttyUSB1. This shows the USB device is recognized by the Synology.

The below command assumes you downloaded the container named home-assistant from homeassisstant. I keep my config files in the Synology folder /volume1/Vault/configs/ha/config. Make sure you keep the :/config - this maps the Synology directory to a mounted directory in the container.

Then, run the command below:
```
sudo docker run --name home-assistant --restart=always --net=host -itd -v /volume1/Vault/configs/ha/config:/config --device /dev/ttyUSB0 --device /dev/ttyUSB1 homeassistant/home-assistant
```
This should create the docker container with everything it needs to run Home Assistant with Zigbee and Z-Wave devices.
Zigbee should be `/tty/USB1`. To add it to Home Assistant, active the Zigbee component in your config. You'll need to specify a complete path to store the `zigbee.db` file - it will be automatically created but the directory it's in must exist.

```
zha:
  usb_path: /dev/ttyUSB1
  database_path: /config/zigbee.db
```

After doing this and performing a reboot of Home Assistant, you should see the zha.permit and zha.remove under the "Services" menu and in the Settings page. Put your lights into pairing mode, and then click call service. They should flash to confirm the pairing.

## Logitech Harmony
### 🔧Harmony Setup
You'll want to set up your Harmony Hub & Remote with all your devices and activities first.

After making sure everything works the way you like with the app, you can never wait for it to load again - it's easier and much faster to trigger Activities with Home Assistant.

As of 1/3/2019, you'll need to enable Developer Mode on the Hub to use it with Home Assistant. Plug in the Harmony device to your PC, open the software, and press Alt + F9. You should see a prompt to enable developer mode.

After enabling developer mode, use the Harmony app to make sure all of your devices and activities have been set up. Set up any activities or devices you need before continuing.

### ⚙️Home Assistant Configuration
Home Assistant's Lovelace UI makes adding buttons for your Harmony activities easy. First, make sure your device is setup in your config.yaml like so:

After adding to your config and rebooting, test it by toggling the switch for your device in the States UI. Click the i icon in the sidebar and click "access state UI" to see the states UI.

After making sure the integration is working, you can then add buttons to your main Home Assistant screen, also known as the Lovelace UI. See here for more information on how to write your ui-lovelace.yaml. Mine looks like this:

```
cards:
- type: vertical-stack
  cards:
    # --- HARMONY ---
    - type: entity-button
      name: play switch
      icon: mdi:gamepad
      entity: remote.studio_hub
      tap_action:
        action: call-service
        service: remote.turn_on
        service_data:
          entity_id: remote.studio_hub
          activity: "Play Switch"
```                              
The type field means I added a button - I just want to click the button to start the Harmony activity. The Name isn't really relevant. The icon is the icon code from TODO ADD LINK. The entity identifies the Harmony Hub performing the action. Under tap_action, the main thing you'll need to change is the entity_id (which does need to be repeated) and the activity. You can get the list of activity names and IDs from harmony_your_hub_name.conf in your Home Assistant configuration directory.

## Dark Sky
Dark Sky is a very accurate weather provider that you can get free API access for. You can configure any of the data it provides into a card in Home Assistant. I keep mine simple, just showing me the forecast for the day like so:

```
weather:
  - platform: darksky
    api_key: ca523bd948b5f7c2085f6a5777330544
    monitored_conditions:
      - summary
      - icon
      - precip_probability
      - temperature
```