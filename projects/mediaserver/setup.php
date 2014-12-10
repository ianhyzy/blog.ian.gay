<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IanHyzy.tk</title>
    <link rel="icon" type="image/png" href="/img/favicon.png">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Cosmo theme -->
    <link href="/css/bootstrap-theme.css" rel="stylesheet">
    <!-- my tweaks -->
    <link href="/css/mine.css" rel="stylesheet">

    <script src="/js/sidebar.js"></script>

  </head>

  <body>

    <?php include($_SERVER['DOCUMENT_ROOT'].'/navbar.php') ?>

    <div class="container">
      <div class="row">
        <div class="col-md-2">

          <div class="list-group" id="sidebar">
            <a href="#" class="list-group-item">Introduction</a>
            <a href="#part0" class="list-group-item">Mounting Drives</a>
            <a href="#part1" class="list-group-item">Setting up the Virtual Machine</a>
            <a href="#part2" class="list-group-item">Configuring Deluge</a>
            <a href="#part3" class="list-group-item">Configuring OpenVPN</a>
            <a href="#part4" class="list-group-item">Configuring CouchPotato</a>
            <a href="#part5" class="list-group-item">Configuring NFS and SAMBA</a>
            <a href="#part6" class="list-group-item">Installing Plex</a>
            <a href="#part7" class="list-group-item">Other Tools & Tweaks</a>
            <a href="#part8" class="list-group-item">Conclusion</a>
          </div>

        </div>  
        <div class="col-md-10">
          <div class="center">
            <h1 class="title">Using Deluge, OpenVPN, and Plex to create a private media server accessible from anywhere</h1>
            <p>This tutorial will show you how to make a machine that can download, manage, and play media. You can download movies with one click, and have new TV show episodes downloaded automatically. All of the downloading will go through a vpn for maximum anonymity.</p>
          </div>
          <div>
            <h3>Required Components</h3>
            <ul>
              <li>A x86-based computer running Ubuntu 14.04. If you will not need the HTPC capability (i.e, will not be plugging it into a TV), you're better off installing Ubuntu Server.
              <li>An VPN provider that supports OpenVPN, like Private Internet Access. It costs $3.33 a month if you pay once a year.</li>
            </ul>
            <p>While any x86 CPU will work, Plex Home Theater uses very few CPU cycles becuase it doesn't usually need to transcode video. If you want to watch video on other platforms, make sure your CPU is powerful enough, especially if you want to use a Chromecast or the Plex Web client. Both of these streaming methods will require transcoding most of the time. Other platforms may occasionally require transcoding, but nowhere near as often.</p>
          </div>
          <div>

            <h1 id="part0">Before you begin: Mounting Drives</h1>
            <p>If your media is on the same disk as your os or you know how to mount a drive on linux, skip this section. This is for beginners who have their media on a hard drive seperate from their OS drive.</p>
            <p>You need to mount your drive before you can use it. First, find where your drive "lives":</p>
            <pre>df -h</pre>
            <p>You'll get someting like this:</p>
            <pre>ian@ian-htpc:~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/sdb1        51G   23G   26G  48% /
none            4.0K     0  4.0K   0% /sys/fs/cgroup
udev            1.9G  4.0K  1.9G   1% /dev
tmpfs           396M  1.4M  394M   1% /run
none            5.0M     0  5.0M   0% /run/lock
none            2.0G  1.1M  2.0G   1% /run/shm
none            100M   40K  100M   1% /run/user
/dev/sda1       1.4T  801G  505G  62% /mnt/storage</pre>
            <p>My 1.5TB drive 'lives' in /dev/sda1. You don't access files from there, though. You have to mount the drive before you can access files. If it's formatted as ext4, it's incredibly simple. Jsut make a folder where you want the drive to be mounted- I use /mnt/storage. Make that folder:</p>
            <pre>sudo mkdir /mnt/storage</pre>
            <p>Next, add the drive to your fstab. Fstab is your FileSystemTABle.</p>
            <pre>/dev/sda1 /mnt/storage  ext4    defaults        0       2</pre>
            <p>Just change the paths, and add this into the next blank line of your fstab. You'll need to do a bit of searching if you want to use an NTFS-formatted drive, it's not reccomended, but still possible.</p>

            <!-- Part 1: Setting up the VM -->
            <h1 id="part1">Creating a Virtual Machine from within Ubuntu Server</h1>
            <p>You'll want to set up Virtual Machine from within your server so you can have a one VPN for secure downloads and one VPN for routing Plex traffic open simeltaneously.</p>
            <h3>Configuring Bridged Networking</h3>
            <p class="aside">Again based off of the <a href="http://www.havetheknowhow.com/Configure-the-server/Network-Bridge.html" class="link">Have the Know How guide</a></p>
            <p>Bridged networking means your VM will function just like you plugged another computer into your home network. This means you can ssh directly into it, and it can access the internet.</p>
            <p>All you have to do is edit your network interface file. Open it</p>
            <pre>sudo vim /etc/network/interfaces</pre>
            <p>And make it look like this:</p>
            <pre>auto lo
