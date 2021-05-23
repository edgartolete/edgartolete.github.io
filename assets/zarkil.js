/******************************************************
TABLE OF CONTENTS



- SOCIAL SHARE


******************************************************/

var menuSwitch = true;

function closeNav1(){
	document.getElementById('menu1').style.display = 'none';
	menuSwitch = true;
}

function menuHide2(){
	document.getElementById('menu2').children[0].style.display = 'none';
}
function menuShow2(){
	document.getElementById('menu2').children[0].style.display = 'flex';
	document.getElementById('menu2').children[0].style.animation = 'showMenu 300ms';
}

function openNav1(){
	const menuBtn = document.querySelector('#bar2');
	const menuOpt = document.querySelector('#menu2');
	if (menuSwitch == true){
		document.getElementById('menu1').style.display = 'flex';
		menuSwitch = false;	
		document.getElementById('menu1').addEventListener('click',closeNav1);
	}
	else{
		document.getElementById('menu1').style.display = 'none';
		menuSwitch = true;
	}
}

function openNav2(){
	const menuBtn = document.querySelector('#bar2');
	/*querySelector selects which ID or Class you can add another class using .classList.add funtion*/
	const menuOpt = document.querySelector('#menu2');
	const socialLink = document.querySelector('#social2');
	if (menuSwitch == true){
		menuBtn.classList.add('openNav2');
		menuOpt.classList.add('openMenu2');
		socialLink.classList.add('socialOpen2');
		socialLink.classList.remove('socialClose2');
		menuOpt.classList.remove('closeMenu2');
		menuShow2 ();
		menuSwitch = false;
	}
	else{
		menuBtn.classList.remove('openNav2');
		menuOpt.classList.remove('openMenu2');
		socialLink.classList.remove('socialOpen2');
		socialLink.classList.add('socialClose2');
		menuOpt.classList.add('closeMenu2');
		setTimeout(menuHide2, 300);
		menuSwitch = true;
	}
}

/*  - SOCIAL SHARE */
function socialShare(){
	document.querySelector('#shareFacebook').href = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
	document.querySelector('#shareTwitter').href = "https://twitter.com/intent/tweet?text=" + window.location.href;
	document.querySelector('#shareLinkedin').href = "https://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href;
	document.querySelector('#sharePinterest').href = "http://pinterest.com/pin/create/button/?url=" + window.location.href;

}

