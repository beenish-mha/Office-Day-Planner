var date = new Date(); 
var dateOnPage= document.getElementById("current-date");
dateOnPage.textContent =date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();