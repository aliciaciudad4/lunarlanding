# lunarlanding
## El posicionamiento de elementos

En esta practica nos hemos centrado mucho en el posicionamiento, hemos probado varios métodos de posicionamiento de los que dispone CSS como por ejemplo:
..* position: absolute;
..* position: relative;
..* position: sticky;

El que nos ha funcionado mejor para colocar el panel de control de la nave y el menú de opciones ha sido el relative, ya que hemos podido jugar con los valores de top y left principalmente.
Con el position: absolute no nos ha gustado el resultado ya que desplaza los otros elementos div, donde hace ocupar el espacio que deja libre al contrario que relative el cual mantiene el espacio inicial del div.

El position: sticky lo hemos utilizado para la nave para dar un especie de efecto como si quedara flotando enmedio de la pantalla.

## Tamaños y paddings
Hemos podido trabajar con tamaños, hemos visto que cuando utilizamos medidas exactas en pixeles hay que calcular aproximadamente las distancias para cuadrar las posiciones, sobretodo a la hora de adaptarlo en diferentes dispostivos.
Por ese motivo, hemos intentado utilizar medidas de tamaños con un valor porcentual para que se adapte un poco mejor al tamaño de la pantalla en caso de que cambie.

## Media queries
Nos hemos informado sobre el uso de los media queries y es una herramienta muy útil para adaptar nuestra página web a diferentes tamaños de pantalla de diferentes dispositivos.
Hemos visto que es posible introducir un media query en el head del documento html para que cargue diferentes hojas de estilos según el tamaño, cuando la pantalla alcanza el punto de rotura se carga otro CSS.

El media query que hemos utilizado es el siguiente: 
> <link rel="stylesheet" media="screen and (min-width:720px)" href="css/pc-estilo.css">
> <link rel="stylesheet" media="screen and (max-width:720px)" href="css/mob-estilo.css">

## Estética
Hemos aprovechado las transparencias que ofrece el formato de imagen .png, de este modo creemos que queda bien sin molestarse el fondo.

Las imagenes que hemos utilizado las hemos encontrado en Google utilizando el filtro "Etiquetas para reutilización no comercial".

Hemos aprendido el efecto :hover el cual lo hemos aplicado en los botónes para que cuando se pase el ratón por encima se aplique otro estilo.

## Minificación
Hemos descubierto la herramienta de minificación para ficheros HTML y CSS la cual, nos elimina los espacios en blanco y saltos de linia para conseguir reducir el peso de nuestros ficheros.

La herramienta que hemos utilizado es [HTML Minifier de willpeavy.com](https://www.willpeavy.com/minifier/)

## Git branch
Nos hemos informado un poco sobre los branch de git y procedemos a crear una para así tener el proyecto principal en la rama master y el proyecto minificado en la rama minified.





