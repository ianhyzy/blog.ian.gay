<!DOCTYPE html>
<html lang="en">

  <head>
    <?php include($_SERVER['DOCUMENT_ROOT'].'/head.php') ?>
    <title>ianhyzy.me</title>
  </head>

  <body>

    <!-- Navbar -->
    <?php include($_SERVER['DOCUMENT_ROOT'].'/navbar.php') ?>
    
    
    <div class="col-md-2"><!--
      <a href="http://youtu.be/dQw4w9WgXcQ" target="_blank"><img class="side-img pad-top" src="/img/projects/cabbage/ad_1.jpg" /></a>-->
    </div> 
    <div class="col-md-6">
      <div class="center">
        <h1>Essential AutoHotkey Scripts for Windows</h1>
        <br>
        <h3>Send Media Commands</h3>
        <p>I modified <a href="http://superuser.com/a/279000/257211">this Super User answer</a> to make a script that contols media keys. The only difference is I chnaged the Ctrl+alt+. command to show a dialog listing all the available commands.</p>
        <h3>Switch Audio Output</h3>
        <p>This script will allow to quickly switch audio outputs. You'll be able to press a key and switch from your speakers to your headphones, or vice versa. You'll need to edit the script with the location of the audio object in the Windows list (i.e. your headphones are #3, your speakers are #6), and Scroll Lock is the default key. Pressing it will cycle through audio outs.</p>
        <h3>Running on startup</h3>
        <p>You'll probably want these to run when you start your computer. go to your startup folder (the fastest way is to paste this is the navigation bar in explorer and hit "enter")</p>
        <p>Your Account: C:\users\%username%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup</p>
        <p>All Users: C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup
</p>
        
      </div>
    </div>
    <div class="col-md-4 pad-top">
      <h5>Send Media Commands</h5>
      <pre>
^!Left::Send   {Media_Prev}
^!Down::Send   {Media_Play_Pause}
^!Right::Send  {Media_Next}
+^!Left::Send  {Volume_Down}
+^!Down::Send  {Volume_Mute}
+^!Right::Send {Volume_Up}

^!.::
MsgBox, 0, , Playback Controls:`n`Ctrl+Alt+LeftArrow sends Previous`n`Ctrl+Alt+DownArrow sends Play/Pause`n`Ctrl+Alt+RightArrow sends Next`n` `n`Volume Controls (Shift):`n`Ctrl+Shift+Alt+LeftArrow sends Volume Down`n`Ctrl+Shift+Alt+DownArrow sends Mute`n`Ctrl+Shift+Alt+RightArrow sends Volume Up
return
      </pre>
      <h5>Switch Audio Output</h5>
      <pre>
ScrollLock:: 
  toggle:=!toggle ;toggles up and down states. 
  Run, mmsys.cpl 
  WinWait,Sound ; Change "Sound" to the name of the window in your local language 
  if toggle
    ControlSend,SysListView321,{Down 5} ; This number selects the matching audio device in the list, change it accordingly 
  Else
    ControlSend,SysListView321,{Down 6} ; This number selects the matching audio device in the list, change it accordingly 
  ControlClick,&Set Default ; Change "&Set Default" to the name of the button in your local language 
  ControlClick,OK 
return
      </pre>
    </div>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/scroll.js"></script>
  </body>
</html>