var bmH = document.querySelector('.botton-menu-h');
var mH = document.querySelector('.menu-h');
var mR = document.querySelector('.menu-r');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var zs = document.querySelector('.zone-sortir');

var body = document.querySelector('body')
var titrePage = document.getElementById('titre-page').textContent;
//---------------------------------------------------------------------
//---------ACCEUIL------------------------------
//------------------------------------------------------------------
//console.log("oky-doky")}else{console.log("pas bon le contenu est :" + titrePage)
if (titrePage == 'Evadon') {
		bmH.onclick = function(){
		mR.classList.toggle('menu-open');
		mH.classList.toggle('menu-open');
		b1.classList.toggle('select-off');
		b2.classList.toggle('select-off');
		zs.classList.toggle('menu-open');
		body.classList.toggle('scrol-off');
		
	}
	zs.onclick = function(){
		mR.classList.toggle('menu-open');
		mH.classList.toggle('menu-open');
		b1.classList.toggle('select-off');
		b2.classList.toggle('select-off');
		zs.classList.toggle('menu-open');
		body.classList.toggle('scrol-off');

	}

	var st1 = document.getElementById('span-destination')
	var st2 = document.getElementById('span-date')

	var op1 = document.getElementById("destination").options[document.getElementById('destination').selectedIndex].text;
	var op1Def ='Destination'
	var option1 = 'Def';
	b1.onclick = function(){
		if(op1 != option1){
			var op1 = document.getElementById("destination").options[document.getElementById('destination').selectedIndex].text;
			st1.textContent = op1;
			option = op1;
		}
	}

	var op2 = document.getElementById("date").options[document.getElementById('date').selectedIndex].text;
	var op2Def ='Date de départ'
	var option2 = 'Def';
	b2.onclick = function(){
		if(op2 != option2){
			var op2 = document.getElementById("date").options[document.getElementById('date').selectedIndex].text;
			st2.textContent = op2;
			option = op2;	
		}
	}

	//------------------------------------------------------

	var btnR = document.querySelector('.botton-recherche');
	var zpopup = document.querySelector('.popup-zone-sortir');

	btnR.onclick = function(){
		zpopup.classList.toggle('popoup-open');
		st1.textContent = op1Def;
		st2.textContent = op2Def;
		body.classList.toggle('scrol-off');
		
	}
	zpopup.onclick = function(){
		zpopup.classList.toggle('popoup-open');
		body.classList.toggle('scrol-off');
	}


	//------------------------------------
	
}


//---------------------------------------------------------------------
//--------- PAGE - ARTICLE - 1 ------------------------------
//------------------------------------------------------------------
if (titrePage == 'Game of Thrones') {
	bmH.onclick = function(){
		mR.classList.toggle('menu-open');
		mH.classList.toggle('menu-open');
		zs.classList.toggle('menu-open');
		body.classList.toggle('scrol-off');	
	}
	zs.onclick = function(){
		mR.classList.toggle('menu-open');
		mH.classList.toggle('menu-open');;
		zs.classList.toggle('menu-open');
		body.classList.toggle('scrol-off');
	}

	//-----------------------------------------------

	var btnR = document.querySelector('.botton-reserve');
	var zpopup = document.querySelector('.popup-zone-sortir');

	btnR.onclick =function(){
		zpopup.classList.toggle('popoup-open');
		body.classList.toggle('scrol-off');
		
	}
	zpopup.onclick = function(){
		zpopup.classList.toggle('popoup-open');
		body.classList.toggle('scrol-off');
	}

}


