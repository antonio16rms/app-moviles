//Se crea una constante para almacenar el contenido sacado del documento con el id display
const display = document.getElementById('display');

//Se crea una funcion a la que se le introduce un valor e indica que el valor del display aumente
function appendToDisplay(value) {
    display.value += value;
}
//Se crea una funcion a la que se establece que el display sea nulo entonces se limpia el mismo
function clearDisplay() {
    display.value = '';
}
//Se crea una funcion  y se establece una variable let que se iguala con el valor del display y luego se usa la funcion integrada slice para separar el contenido del mismo
function deleteLast() {
    let displayCopyValue = display.value;
    display.value = displayCopyValue.slice(0, -1);
}
//Se crea una funcion en la que se usa un try and catch para ver si hay error y iguala la fucnion integrada de eval para operaciones matematicas del
//display y despues hace que el resultado se mustre en el display, si hay un error se muestra una alerta de Expresion Invalida.
function calculateResult() {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        alert('Expresión Invalida')
    }
}