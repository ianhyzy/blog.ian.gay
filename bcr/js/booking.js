window.Parsley
.addValidator('lengthOf', {
  requirementType: 'integer',
  validateNumber: function(value, requirement) {
    return value.toString().length == requirement;
  },
  messages: {
    en: 'This value should be %s numbers long',
  }
});

$(function () {
  $('#demo-form').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $('.bs-callout-info').toggleClass('hidden', !ok);
    $('.bs-callout-warning').toggleClass('hidden', ok);
  })
  .on('form:submit', function() {
    window.location.href = "bookingsuccess.html";
    return false; // Don't submit form
  });
});
