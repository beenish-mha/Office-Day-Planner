
//display current date on page
var date = new Date(); 
var dateOnPage= document.getElementById("current-date");

dateOnPage.textContent =date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();

 $(document).ready(function() {
     var $time;
     var $text;
     var $name = $("#name")
   
     //save at local storage
    $(".save-button").click(function() {
        localStorage.setItem("name",$name.val())
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
      else if ($time === "Noon") {
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

// getting data from local storage and displaying on textarea
   
   $("#name").val(localStorage.getItem("name"));
   $("#task-9").val(localStorage.getItem("9AM"));
   $("#task-10").val(localStorage.getItem("10AM"));
   $("#task-11").val(localStorage.getItem("11AM"));
   $("#task-12").val(localStorage.getItem("Noon"));
   $("#task-13").val(localStorage.getItem("1PM"));
   $("#task-14").val(localStorage.getItem("2PM"));
   $("#task-15").val(localStorage.getItem("3PM"));
   $("#task-16").val(localStorage.getItem("4PM"));
   $("#task-17").val(localStorage.getItem("5PM"));  
 })
 
