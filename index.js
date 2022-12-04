// Get the button:
console.log('connected');
let mybutton = document.getElementById("goTop");
mybutton.style.display = "none";
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "grid";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


dateCounter = document.querySelector('#date-counter');

dateCounter.innerHTML = new Date().getFullYear() - 2020;




let allHardCoded = document.querySelectorAll('[hardcoded]')
hideAllHardCoded = () => {
  for(var i = 0; i < allHardCoded.length; i++){
  allHardCoded[i].style = "display: none";
  }
}
showAllHardCoded = () => {
  for(var i = 0; i < allHardCoded.length; i++){
  allHardCoded[i].style = "display: grid";
  }
}


let allWordPress = document.querySelectorAll('[wordpress]');
hideAllWordPress = () => {
  for(var i = 0; i < allWordPress.length; i++){
  allWordPress[i].style = "display: none";
 
  }
}
showAllWordPress = () => {
  for(var i = 0; i < allWordPress.length; i++){
  allWordPress[i].style = "display: grid";
 
  }
}

hardCoded = () =>{
  showAllHardCoded();
  hideAllWordPress();
}

wordPress = () =>{
  showAllWordPress();
  hideAllHardCoded();
}