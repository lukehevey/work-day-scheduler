// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = dayjs();
var saveBtn = $(".saveBtn")

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

$(function saveData() {
  saveBtn.on("click", saveData);
  var time = $(this).parent().attr("id");
  var event = $(this).siblings(".description").val();

  localStorage.setItem(time, event);

});

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
// function?

$(function timeVerbs() {
  var hourToday = dayjs().hour()

  $(".time-block").each(function () {
    var currentTime = parseInt($(this).attr("id"));

    if (currentTime > hourToday) {
      $(this).addClass("future");
      $(this).remove("present")
    } else if (currentTime === hourToday) {
      $(this).addClass("present");
      $(this).removeClass("past")
    } else {
      $(this).addClass("past");
      $(this).removeClass("future")
    }


  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  $("#9hour .description").val(localStorage.getItem("9hour"));
  $("#10hour .description").val(localStorage.getItem("10hour"));
  $("#11hour .description").val(localStorage.getItem("11hour"));
  $("#12hour .description").val(localStorage.getItem("12hour"));
  $("#13hour .description").val(localStorage.getItem("13hour"));
  $("#14hour .description").val(localStorage.getItem("14hour"));
  $("#15hour .description").val(localStorage.getItem("15hour"));
  $("#16hour .description").val(localStorage.getItem("16hour"));
  $("#17hour .description").val(localStorage.getItem("17hour"));

  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format('dddd, MMMM DD, YYYY'));
})