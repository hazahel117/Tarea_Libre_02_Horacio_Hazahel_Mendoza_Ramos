const estilo = document.documentElement.style;

let btn1 = document.getElementById("btn");
let colorCambio = false;

function cambiarColor(){
    if(colorCambio === false){
        estilo.setProperty("--fondo-morado", "#1AF710");
        estilo.setProperty("--fondo-viewport", "#1daa00");
        estilo.setProperty("--fondo-gris", "#F78910");
        estilo.setProperty("--fondo-total", "#fff");
        colorCambio = true;
    }else{
        estilo.setProperty("--fondo-morado", "#4420a1");
        estilo.setProperty("--fondo-viewport", "#8f8d87");
        estilo.setProperty("--fondo-gris", "#404040");
        estilo.setProperty("--fondo-total", "#d9d9d9");
        colorCambio = false;
    }
}
btn1.addEventListener("click", cambiarColor);

function cambiarFuente(){
    fuente = document.getElementsByTagName('select')[0].value;
    estilo.setProperty("--fuente", fuente);
}