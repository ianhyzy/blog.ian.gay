<!DOCTYPE html>
<html lang="en">
  <head>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/head.php') ?>
    <title>A Robot With Drive</title>
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
        <div class="col-sm-4">
        <img src="/img/projects/roomba/roomba.jpg" class="side-img pad-top" />
        </div>
      </div>
      <div class="row">
        <div class="col-med-4">
          <p>The code takes the gamepad buttons and turns them into the proper serial commands.</p>
          <?php include($_SERVER['DOCUMENT_ROOT'].'/projects/roomba/code.txt') ?>
        </div>
      </div>
    </div>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/scroll.js"></script>
  </body>
</html>