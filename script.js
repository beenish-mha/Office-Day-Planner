
//display current date on page
var date = new Date(); 
var dateOnPage= document.getElementById("current-date");
dateOnPage.textContent =date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();

 $(document).ready(function() {
 $(".save-button").click(function() {
 console.log("hello");
 })
 })
