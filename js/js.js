
//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;

//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;
var umbral= null; //añadimos umbral para controlar la velocidad de la nave para controlar la explosión


//al cargar por completo la página...
window.onload = function(){

	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");
	
	//definición de eventos
	//mostrar menú móvil
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	//encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//Empezar a mover la nave justo después de cargar la página
	start();
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);

	compruebaAterrizaje();

}

function compruebaAterrizaje(){
    if(v > umbral){
    	document.getElementById('nave-img').src = "img/boom.png";
		var win = "Has perdido :(";

    }else{
    	var win = "Has ganado :)";
    }

    document.getElementById('msgGameOVer').style.display = "block";
    document.getElementById('msgWin').innerHTML = win;
}

function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	//actualizar marcadores
	velocidad.innerHTML=v;
	altura.innerHTML=y;
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
	} else { 
		stop();
	}
}
function motorOn(){
	//el motor da aceleración a la nave
	a=-g;
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);	
	document.getElementById('nave-img').src = "img/coheteON.png";
}

function motorOff(){
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
	document.getElementById('nave-img').src = "img/coheteOFF.png";
}
function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=0.1;
	if (c < 0 ) c = 0;
	combustible.innerHTML=c;	
}

function confirmarSalida(accion){
    /*Preguntar si desea salir al hacer click en elementos del menú

    Pásamos por un párametro cuando llámamos la funcion , tenemos 3 opciones para indicar el destino donde queremos llegar
     */

    switch (accion) {
        case 1:
            destino = "index.html";
            break;
        case 2:
            destino = "instrucciones.html";
            break;
        case 3:
            destino = "acercade.html";
            break;
    }


    var r = confirm("Se va a perder la partida, ¿Segudo que quieres salir?");
    if (r == true) {
        location.href = destino;
    }
}

function iniciaUmbral(numero) {
	umbral = numero;
}


