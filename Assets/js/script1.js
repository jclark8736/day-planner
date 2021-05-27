
//global variables

var currentDay = moment().format('dddd')
var currentTime = moment().format("MM D YYYY hh:mm");
var userSave=$("#user-input")
userSave.textContent


//display code on page load
//current day, day of week
$(document).ready(function() {
    

    
var $timeNow= $("#time-display");
$timeNow.text(currentTime);

var $dayWeek= $("#weekday");
$dayWeek.text(currentDay);

});

//On click function - save to memory and then local storage
$(".col-md-2.btn.btn-info").on("click", function() {
    event.preventDefault()
    var inputText=$(this).prevAll().val();
    console.log(inputText)
    var inputTime=$(this).parent().attr('id');
    console.log(inputTime)
    localStorage.setItem(inputTime, inputText);

});



//getting items from local storage

function pullLocal() {
    for (i = 7; i < 18; i++) {
        $("#"+i).children("#user-text").val(localStorage.getItem(i));
        
    }


};


pullLocal()

//comparing time for blocks

function compareTime() {
    var currentHour=moment().hour()
    console.log(currentHour)
    $(".hour-section").each(function (index, hourSection ) {
        console.log(parseInt(hourSection.id));
        if  (parseInt(hourSection.id) < currentHour) {
            console.log("Test")
            $(this).children("textarea").addClass("past");
        }
        else $(this).children("textarea").addClass("future")
        
    })
};

$("#user-text").addClass("text")

compareTime()


// example for loop numbers 7-17
    // localStorage.getItem[8]
    // console.log(localStorage[7])
    // $("#8").children("#user-text").val(localStorage.getItem("8"));
    // var teststorage= localStorage[7];
    // console.log(teststorage);