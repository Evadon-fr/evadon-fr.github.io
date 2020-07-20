var st1 = document.getElementById('span-destination')
var st2 = document.getElementById('span-date')

var op1 = document.getElementById("destination").options[document.getElementById('destination').selectedIndex].text;
var op1Def ='Destination'
var option1 = 'Def';
b1.onclick = function(){
	if(op1 != option1){
		var op1 = document.getElementById("destination").options[document.getElementById('destination').selectedIndex].text;
		st1.textContent = op1;
		option1 = op1;
	}
}

var op2 = document.getElementById("date").options[document.getElementById('date').selectedIndex].text;
var op2Def ='Date de départ'
var option2 = 'Def';
b2.onclick = function(){
	if(op2 != option2){
		var op2 = document.getElementById("date").options[document.getElementById('date').selectedIndex].text;
		st2.textContent = op2;
		option1 = op2;	
	}
}


