// EJERCICIO #1
let nombre = prompt("Ingrese su nombre: ");
let correo = prompt("Ingrese su correo electrónico: ");
let mensaje= prompt("Ingrese su mensaje: ");

function validarFormulario(nombre, correo, mensaje) {
    mensaje = mensaje.trim();
    if (nombre.trim() === "" || correo.trim() === "" || mensaje.trim() === "") {
        mensaje = "Faltan completar campos obligatorios.";
    } else {
        mensaje = "Formulario completo, listo para enviar.";
    }
    return mensaje;
}

let formulario = validarFormulario(nombre, correo, mensaje);
console.log(formulario);

// EJERCICIO #2
const PRODUCTOS = ["remera", "pantalon", "gorra", "zapatillas", "campera"];
let contador = 0;

for(const producto of PRODUCTOS) {
    
    alert(producto);
    contador++;
}

console.log("Lista de productos mostrada correctamente, contiene " + contador + " productos.");