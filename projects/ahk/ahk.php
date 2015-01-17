<!DOCTYPE html>
<html lang="en">

  <head>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/head.php') ?>
    <title>ianhyzy.me</title>
  </head>

  <body>

    <!-- Navbar -->
    <?php include($_SERVER['DOCUMENT_ROOT'].'/navbar.php') ?>

      <div class="col-md-10">
          <div class="center">
              <h1>Essential AutoHotkey Scripts for Windows</h1>
              <h3>Send Media Commands</h3>
              <p>I modified <a href="http://superuser.com/a/279000/257211">this Super User answer</a> to make a script that contols media keys. The only difference is I chnaged the Ctrl+alt+. command to show a dialog listing all the available commands.</p>
              <?php include($_SERVER['DOCUMENT_ROOT'].'/projects/roomba/media.ahk') ?>
              <h3>Switch Audio Output</h3>
              <p>Thsi script will give you the convience of medika keys on any computer. You'll need to edit the script with the location of the audio object in the Windows list (i.e. your headphones are #3, your speaks are #6), and Scroll Lock is the default key. PRessing it will cycle through audio outs.</p>
          </div>
      </div>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/scroll.js"></script>
  </body>
</html>