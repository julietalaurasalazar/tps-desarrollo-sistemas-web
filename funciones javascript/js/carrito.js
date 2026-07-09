export const agregarProducto = ( producto, arrayProducto) => {
    arrayProducto.push(producto);
    console.log("Producto agregado:");
}

export const eliminarProducto = (nombre, arrayProducto) => {
    const index = arrayProducto.findIndex(producto => producto.nombre === nombre);
    if (index !== -1) {
        arrayProducto.splice(index, 1);
        console.log("Producto eliminado", arrayProducto);
    } else {
        console.log("Producto no encontrado");
    }
}

export const vaciarCarrito = (arrayProducto) => {
    arrayProducto.splice(0, arrayProducto.length);
    console.log("Carrito vaciado");
}

export const mostrarProductos = (arrayProducto) => {
    console.log("Productos en el carrito:");
    for (const producto of arrayProducto) {
        console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
    }
    console.log("Lista mostrada correctamente");
}