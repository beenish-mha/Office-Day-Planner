var $time;
var $text;
$currentHour = parseInt(moment().format("HH"));
console.log($currentHour);

//display current date on page
$dateOnPage = $("#current-date");
$dateOnPage.text(moment().format('dddd    DD/ MM/ YYYY'));


//get the id of each row to compare with current time
var $timeArray = [];
$("#main-section").find("tr").each(function(){
    $timeArray.push($(this).attr("id")); 
   });
var $numb;

//change the color of textcontent according to the current time
for( var i = 0; i< $timeArray.length; i++){
   $numb = parseInt($timeArray[i]);
  if ($currentHour > $numb){
      console.log("past ");
      $("#task-"+$numb).css("background-color","lightgrey");
  } 
  else if ($currentHour < $numb) {
      console.log("future");
      $("#task-"+$numb).css("background-color","lightblue");
   }
  else if ($currentHour === $numb) {
      console.log("present");
      $("#task-"+$numb).css("background-color","lightgreen");
   }
}


 $(document).ready(function() {
     //save at local storage
    $(".save-button").click(function() {
      $time =  $(this).parent().attr("id"); 
      if ($time === "5PM") {
         console.log($time)
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
      else if ($time === "NOON") {
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
   
   $("#task-9").val(localStorage.getItem("9AM"));
   $("#task-10").val(localStorage.getItem("10AM"));
   $("#task-11").val(localStorage.getItem("11AM"));
   $("#task-12").val(localStorage.getItem("NOON"));
   $("#task-13").val(localStorage.getItem("1PM"));
   $("#task-14").val(localStorage.getItem("2PM"));
   $("#task-15").val(localStorage.getItem("3PM"));
   $("#task-16").val(localStorage.getItem("4PM"));
   $("#task-17").val(localStorage.getItem("5PM"));  

})