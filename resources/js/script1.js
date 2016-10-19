const message = "test fra script 1";
 
const headerblock = document.getElementById("header");

var jquery = require('jquery')

if (jquery(headerblock).click(function(){
	alert(message)
}));
