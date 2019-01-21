
function CrearCalculadora(){

	function decrementar(element){
		element.target.style.width="21%";
	}
	function decrementar2(element){
		element.target.style.width="28%";
	}
	function decrementar3(element){
		element.target.style.width="87%";
	}
	function incrementar(element){
		element.target.style.width="22%";
	}
	function incrementar2(element){
		element.target.style.width="29%";
	}
	function incrementar3(element){
		element.target.style.width="90%";
	}
	
	function Operar(numero1,numero2,operador){
		console.log(numero1);
		console.log(numero2);
		console.log(operador);
		if (operador==="+"){
			numero1=numero1+numero2;
		}else{
			if (operador==="-"){
				numero1=numero1-numero2;
			}else{
				if (operador==="x"){
					numero1=numero1*numero2;
				}else{
					if (operador==="/"){
						numero1=numero1/numero2;
					}
				}
			}
		}
		return  numero1.toFixed(2);
	}
	
	function añadirSimbolo(element){
		current=document.getElementById("display").innerHTML;
		if (current==="0"){
			if (element.target.id==="punto"){
				document.getElementById("display").innerHTML="0";
			}else{
				document.getElementById("display").innerHTML="";
			}
			
		}
		if ((current==="x")||(current==="+")||(current==="-")||(current==="/")){
			document.getElementById("display").innerHTML="";
		}
		if (current.length<8){
			if (element.target.id==="punto") {
				if (current[current.length-1]==="."){
					document.getElementById("display").innerHTML=document.getElementById("display").innerHTML;
				}else{
					document.getElementById("display").innerHTML=document.getElementById("display").innerHTML+".";
				}				
			}else{
				if (element.target.id==="sign") {
					document.getElementById("display").innerHTML=(parseFloat(current)*(-1));
				}else{	
					if (element.target.id==="raiz") {
						document.getElementById("display").innerHTML=document.getElementById("display").innerHTML;
					}else{
						document.getElementById("display").innerHTML=document.getElementById("display").innerHTML+element.target.id;
					}			
				}
			}
		}
		
				
		if (element.target.id==="mas") {
			
			if (Numero1===0){
				Numero1=parseFloat(current);
				document.getElementById("display").innerHTML="+";
				Op="+";
			}else{
				Numero2=parseFloat(current);
				Numero1=Operar(Numero1,Numero2,Op);
				Numero2=0;
			 	document.getElementById("display").innerHTML="+";
			 	Op="+"
			}
								
		}else{
			if (element.target.id==="menos") {
				
				if (Numero1===0){
					Numero1=parseFloat(current);
					document.getElementById("display").innerHTML="-";
					Op="-";
				}else{
					Numero2=parseFloat(current);
					Numero1=Operar(Numero1,Numero2,Op);
					Numero2=0;
					document.getElementById("display").innerHTML="-";
					Op="-"
				}		
			}else{
				if (element.target.id==="por") {	
					if (Numero1===0){
						Numero1=parseFloat(current);
						document.getElementById("display").innerHTML="x";
						Op="x";					
					}else{
						Numero2=parseFloat(current);
						Numero1=Operar(Numero1,Numero2,Op);
						Numero2=0;
						document.getElementById("display").innerHTML="x";
						Op="x"
					}
				}else{
					if (element.target.id==="dividido") {
						if (Numero1===0){
							Numero1=parseFloat(current);
							document.getElementById("display").innerHTML="/";
							Op="/";					
						}else{
							Numero2=parseFloat(current);
							Numero1=Operar(Numero1,Numero2,Op);
							Numero2=0;
							document.getElementById("display").innerHTML="/";
							Op="/"
						}
					}else{
						if (element.target.id==="igual") {
							if (Numero1===0){
								Numero1=parseFloat(current);
							}else{
								Numero2=parseFloat(current);
								Numero1=Operar(Numero1,Numero2,Op);
								Numero2=0;
								document.getElementById("display").innerHTML=Numero1;
								Numero1=0;
							}										
						}
					}
				}
			}
		}	


		if (element.target.id==="on") {
			Numero1=0;
			Numero2=0;
			Op=0;
			document.getElementById("display").innerHTML="0";
		}
	}
	
		function agregarEventosTeclas(){
		var teclas=document.getElementsByClassName("tecla");

		for (var i = teclas.length - 1; i >= 0; i--) {
			if (teclas[i].classList.contains('left')){
				teclas[i].onmouseup=incrementar2;
				teclas[i].onmousedown=decrementar2;
			}else{
				if (teclas[i].classList.contains('right')){
					teclas[i].onmouseup=incrementar3;
					teclas[i].onmousedown=decrementar3;
				}else{
					teclas[i].onmouseup=incrementar;
					teclas[i].onmousedown=decrementar;
				}
			}
			teclas[i].onclick=añadirSimbolo;
		}

	}
	agregarEventosTeclas();
}

var calculadora=CrearCalculadora();
