<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Roomba Remotely</title>
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
    <!-- Navbar -->
    <?php include($_SERVER['DOCUMENT_ROOT'].'/navbar.php') ?>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1>Making an automatic robot vacuum manual for the fun it.</h1>
          <p>One day I found a Roomba 520 at a flea market for $20. I was shocked to see that it actually worked, but it's way of "working" was bumping into everything in sight and eventually cleaning the entire floor. I decided I'd prefer to drive it around myself.</p>
          <h5>Parts list:</h5>
          <ul>
            <li>Raspberry Pi</li>
            <li>Serial to USB cable</li>
            <li>Breadboard and wiring</li>
            <li>A way to regulate the Roomba's power to 5v for the Pi</li>
          </ul>
          <p>Wiring the Pi and the Roomba together took some work. However, it ended up being relatively simple. The Roomba accepts serial command through a mini-din port under the "hood" (a plastic plate that's on top of the roomba); the same port also provides power. The real challenge was getting a PlayStation remote to connect to the Pi. This was made possible with a bluetooth adapter and the Sixaxis library, but Bluetooth on Linux is flaky, game controllers especially. The Bluetooth connection doesn't go more than 15-20 feet.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-med-4">
          <p>The code takes the gamepad buttons and turns them into the proper serial commands.</p>
          <?php include($_SERVER['DOCUMENT_ROOT'].'/projects/roomba/code.txt') ?>
        </div>
      </div>
    </div>
  </body>
</html>