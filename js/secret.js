function press() {
  var listener = new window.keypress.Listener();
  listener.sequence_combo("b a enter", function() {
    console.log("There was going to be some big event here. Gravity would turn on, dumping the photos everywhere, or patterns would fly across the screen, or something else dramatic. You get the idea.");
  });
}
