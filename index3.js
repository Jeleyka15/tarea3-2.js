// creando funciones

function suma_y_muestra(){
    //variables

    //proceso
    resultado = numero1 + numero2;
    //salida
    alert("El resultado es:" + resultado);
}
//declarando variables de aplicación
var resultado;
var numero1 = 3;
var numero2 = 5;

//llamar o ejecutar la funcion 
suma_y_muestra();

//reasignando valores a las variables de la aplicación
numero1 = 10;
numero2 = 7;

//volvemos a llamar a la acción
suma_y_muestra();

//llamar a la funcion de botones 3 y 4
const boton3 = document.getElementById("btnEnviar3");
const boton4 = document.getElementById("btnEnviar4");

boton3.onclick = () => suma_y_muestra();
boton4.onclick = () => suma_y_muestra();