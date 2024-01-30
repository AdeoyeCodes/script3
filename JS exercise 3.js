function RUN() {
 var input = document.getElementById('real').value;
 

 if(input.trim()== "") {
alert('Here you come again 🤦‍♀️. Type something 😲!!!');
return false;

 }
 /*remove leading/trailing white spaces*/
 input = input.trim();
 var countchar = input.length;

 alert(''+countchar+' characters were detetcted in this form');
 

}