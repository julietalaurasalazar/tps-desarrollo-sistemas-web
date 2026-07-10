//EJERCICIO #1
function sumar (a,b) {
    return a + b;
}

function restar (a,b) {
    return a - b;
}

function multiplicar (a,b) {
    return a * b;
}

function dividir (a,b) {
    if (b === 0) {
        console.log("Error: No es posible dividir por cero.");
    } else {
        return a / b;
    }

    return "Error";
}

let num1 = parseFloat(prompt("Para calcular ingrese un número: "));
let num2 = parseFloat(prompt("Ingrese otro número: "));

console.log("Suma: " + sumar(num1, num2));
console.log("Resta: " + restar(num1, num2));
console.log("Multiplicación: " + multiplicar(num1, num2));
console.log("División: " + dividir(num1, num2));

//EJERCICIO #2
function generarProductos() {
    const PRODUCTOS = [{ id: 1, name: "Remera", description: "Remera roja", amount: 10000}, { id: 2, name: "Pantalon", description: "Pantalon de jean", amount: 30000}, { id: 3, name: "Gorra", description: "Gorra con bordado", amount: 15000}, { id: 4, name: "Zapatillas", description: "Zapatillas azules", amount: 25000}, { id: 5, name: "Campera", description: "Campera impermeable", amount: 50000}];
    return PRODUCTOS;
}

let catalogo = generarProductos();

catalogo.forEach((producto) => {
    console.log(producto);
});