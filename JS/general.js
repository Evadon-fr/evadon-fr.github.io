var bmH = document.querySelector('.botton-menu-h');
var mH = document.querySelector('.menu-h');
var mR = document.querySelector('.menu-r');

bmH.onclick = function(){
	mR.classList.toggle('menu-open');
	mH.classList.toggle('menu-open');
}