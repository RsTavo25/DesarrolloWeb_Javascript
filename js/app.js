
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
}

var calculadora=CrearCalculadora();
