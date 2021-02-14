const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-link')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {	
   document.getElementById("navbar").style.position = 'fixed';
   document.getElementById("navbar").style.top = '0';
   document.getElementById("gotop").style.opacity = '0.5';
     document.getElementsByTagName('header')[0].style.marginTop = '100px';
   }
 else {
   document.getElementById("navbar").style.top = '-50px';
    document.getElementById("navbar").style.position = 'static';  
   document.getElementById("gotop").style.opacity = '0';
     document.getElementsByTagName('header')[0].style.marginTop = '0px';
   }
 }

new Glider(document.querySelector('.glider'),{
	slidesToShow: 1, // set number of how many slides to show, auto for autofit
	slidesToScroll: 1, // set number of slides to scroll upon click the button
    itemWidth: 150, // set the items fixed width
    duration: 2, // duration delay when moving to other slides
	draggable: true, // set true when items can be drag, false if not draggable
	dots: '#dots', // assign the element to have the dots
	arrows: { // arrows required for the library
		prev: '.glider-prev', // assign the element to have the prev button
		next: '.glider-next'// assign the element to have the next button
	},
	responsive: [ // setting for the glider responsive
    {
      breakpoint: 775,       // screens greater than >= 775px
      settings: {
        slidesToShow: 1,        // Set to `auto` and provide item width to adjust to viewport

        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25      }
    },{
      breakpoint: 1024,      // screens greater than >= 1024px
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
		}
    }
  ]
});