setTimeout(() => {
    var allImgHeight = document.querySelectorAll('img[height]');
    for(var i = 0; i < allImgHeight.length; i++){
      allImgHeight[i].setAttribute("height", "auto");
    }
}, 3000);

// Get the button:

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
    if(allHardCoded[i].style.display != 'none'){
        allHardCoded[i].style = "animation-name: hidePortfolio; animation-fill-mode: forwards;animation-duration: 800ms";
    }
  }
    setTimeout(()=>{
      for(var i = 0; i < allHardCoded.length; i++){
          allHardCoded[i].style = "display: none";
      }
    }, 500)
}
showAllHardCoded = () => {
  if(allHardCoded[0].style.display == 'none'){
    setTimeout(()=>{
              for(var i = 0; i < allHardCoded.length; i++){
              if(allHardCoded[i].style.display == 'none'){
                allHardCoded[i].style = "animation-name: showPortfolio; animation-fill-mode: forwards;animation-duration: 800ms";
          }
        }

    },300)
  }




}


let allWordPress = document.querySelectorAll('[wordpress]');
hideAllWordPress = () => {
  for(var i = 0; i < allWordPress.length; i++){
    if(allWordPress[i].style.display != 'none'){
        allWordPress[i].style = "animation-name: hidePortfolio; animation-fill-mode: forwards;animation-duration: 800ms";
    } 
  }
  setTimeout(() => {
      for(var i = 0; i < allWordPress.length; i++){
          allWordPress[i].style = "display: none";
          }
  }, 500);
}
showAllWordPress = () => {
  if(allWordPress[0].style.display == 'none'){
    setTimeout(() => {
        for(var i = 0; i < allWordPress.length; i++){
          if(allWordPress[i].style.display == 'none'){
                  allWordPress[i].style = "animation-name: showPortfolio; animation-fill-mode: forwards;animation-duration: 800ms";
            }
 
         }
    }, 300);
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

showAll = () => {
   showAllWordPress();
    showAllHardCoded();

  }

