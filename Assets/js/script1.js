
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

//Store user input
$("#user-input").on("click", function() {
    event.preventDefault()
    console.log("TESTBUTTON")
    
    
}

)