iface lo inet loopback

# The primary network interface
auto eth0
iface eth0 inet dhcp

auto br0
iface br0 inet dhcp
        bridge_ports eth0
        bridge_fd 9
        bridge_hello 2
        bridge_maxage 12
        bridge_stp off</pre>
            <p>FWIW, the guide I linked to above says you need to comment out the lines for the primary network interface, but that didn't work</p>
            <p>Restart networking and you're done! Make sure br0 is listed when you check your network with ifconfig. If it's not there, just reboot, and it should appear. Once that's done, you can start setting up your VM. If you installed Ubuntu Desktop to use your machine as an HTPC, you can do things the easy way! <a href="#part1s2">Click here</a> or scroll down to the section about using virt-manager. Otherwise, you'll need to use the command line tool virsh.</p>
            <h3>Installing and configuring KVM with the command line</h3>
            <p class="aside">I used <a href="http://www.havetheknowhow.com/Configure-the-server/Configure-KVM.html" class="link">this guide</a> as a base. Some parts are exactly the same, but I made a few small changes/tweaks because that guide is somewhat old.</p>
            <p>You'll first need to check if your system supports virtualization. Run the following command to check:</p>
            <pre>sudo egrep '(vmx|svm)' --color=always /proc/cpuinfo</pre>
            <p>Most of the time, if you get any output at all, you're good to go! If you get no output from that command, your computer probably doesn't support virtualization.</p>
            <p>Next, install the packages for kvm and bridge networking.</p>
            <p class="aside">Protip #2: You can create aliases to make your life easier. Run 'alias install="sudo apt-get install -y"' to make installing packages much quicker! Just type 'install' and the package name to save your fingers some effort!</p>
            <pre>sudo apt-get install kvm ubuntu-vm-builder libvirt-bin bridge-utils</pre>
            <p>Reboot for the changes to take effect.</p>
            <pre>sudo reboot</pre>
            <p>Once your system is done rebooting, check to see if KVM is running correctly.</p>
            <pre>virsh --connect qemu:///system list --all</pre>
            <p>You should see something like this:</p>
            <pre> Id    Name                           State
