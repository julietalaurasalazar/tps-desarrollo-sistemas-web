// EJERCICIO #1
let suma, resta, multiplicacion, division, modulo;

let num1 = parseFloat(prompt("Para realizar operaciones aritméticas, ingrese un número: "));
let num2 = parseFloat(prompt("Ingrese otro número: "));

if (!isNaN(num1) && !isNaN(num2)) {
    suma = num1+num2;
    resta = num1-num2;
    multiplicacion = num1*num2;
    if (num2 !== 0){
        division = num1/num2;
        modulo = num1%num2;
    } else {
        division = "No es posible dividir por cero";
        modulo = "No es posible calcular el módulo con divisor cero";
    }
    console.log("Suma: " + suma + "\nResta: " + resta + "\nMultiplicación: " + multiplicacion + "\nDivisión: " + division + "\nMódulo: " + modulo);
} else {
    alert("Por favor, ingrese valores numéricos válidos.");
}

// EJERCICIO #2
let nombre = prompt("Ingrese su nombre: ");
let edad = parseInt(prompt("Ingrese su edad: "));

if (!isNaN(edad)) {
    if (edad >=18) {
        console.log("Tu nombre es " + nombre + " tenes " + edad + " años y sos mayor de edad.");
    } else {
        console.log("Tu nombre es " + nombre + " tenes " + edad + " años y sos menor de edad.");
    }
} else {
    alert("La edad debe ser un número entero.");
}

// EJERCICIO #3
let producto1 = {nombre: 'Atrapasueños', precio: 2000, stock: 10};
console.log("Producto: " + producto1.nombre);
console.log("Precio: " + producto1.precio);

let producto2 = {nombre: 'Vela aromática', precio: 5000, stock: 6};
let producto3 = {nombre: 'Incienzo', precio: 1500, stock: 20};

let catalogo = [producto1, producto2, producto3];

console.log(catalogo);

console.log("Nombre del producto 2: " + catalogo[1].nombre);