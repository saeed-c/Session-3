function checkValue() {
  var text;
  var lang = document.getElementById("inputValue").value;

  switch(lang) {
    case "Monday":
    text = "Yay!";
    break;
   case "Wednesday":
    text = "OK";
    break;
  case "Friday":
   text = "Right";
   break;

// add case here

   default:
     text = "You need to enter something!";
  }
  document.getElementById("displayText").innerHTML = text;
}
