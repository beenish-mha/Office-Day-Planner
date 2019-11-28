
//display current date on page
var date = new Date(); 
var dateOnPage= document.getElementById("current-date");

dateOnPage.textContent =date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();

 $(document).ready(function() {
 $(".save-button").click(function() {
     var $text = $("#task-17")
     var $time = $("#time-9") 
     //console.log($time.textContent);
     var $time =  $(this).parent().attr("id");
     
    localStorage.setItem($time, $text.val());
     console.log("hello");
 })
 })
