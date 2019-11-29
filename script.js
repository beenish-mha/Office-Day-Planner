
//display current date on page
var date = new Date(); 
var dateOnPage= document.getElementById("current-date");

dateOnPage.textContent =date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();

 $(document).ready(function() {
     //save at local storage
    $(".save-button").click(function() {
     
      var $time =  $(this).parent().attr("id"); 
      if ($time === "5PM") {
         var $text = $("#task-17");
      }
      else if ($time === "4PM") {
        var $text = $("#task-16");
      }
      else if ($time === "3PM") {
        var $text = $("#task-15");
      }
      else if ($time === "2PM") {
        var $text = $("#task-14");
      }
      else if ($time === "1PM") {
        var $text = $("#task-13");
      }
      else if ($time === "12 Noon") {
        var $text = $("#task-12");
      }
      else if ($time === "11AM") {
        var $text = $("#task-11");
      }
      else if ($time === "10AM") {
        var $text = $("#task-10");
      }
      else if ($time === "9AM") {
        var $text = $("#task-9");
      }
    localStorage.setItem($time, $text.val());
     
    })
 })