----------------------------------------------------</pre>
            <p class="aside">If you get errors, check the original link for help.</p>
            <p>Now you'll need to build the VM. You will need to get your connection informaiton before building the VM. Use the 'ipconfig' command in Windows to get your current IP adress, subnet mask, default gateway, and broadcast value.</p>
            <div class="alert alert-dismissable alert-warning">
              <button type="button" class="close" data-dismiss="alert">×</button>
              <h4>Attention!</h4>
              <p>You can opt to use DHCP by removing all of the ip related lines, but you will need to find the ip manually with the 'arp -an' command. I have not had success with this method, however! Use at your own risk.</p>
            </div>
            <p>Download the vm creation script to your server.</p>
            <pre>wget http://www.ianhyzy.tk/projects/mediaserver/makevm.sh</pre>
            <p>You'll need to edit it:</p>
            <pre>vim makevm.sh</pre>
            <p>Things to note:</p>
            <ul>
              <li>'dest' is where the VM HDD will be stored.</li>
              <li>'mem' is the RAM it's alloted.</li>
              <li>'rootsize' is the side of the VM's HDD. 8GB is fine, you could even go lower if needed.</li>
              <li>'swapsize' is the swapsize. This doesn't need to be big.</li>
              <li>You will either need to edit 'ip', 'mask', 'bcase', and 'gw' (gateway), or delete them all and use DHCP.</li>
              <li>'addpkg' install software on the system. 'openssh-server' installs ssh, the way you'll access the VM.</li>
              <li>'suite' can be changed from Trusty to something else if there is a new version of ubuntu server out.</li>
              <li>hostname, user, and pass will all need to be changed.</li>
            </ul>
            <p>Make the script executable</p>
            <pre>chmod a+x makevm.sh</pre>
            <p>And run it. It may take a long time to finish. (~15 minutes)</p>
            <pre>sudo sh makevm.sh</pre>
            <p>When it's done, you'll have a fully functioning VM! It may take a long time to install. Use</p>
            <pre>virsh --connect qemu:///system start YOUR_DOMAIN_NAME</pre>
            <p>to boot it up. After it's done booting, you can SSH into it with the IP adress and login information you specified in the makevm.sh file earlier.</p>
            <h3 id="part1s2">Installing and configuring KVM with Vish-manager</h3>
            <p>There's a nice GUI tool for configuring KVM called virt-manager, developed by RedHat.</p>
            <p>Install virt-manager:</p>
            <pre>sudo apt-get install virt-manager</pre>
            <p>Open it, and then create a new VM. Just follow the prompts in the wizard, and you're done! Then just install openssh so you can ssh into it instead of having to open the window.</p>

            <!-- Part 2: Deluge -->

            <h1 id="part2">Installing & Configuring Deluge in the VM</h1>
            <p>Now you'll install Deluge inside the VM. In the next step, you'll configure the VPN, and after that's done, all deluge traffic will be encrypted.</p>
            <h3>Installing Deluge</h3>
            <p class="aside">(I used <a class="link" href="http://www.havetheknowhow.com/Install-the-software/Install-Deluge-Headless.html">this guide</a> when I first set up)</p>
            <p class="aside">Protip #1: Triple-click code snippets to copy them instead of trying to highlight them exactly.</p>
            <p>Download and install deluge-daemon and deluge-web (you'll also need wget for downloading a file).</p>
            <pre>sudo apt-get install deluged deluge-web wget</pre>
            <p>You're going to need to run Deluge as it's own user. Create the deluge user and create the deluge group.</p>
            <pre>sudo adduser --disabled-password --system --home /var/lib/deluge --gecos "Deluge server" --group deluge</pre>

            <div class="alert alert-dismissable alert-warning">
              <h4>Attention!</h4>
              <p>This will the location for some deluge config files. Make sure you check /var/lib/deluge/.config before checking other locations if you're looking for your config file. The auth file is in this location, which you will need to edit later.</p>
            </div>

            <p>The following steps create the logs files deluge will use.</p>
            <div class="codeblock">
              <pre>sudo touch /var/log/deluged.log</pre>
              <pre>sudo touch /var/log/deluge-web.log</pre>
              <pre>sudo chown deluge:deluge /var/log/deluge*</pre>
            </div>
            <p>Now deluge is installed. Let's make deluge run at startup.</p>
            <p>(If you've never used Vim, replace 'vim' with 'nano')</p>
            <span><pre>sudo vim /etc/default/deluge-daemon</pre></span>
            <pre>
# Configuration for /etc/init.d/deluge-daemon
# The init.d script will only run if this variable non-empty.
DELUGED_USER="deluge"
# Should we run at startup?
RUN_AT_STARTUP="YES"
</pre>
            <p>Now, download the official Deluge init script to start deluge and the webui on startup.</p>
            <pre>sudo touch /etc/init.d/deluge-daemon
sudo wget -O /etc/init.d/deluge-daemon www.ianhyzy.tk/projects/mediaserver/delugedstartup.txt
</pre>
            <p>Make the script executable and mark it to run on startup.</p>
            <pre>sudo chmod a+x /etc/init.d/deluge-daemon
sudo update-rc.d deluge-daemon defaults
</pre>
            <p>Then, reboot. Your deluge server will be available on yourip:8112. Don't forget to log in and change the default password (deluge).</p>
            <p>If you want to use a native Deluge applications, such as Deluge for Windows, to connect to the daemon, you need to allow remote connections to the daemon. Go to 'Prefrences' > Daemon > Allow Remote Connections. You'll also need a user in the auth file. Add your_user_name:a_pass_word:10 on a new line. The first line may already exist; if so, just write it on the second line. Reboot to make the changes take effect.</p>

            <!-- Deluge config [2.5] -->
            <h3 id="part2s1">Configuring Deluge</h3>
            <p>You'll probably want to change some of the default Deluge settings. Here's what I recommend, but of course, it's all personal preference.</p>
            <ul>
              <li>I use the <b>scheduler</b> plugin to make deluge slow down during peak hours (around 8pm to midnight)</li>
              <li>I use the <b>labels</b> plugin to sort anything I add manually. Labels can have a custom download location, and makes it easy to sort anything you need to download manually.</li>
              <li>Ticking the "Allow Remote Connections" setting under the "Daemon" tab will allow you to manage your server from anywhere. You can even use mobile apps like <a href="https://play.google.com/store/apps/details?id=org.transdroid.lite&hl=en">Transdrone</a> to manage your server from a mobile phone.</li>
              <li>If you plan on using any private trackers, make sure to turn off "Peer Exchange" and "DHT" under the "Network" tab. This can cause issues with some public trackers (Like KickAss Torrents or The Pirate Bay), however.</li>
              <li>Based on your available bandwidth, you can tweak the "total active" counts in the "Quene" menu so things download faster. Make sure "Do not count slow torrents" is ticked.</li>
            </ul>

            <!-- Setting up OpenVPN, client -->

            <h1 id="part3">Part 2: Setting up OpenVPN for download protection on your VM</h1>
            <h3>OpenVPN will allow you do download without possible repercussions from the law or your ISP.</h3>
            <p>Almost all universities block the bittorrent protocol, but few block VPNs. Now we'll set up your Private Internet Access (PIA) VPN to get around those pesky restrictions.</p>
            <p>Drop to root for the next few tasks</p>
            <pre>sudo su</pre>
            <div class="alert alert-dismissable alert-danger">
              <p>You're running everything as the root user now so <strong>be careful!</strong></p>
            </div>
            <p>Install OpenVPN and unzip</p>
            <pre>apt-get install openvpn unzip</pre>
            <p>Chnage to the OpenVPN directory, then download and unzip the configuration files.</p>
            <pre>cd /etc/openvpn</pre>
            <pre>wget https://www.privateinternetaccess.com/openvpn/openvpn.zip</pre>
            <pre>unzip openvpn.zip</pre>
            <p>Run</p>
            <pre>ls -l</pre>
            <p>and find the hub closest to you. Mine is Us-East.</p>
            <p>Rename the .ovpn file to a .conf file. OpenVPN starts .conf files automatically on startup (you should only have one in this directory).</p>
            <pre>mv 'US East.ovpn' 'east.conf'</pre>
            <p>open your .conf file.</p>
            <pre>vim east.conf</pre>
            <p>add make sure the following line exists. You may need to add the entire line, or just the path. Make sure your spacing is correct.</p>
            <pre>auth-user-pass /etc/openvpn/auth</pre>
            <p>Create the 'auth' file and add your VPN username login in the first line and your VPN password on the second line.</p>
            <pre>vim auth</pre>
            <p>Reboot to connect to OpenVPN. OpenVPN will automatically start any .conf files in it's directory, so <strong>make sure you only have one!</strong></p>

            <!-- Couch potato -->

            <h1 id="part4">Part 3: Couch Potato</h1>
            <p class="aside">I used <a class="link" href="http://www.htpcbeginner.com/install-couchpotato-on-ubuntu/">this guide</a> as a base</p>
            <p>Couch potato has a beautiful web interface and provides an incredibly easy way to download movies. If you're on an IMDB, RottenTomatoes, or Wikpedia page, you can click a bookmarklet and have it start downloading with two clicks. <strong>Make sure you're doing this on your VM!</strong></p>
            <p>Download dependencies</p>
            <pre><code>sudo apt-get install git-core python</code></pre>
            <p>Make sure you're in your user's home directory and download CouchPotato</p>
            <pre><code>git clone git://github.com/RuudBurger/CouchPotatoServer.git .couchpotato</code></pre>
            <p>Set couchpotato to autostart</p>
            <pre><code>cd ~/.couchpotato/init</code></pre>
            <pre><code>sudo cp ~/.couchpotato/init/ubuntu /etc/init.d/couchpotato</code></pre>
            <pre><code>sudo chmod +x /etc/init.d/couchpotato</code></pre>
            <p>You'll need top edit the init file.</p>
            <pre><code>sudo nano ~/.couchpotato/init/ubuntu.default</code></pre>
            <p>Set CP_HOME to the directory where couchpotato is stored, which should be</p>
            <pre>/home/user/.couchpotato</pre>
            <p>Set CP_USER to <strong>deluge</strong></p>
            <p>It's a good idea to run all torrenting programs under the deluge user to make permissions and security easier.</p>
            <p>Move the file to the init folder</p>
            <pre><code>sudo cp ~/.couchpotato/init/ubuntu.default /etc/default/couchpotato</code></pre>
            <pre><code>sudo chmod +x /etc/default/couchpotato</code></pre>
            <p>And update your boot sequence</p>
            <pre><code>sudo update-rc.d couchpotato defaults</code></pre>
            <p>You will now make a user in the deluge daemon that you will use when configuring other applications such as CouchPotato or FlexGet. Edit deluge's auth file</p>
            <pre>/var/lib/deluge/auth</pre>
            <p>And add a user by adding a line:</p>
            <pre>username:password:10</pre>
            <p>The 10 means the user has full access to deluge.</p>
            <p>Reboot, and couchpotato will be avialable on yourip:5050. You need to connect to it and configure it before you can use it. Configuration is easy, just follow the prompts. Also, the CouchPotato extension is great, when you're on the website for any movie, you can download it with just two clicks with the extension!</p>

            <!-- Samba/NFS -->

            <h1 id="part5">Part 4: Setting up Samba and NFS</h1>
            <br />
            <h2>Samba</h2>
            <p>Samba (or Windows) file sharing is the simplest way to share files on a local network. I use samba for manually adding/removing/adding files on the storage aprt of the server when required. Some people also prefer to use their own media player or download the file; samba gives users this option by letting any anonymous user download (i.e, read) files.</p>
            <p>Install samba</p>
            <pre>sudo apt-get install samba</pre>
            <p>Make sure you have a good smb.conf, located in <pre>/etc/samba/smb.conf</pre>
            <a href="http://opensource.apple.com/source/samba/samba-26/examples/smb.conf.default">Here's the default config</a> you should work from.
            <p>For my setup, I wanted my share to be publicly readable, but not writeable. I wanted only one user to have write privileges, so I used this at the bottom of the file:</p>
            <pre>[storage]
   comment = storage drive
   path = /mnt/storage/
   public = yes
   writable = yes
   printable = no
   write list = shibe</pre>
            <h2>NFS</h2>
            <p>For NFS, simply follow <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nfs-mount-on-ubuntu-14-04">this guide</a>. It's up-to-date and probably better than what I could come up with.</p>

            <!-- Plex -->
            <h1 id="part6">Part 5: Plex</h1>
            <p>Plex Media Server will run on the host and will manage your media. It can stream to any mobile device and has both a web interface and native applications for desktops. By default, most universities block Plex and you won't be able to stream outside your local university network. Plex is also very CPU intensive when trascoding, so using a native client (such as Plex Home Theater or the Windows 8 app) is recommended.</p>
            <p>Take care of dependencies first:</p>
            <pre>sudo apt-get install avahi-daemon avahi-utils</pre>
            <p>Head over to the <a href="https://plex.tv/downloads">the Plex download page</a> , find the Ubuntu version, and right-click the correct version and select "Copy link location". Then go back to your server and download the file with wget.</p>
            <pre>wget paste_link_here</pre>
            <p>You should get a message saying the download has been completed. Copy the filename of the .deb file. Then, install the .deb</p>
            <pre>sudo dpkg -i the_file_name</pre>
            <p>Plex media server is now installed! Configure it by going to yourip:32400/web/index.html</p>

            <!-- end -->

            <h1 id="part7">Other Useful Tools</h1>

            <p>Once in a great while, the way a TV show is named causes Plex to match it correctly, or not recognize it at all. If choosing the "Fix Incorrect Match" option in the Plex WebUI doesn't work, use <a href="http://www.bulkrenameutility.co.uk/Download.php">Bulk Rename Utility</a> to name the files in a way Plex can understand ('NameOfShow s00e00' works most of the time). After rename you will need to force a refresh for Plex to recognize the files have chnaged.</p>
            <p>There is also a CouchPotato channel for Plex. You can install it with the <a class="link" href="https://forums.plex.tv/index.php/topic/25523-unsupported-as-in-totally-unofficial-appstore/" target="_newtab">Unsupported App Store</a> for plex. Your plex location should be:<pre>cd '/var/lib/plexmediaserver/Library/Application Support/Plex Media Server/Plug-ins'</pre>You'll need to drop to root first.</p>
          <p>Also in the Unsupported App Store is the trakt.tv plugin, which allows you to keep a log of everything you've ever watched. It syncs both ways with Plex!</p>

          <h1 id="part8">Conclusion</h1>
          <p>This is it! You now have a secure torrent server you can download torrents with, all with your school's super fast internet! You should also be able to easily add movies and make sure your favorite TV shows get the latest episodes automatically downloaded.</p>
          <p>Bookmark the following links so you don't need to remember a bunch of ports:</p>
          <ul>
            <li>yourip:5050 - CouchPotato</li>
            <li>yourip:8112 - Deluge Web UI</li>
            <li>yourip:32400/manage/index.html - Plex</li>
          </ul>

          <h3>Questions? Comments? Insults?</h3>
          <p>If you see something really wrong here (and I'm sure there is), email me at <a href="mailto:ian@ianhyzy.tk">ian@ianhyzy.tk</a></p>
        </div>
      </div> 
    </div>
    </div>
  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="/js/bootstrap.min.js"></script>
  <script src="/js/sidebar.js"></script>

  </body>
</html>