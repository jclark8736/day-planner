$(".saveBtn").on("click", function() {

    var value = $(this).siblings('.userInput').val();
    var time=$(this).parent().attr('id');

    localStorage.setItem(time, value);
}





//load things from local storage
$('#hour-9 .userInput').val(localStorage.getItem('hour-9'))