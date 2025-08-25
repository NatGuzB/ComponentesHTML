var itemsTotales = 0;
var precioTotal = 0;
var productosEnCarrito = [];
var envioGratisAplicado = false;

function agregarAlCarrito(nombreProducto, precio) {
    itemsTotales += 1;
    precioTotal += precio;
    productosEnCarrito.push(nombreProducto);

    document.getElementById('items-totales').innerText = itemsTotales;
    document.getElementById('total-precio').innerText = precioTotal;

    console.log('Productos en el carrito:', productosEnCarrito);

    if (precioTotal > 50 && !envioGratisAplicado) {
        alert('¡Envío gratis aplicado!');
        envioGratisAplicado = true;
    }
}

function vaciarCarrito() {
    itemsTotales = 0;
    precioTotal = 0;
    productosEnCarrito = [];
    envioGratisAplicado = false;

    document.getElementById('items-totales').innerText = itemsTotales;
    document.getElementById('total-precio').innerText = precioTotal;

    alert('Carrito vaciado');
    console.log('Carrito vaciado - Productos en el carrito:', productosEnCarrito);
}
