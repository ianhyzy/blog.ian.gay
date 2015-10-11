var listener = new window.keypress.Listener();
listener.sequence_combo("up up down down left right left right b a enter", function() {
    swag_mode = true;
});
