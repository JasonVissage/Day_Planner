var currentDateEl = $("#currentDay");
var currentDate = moment().format("LL"); 
var textAreaEl = $("textarea");
var currentHour = moment().format("H");

//Current date on page
currentDateEl.text(currentDate);

$(".saveBtn").on("click", function() {
    var text = $(this).siblings("textarea").val();
    var time = $(this).siblings("textarea").attr("id");
    localStorage.setItem(time, text)
});

for( var i=9; i <= 17; i++) {
$("#" + i).val(localStorage.getItem(i));
};

$("textarea").each(function() {
    var textareaHour = parseInt($(this).attr("id"));
    currentHour = parseInt(currentHour);
    console.log(currentHour)
    if (textareaHour < currentHour) {
        $(this).addClass("past")
    }
    else if (textareaHour === currentHour) {
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }
});