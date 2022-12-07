var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var draw_color = document.getElementById("draw_colorcito");

boton.addEventListener("click", dibujo_por_click);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujar_linea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujo_por_click()
{

    var lineas = parseInt(texto.value);
    var l = 0;
    var yf, xi;
    var line_color = draw_color.value;
    var espacio = ancho / lineas;

    //Tambien se puede prgramar así
    /*while(l < lineas)
    {
        yf = 10 * l;
        xi = 10 * (l + 1);
        dibujar_linea(line_color, xi, 0, 300, yf);
        dibujar_linea(line_color, xi, 300, 0, yf);
        console.log("Lineas " + l);
        l = l + 1;
    }*/

    for(l = 0; l < lineas; l++)
    {
        yf = espacio * l;
        xi = espacio * (l + 1);
        dibujar_linea(line_color, xi, 0, 300, yf);
        dibujar_linea(line_color, xi, 300, 0, yf);
        console.log("Lineas " + l);
    }

    dibujar_linea(line_color, 1, 1, 1, 299);
    dibujar_linea(line_color, 1, 299, 299, 299);
    dibujar_linea(line_color, 299, 299, 299, 1);
    dibujar_linea(line_color, 299, 1, 1, 1);


}