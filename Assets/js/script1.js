
//global variables

var currentDay = moment().format("MM Do YYYY");
var currentTime = moment().format("MM DO YYYY hh:mm")
var testTime=document.getElementById("time-display")
//display code on page load

$(document).ready(function() {
    console.log("testconnection")

    
var $timeNow= $("#time-display");
$timeNow.text(currentTime);



});


