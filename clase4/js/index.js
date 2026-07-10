import { agregarProducto, mostrarProductos, eliminarProducto, vaciarCarrito } from "./carrito.js";
const arrayProducto = [];

const programa = () => {

    let opcion;

    do {

        opcion = prompt("Elija una opción: \n1. Agregar producto \n2. Eliminar productos \n3. Vaciar carrito \n4. Mostrar productos \n5. Terminar");

        switch (opcion) {
            case "1":
                let nombre = prompt("Ingrese el nombre del producto:").toLowerCase();
                let precio = parseFloat(prompt("Ingrese el precio del producto:"));
                const producto = { nombre, precio };
                agregarProducto(producto, arrayProducto);
                break;
            case "2":
                let productoEliminar = prompt("Ingrese el nombre del producto a eliminar:").toLowerCase();
                eliminarProducto(productoEliminar, arrayProducto);
                break;
            case "3":
                vaciarCarrito(arrayProducto);
                break;
            case "4":
                mostrarProductos(arrayProducto);
                break;
            case "5":
                console.log("Programa terminado");
                break;
            default:
                console.log("Opción no válida");
                break;
        }
    } while (opcion !== "5");

}

programa();
console.log(arrayProducto);