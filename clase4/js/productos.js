const PRODUCTOS = [{ id: 1, name: "Remera", description: "Remera roja", amount: 10000}, { id: 2, name: "Pantalon", description: "Pantalon de jean", amount: 30000}, { id: 3, name: "Gorra", description: "Gorra con bordado", amount: 15000}, { id: 4, name: "Zapatillas", description: "Zapatillas azules", amount: 25000}, { id: 5, name: "Campera", description: "Campera impermeable", amount: 50000}];

let elemento = document.getElementById("titulo");
console.log(elemento); // Devuelve el elemento <h1 id="titulo">...</h1>

let contenedorProductos = document.getElementById("contenedor-productos");

for (const producto of PRODUCTOS) {
    let card = document.createElement("div");
    card.className = "card";
    
    let nombreProducto = document.createElement("h3");
    nombreProducto.innerText = producto.name;

    let precioProducto = document.createElement("p");
    precioProducto.innerText = producto.amount;

    let botonDescripcion = document.createElement("button");
    botonDescripcion.innerText = "Ver descripción";
    card.appendChild(botonDescripcion);
    
    let descripcionProducto = document.createElement("p");

    botonDescripcion.addEventListener("click", () => {
        if (botonDescripcion.innerText === "Ver descripción") {
            botonDescripcion.innerText = "Ocultar descripción";

            descripcionProducto.innerText = producto.description;
            card.appendChild(descripcionProducto);

        } else {
            botonDescripcion.innerText = "Ver descripción";
            if (descripcionProducto) {
                descripcionProducto.remove();
            }
        }
    });

    card.appendChild(nombreProducto);
    card.appendChild(precioProducto);

    contenedorProductos.appendChild(card);
}
