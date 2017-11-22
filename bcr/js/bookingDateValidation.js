/*
* Validation function that only allows the user to select a valid expiration date
* for a credit card.
* The start expiration date cannot be before or equal to the current date.
* If the user enters an invalid date, they will receive a toast error message and
* The invalid date will not be entered into the input field.
* An error message will appear if the field is not filled in and the user attempts
* to submit the form.
*/
function validateCreditExpiration(expDate){
  var formattedExpirationDateUTC = getFormattedUTCDate(expDate);
  var currentDateUTC = getCurrentUTCDate();
  checkSelectedDateNotPriorCurrentDate(formattedExpirationDateUTC, currentDateUTC, '#cc3');
}

/*
* Validation function that only allows the user to select a valid start date.
* The start date cannot be before the current date.
* If an end date is already selected the start date cannot be before or equal to the end date
* If the user enters an invalid date, they will receive a toast error message and
* The start date will not be entered into the input field.
* An error message will appear if the field is not filled in and the user attempts
* to submit the form.
*/
function validateStart(startDate) {
  // Convert start date string to a date in UTC format
  var formattedStartDateUTC = getFormattedUTCDate(startDate);
  var currentDateUTC = getCurrentUTCDate();
  checkSelectedDateNotPriorCurrentDate(formattedStartDateUTC, currentDateUTC, '#sdate');

  // Find the end date and check if it exists
  var endDate = $('#edate').val();
  if (endDate != undefined && endDate != "" && endDate != null) {
    // Convert end date string to a date in UTC format
    var formattedEndDateUTC = getFormattedUTCDate(endDate);
    // Check to make sure that the start date is not after end date
    if (formattedStartDateUTC.getTime() >= formattedEndDateUTC.getTime()) {
      Materialize.toast('Start Date cannot be after or equal to End Date', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
      // Set start date value to be empty
      $('#sdate').val("");
    }
  }
}

/*
* Validation function that only allows the user to select a valid end date.
* The end date cannot be before or equal to the current date.
* If an start date is already selected the end date cannot be before or equal to the end date
* If the user enters an invalid date, they will receive a toast error message and
* The start date will not be entered into the input field.
* An error message will appear if the field is not filled in and the user attempts
* to submit the form.
*/
function validateEnd(endDate) {
  var formattedEndDateUTC = getFormattedUTCDate(endDate);
  var currentDateUTC = getCurrentUTCDate();

  //check to make sure that the end date is not before or equal to today
  if (currentDateUTC.getTime() >= formattedEndDateUTC.getTime()) {
    Materialize.toast('Cannot pick a date equal to or prior to the current date', 3000,
      'rounded') // 'rounded' is the class I'm applying to the toast
    // Set value to be empty
    $('#edate').val("");
  } else{
    // Find the start date and check if it exists
    var startDate = $('#sdate').val();
    if (startDate != undefined && startDate != "" && startDate != null) {
      // Convert start date string to a date in UTC format
      var formattedStartDateUTC = getFormattedUTCDate(startDate);
      // Check to make sure that the end date is not before start date
      if (formattedStartDateUTC.getTime() >= formattedEndDateUTC.getTime()) {
        Materialize.toast('End Date cannot be before or equal to Start Date', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
        // Set end date value to be empty
        $('#edate').val("");
      }
    }
  }
}

function checkSelectedDateNotPriorCurrentDate(formattedDateUTC, currentDateUTC, dateId){
  //check to make sure that the date is not before today
  if (currentDateUTC.getTime() > formattedDateUTC.getTime()) {
    Materialize.toast('Cannot pick a date prior to current date', 3000, 'rounded') // 'rounded' is the class I'm applying to the toast
    // Set date value to be empty
    $(dateId).val("");
  }
}

// Get current date & convert it to UTC time
function getCurrentUTCDate(){
  var currentDate = new Date();
  return new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(),
    currentDate.getDate()));
}

// Convert date string to UTC date
function getFormattedUTCDate(date){
  var dateTokens = date.split(' ');
  var monthNum = getMonthFromString(dateTokens[1].substring(0, dateTokens[1].length - 1));
  return new Date(Date.UTC(dateTokens[2], monthNum, dateTokens[0]));
}

//Converts a string containing a full month to a number
//This is required to get correct date formatting
function getMonthFromString(mon) {
  var d = Date.parse(mon + "1, 2012");
  if (!isNaN(d)) {
    return new Date(d).getMonth();
  }
  return -1;
}
