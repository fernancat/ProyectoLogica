var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton1");
var input1 = parseInt(document.getElementById("input1").value);
var input2 = parseInt(document.getElementById("input2").value);
var input3 = parseInt(document.getElementById("input3").value);
var resultado = document.getElementById("resultado");

boton1.addEventListener('click', function menor(){
    if (input1 < input3){
        operacion = input1 * input2 *input3
       resultado.textContent = "SE MULTIPLICARON LOS 3 VALORES, Y EL RESULTADO ES: " + String(operacion);
    }
    else if(input2 == 0){
        operacion = input1 - input3;
        resultado.textContent = "SE RESTARON LOS VALORES GRACIAS QUE INPUT 2 =0, Y EL RESULTADO ES: " + String(operacion);
    }
})

boton2.addEventListener('click', function concatenar(){
    resultado.textContent = String(input1) + String(input2) + String(input3);
    resultado.textContent+= input1 * input2+ input3

})