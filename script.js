
//display current date on page
var date = new Date(); 
var dateOnPage= document.getElementById("current-date");

dateOnPage.textContent =date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();

 $(document).ready(function() {
     var $time;
     var $text;
     //save at local storage
    $(".save-button").click(function() {
     
      $time =  $(this).parent().attr("id"); 
      if ($time === "5PM") {
          $text = $("#task-17");
      }
      else if ($time === "4PM") {
         $text = $("#task-16");
      }
      else if ($time === "3PM") {
         $text = $("#task-15");
      }
      else if ($time === "2PM") {
         $text = $("#task-14");
      }
      else if ($time === "1PM") {
         $text = $("#task-13");
      }
      else if ($time === "12 Noon") {
         $text = $("#task-12");
      }
      else if ($time === "11AM") {
         $text = $("#task-11");
      }
      else if ($time === "10AM") {
         $text = $("#task-10");
      }
      else if ($time === "9AM") {
         $text = $("#task-9");
      }
    localStorage.setItem($time, $text.val());
     
    })

        
    var $savedData = localStorage.getItem("9AM")
    console.log($savedData);
 })
 
