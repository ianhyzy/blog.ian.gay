
function initalizeCalendar() {
  $('#modal1').modal();
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      right: 'month,listWeek'
    },
    views:{
      listWeek: {
        titleFormat: 'MMMM YYYY'
      }
    },
    viewRender: function(view) {
      var title = view.title;
      $("#externalTitle").html(title);
    },
    <!-- we default to list view becuase it works best on most screen sizes-->
    defaultView: 'listWeek',
    eventSources: [{
      googleCalendarApiKey: 'AIzaSyApC7q7S1ZsLGlma5N148fv7AAKtbmHdDU',
      googleCalendarId: 'dnlin92jlehebmi8nimps70b2s@group.calendar.google.com',
      className: 'fc-event-email'
    }],
    eventClick: function(event) {
      var start = moment(event.start).format("MM/DD/YYYY HH:mm");
      var end = moment(event.end).format("MM/DD/YYYY HH:mm");

      // It is possible to have an undefined title.
      // Ensure that the an empty title does get overwritten by
      // an event that has a title
      if(event.title == undefined){
        $('.eventTitle').text("N/A");
      } else{
        $('.eventTitle').text(event.title);
      }
      $('.startTime').text(start);
      $('.endTime').text(end);

      // Ensure that the an empty location does get overwritten by
      // an event that has a location
      if(event.location == undefined){
        $('.location').text("N/A");
      } else{
        $('.location').text(event.location);
      }

      // Ensure that the an empty description does get overwritten by
      // an event that has a description
      if(event.description == undefined){
        $('.description').text("N/A");
      } else{
        $('.description').text(event.description);
      }

      $('#modal1').modal('open');
      if (event.url) {
        return false;
      }

    }
  });
}
