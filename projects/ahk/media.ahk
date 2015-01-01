^!Left::Send   {Media_Prev}
^!Down::Send   {Media_Play_Pause}
^!Right::Send  {Media_Next}
+^!Left::Send  {Volume_Down}
+^!Down::Send  {Volume_Mute}
+^!Right::Send {Volume_Up}

^!.::
MsgBox, 0, , Playback Controls:`n`Ctrl+Alt+LeftArrow sends Previous`n`Ctrl+Alt+DownArrow sends Play/Pause`n`Ctrl+Alt+RightArrow sends Next`n` `n`Volume Controls (Shift):`n`Ctrl+Shift+Alt+LeftArrow sends Volume Down`n`Ctrl+Shift+Alt+DownArrow sends Mute`n`Ctrl+Shift+Alt+RightArrow sends Volume Up
return