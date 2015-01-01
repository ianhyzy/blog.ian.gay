<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IanHyzy.me</title>
    <link rel="icon" type="image/png" href="/img/favicon.png">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Cosmo theme -->
    <link href="css/bootstrap-theme.css" rel="stylesheet">
    <link href="/css/mine.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

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