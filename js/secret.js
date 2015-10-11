function press() {
  var listener = new window.keypress.Listener();
  listener.sequence_combo("up up down down left right left right b a enter", function() {
    console.log("THERE WILL BE A SECRET HERE EVENTUALLY!");
  });
}
