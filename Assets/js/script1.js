
//global variables

var currentDay = moment().format('dddd')
var currentTime = moment().format("MM D YYYY hh:mm");
var userSave=$("#user-input")


//display code on page load
//current day, day of week
$(document).ready(function() {
    console.log("testconnection")

    
var $timeNow= $("#time-display");
$timeNow.text(currentTime);

var $dayWeek= $("#weekday");
$dayWeek.text(currentDay);

});

//On click function - save to memory and then local storage
$(".col-md-2.btn.btn-info").on("click", function() {
    event.preventDefault()
    console.log("TESTBUTTON")
    var inputText=$(this).prevAll().val();
    console.log(inputText)
    var inputTime=$(this).parent().attr('id');
    console.log(inputTime)
    localStorage.setItem(inputTime, inputText);

});




