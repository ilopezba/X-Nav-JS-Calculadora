var primer ="";
var segun ="";
var sum = true;
var unos = "1";
function sumauno(){
	if(sum){
		primer = primer+"1";
		document.getElementById("res").innerHTML= primer;
	}else{
		segun = segun+"1";
		document.getElementById("res").innerHTML= segun;
	}
}

function plus(){	
	var mas = "";
	document.getElementById("res").innerHTML= mas;
	sum = false;
}

function sumazero(){	
	if(sum){
		primer = primer+"0";
		document.getElementById("res").innerHTML= primer;
	}else{
		segun = segun+"0";
		document.getElementById("res").innerHTML= segun;
	}
}
function res(){	
	var result;
	result = parseInt(primer, 2) + parseInt(segun, 2);
	document.getElementById("res").innerHTML= "= "+result.toString(2);
}















