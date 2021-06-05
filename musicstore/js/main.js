document.getElementById("togglemenu").addEventListener("click", toggleMenu);
var i = false;
function toggleMenu(){
	if(i == false){
		document.getElementsByClassName('navbar-menu')[0].style.display = 'flex';
		i = true;
	}
	else{
		document.getElementsByClassName("navbar-menu")[0].style.display = "none";
		i = false;
	}
}


//for the slider
$(document).ready(function(){
  $('.single-item').slick({
 });
    $(".regular").slick({
        dots: false, 
        infinite: true,	
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
		responsive: [
    {

      breakpoint: 900,
      settings: {
        slidesToShow: 1,
 		autoplay: true,
		autoplaySpeed: 3000,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      });
 
 });
 
