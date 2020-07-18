var bmH = document.querySelector('.botton-menu-h');
var mH = document.querySelector('.menu-h');
var mR = document.querySelector('.menu-r');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var zs = document.querySelector('.zone-sortir');

bmH.onclick = function(){
	mR.classList.toggle('menu-open');
	mH.classList.toggle('menu-open');
	b1.classList.toggle('select-off');
	b2.classList.toggle('select-off');
	zs.classList.toggle('menu-open');

}
zs.onclick = function(){
	mR.classList.toggle('menu-open');
	mH.classList.toggle('menu-open');
	b1.classList.toggle('select-off');
	b2.classList.toggle('select-off');
	zs.classList.toggle('menu-open');
}
