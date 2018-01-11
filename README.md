# Lunar lander con html, css y javascript
Versión esqueleto del juego Lunar Landing que incluye:

* Html con los elementos básicos del juego
* Css: d.css y m.css dos versiones que cargan mediante media query dependiendo del tamaño de pantalla.
* Js: programación realista básica necesaria para dejar caer la nave y parar cuando llega a un límite. Actualiza la velocidad y la altura en %/s y % (1% de pantalla = 1 metro).
* No dispone de imágenes.

Previsualización: https://rawgit.com/urbinapro/lunar-landing-javascript/master/index.html

Tareas a desarrollar:
* Ponerlo bonito según vuestro diseño anterior. No te olvides de optimizar las imágenes. Recuerda que se pueden cargar diferentes tamaños y formas de fondos en función del dispositivo usando css.

>Hemos intentando adaptar lo mejor posible los elementos utilizados en el anterior Lunar Landing, nos hemos basado en la estructura ofrecida para colocar correctamente los elementos utilizando las propiedes de posicionamiento de CSS. Hemos adaptado los elementos para que se adapten a una pantalla de ordenador en el fichero d.css y para dispositivos móviles hemos adaptado los estilos en el fichero m.css

* Poner los menús (móvil y escritorio) según vuestro diseño anterior.

>Se han añadido los menús , no obstante los enlaces se han adaptado para reiniciar el juego y visitar las páginas de información. 

* Al pulsar una tecla, hacer click en el botón de power o bien hacer click en la pantalla la nave debe cambiar de aspecto a *nave con motor encendido* y debe cambiar la aceleración de g a -g (ejecutar motorOn).

> Hemos modificado el código JS en el fichero js.js para poder cambiar la imagen de la nave, de este modo el proyecto dispone de dos imágenes para la nave (coheteON.png y cocheteOFF.png) donde hemos editado la imágen para eliminar la simulación de expulsión de fuego, al intercambiar las imágenes da la sensación de que el motor se enciende y apagar.
> Para conseguir éste efecto hemos capturado el elemento imágen, el cual dispone de un id propio, utilizando la función getElementById y cambiando la propiedad src de la imágen.

* Opcionalmente se pueden disponer de menores o mayores tanques de combustible para aumentar o disminuir la dificultad del juego.

>Hemos crado 3 documentos HTML para los 3 diferentes nivel de dificultad, de esta manera cuando se inicia cada modo se carga el fichero html correspondiente, dentro de dicho documento hemos añadido un script el cual llama una funcion definida en js.js y le pasamos por paràmetro un valor númerico el cual pasará a ser el umbral.

* Al tocar fondo debe mirarse si la velocidad de impacto es inferior a un valor umbral, en caso afirmativo mostrar mensaje de felicitación, en caso negativo explotar la nave. En ambos casos el juego finaliza y puede reiniciarse con la opción del menú *reiniciar*

>Disponemos de la variable umbral, la cual fijará el limite de velocidad para estrellarse o no, posteriomente hemos definido una funcion la cual al llegar abajo comprueba si el valor de la velocidad es inferior o mayor al umbral. La comprobación se realiza con un if y según el valor aparece un mensaje indicando si ha ganado o perdido, en caso de perder la imagén de la nave cambia a una imagen de boom

* Debes poder elegir diferentes valores umbrales: 1m/s en modo difícil, 5m/s en modo muy fácil.

>Según el modo de dificultad se inicia un valor en el umbral

* Debe haber una página de *How to play* y una página de *About* accesibles desde el menú (vas a otras páginas saliendo del juego con un avisador o mensaje de comfirmación de que sales de la partida).

> Se han generado ficheros html para acceder con el menú

Cualquier otra funcionalidad o cambio debe quedar debidamente documentado.
> Añadida funcion compruebaAterrizaje() para comprobar si va a explotar o no la nave según la velocidad linia 67 de js.js
> Añadida funcion confirmarSalida(accion) para pedir si está seguro que desea salir de la partida linia 117 de js.js
> Añadida funcion iniciaUmbral(numero) para inicializar el valor del umbral en linia 142 de js.js
>

**Este repositorio es susceptible de sufrir modificaciones sin previo aviso**

Se ha validado los documentos html mediante el validador de W3
