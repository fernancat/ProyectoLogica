var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton1");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var resultado = document.getElementById("resultado");

boton1.addEventListener('click', function menor(){

    if (parseInt(input1.value) < parseInt(+input3.value) && parseInt(input2.value)!=0){
        console.log('se ejecuto la primera')
        operacion = parseInt(input1.value) * parseInt(input2.value)  * parseInt(input3.value);
        console.log(operacion)
        resultado.textContent = "SE MULTIPLICARON LOS 3 VALORES: " + operacion;
    }
    else if(input2.value == 0){
        operacion = parseInt(input1.value) - parseInt(input3.value);
        resultado.textContent += "SE RESTARON LOS VALORES GRACIAS QUE INPUT 2 =0, Y EL RESULTADO ES: " + String(operacion);
    }

})

boton2.addEventListener('click', function concatenar(){
    resultado.textContent = String(input1.value) + String(input2.value) + String(input3.value);
    resultado.textContent+= parseInt(input1.value) * parseInt(input2.value)+ parseInt(input3.value);

})