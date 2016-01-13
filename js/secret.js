function press() {
  var listener = new window.keypress.Listener();
  listener.sequence_combo("b a enter", function() {
    $('body').jGravity();
  });
}
