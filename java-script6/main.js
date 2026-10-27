// ==========================================
// PRE-ENTREGA 6: FUNCIONES DE ORDEN SUPERIOR
// ==========================================

// 1) DEFINICIÓN DE LA CLASE (Mínimo 4 propiedades)
class Producto {
    constructor(id, nombre, precio, stock, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
    }
}

// 2) CREACIÓN DE INSTANCIAS Y ALMACENAMIENTO EN UN ARRAY
const producto1 = new Producto(1, "Zapatillas deportivas", 25000, 10, "Calzado");
const producto2 = new Producto(2, "Remera de algodón", 8000, 15, "Indumentaria");
const producto3 = new Producto(3, "Mochila urbana", 18000, 3, "Accesorios");
const producto4 = new Producto(4, "Gorra snapback", 6000, 0, "Accesorios"); // Sin stock para probar filtros

const catalogoProductos = [producto1, producto2, producto3, producto4];

console.log("=== CATÁLOGO GENERAL DE PRODUCTOS ===");
console.log(catalogoProductos);

// 3) APLICACIÓN DE FUNCIONES DE ORDEN SUPERIOR (Mínimo 3 métodos)

// A) MÉTODO DE BÚSQUEDA 1: find (Buscar un producto puntual por nombre ingresado por prompt)
let nombreBuscado = prompt("¿Qué producto deseas buscar en el catálogo?");

if (nombreBuscado !== null && nombreBuscado.trim() !== "") {
    // Normalizamos la búsqueda para que coincida mejor
    nombreBuscado = nombreBuscado.charAt(0).toUpperCase() + nombreBuscado.slice(1).toLowerCase();

    const productoEncontrado = catalogoProductos.find(p => p.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()));

    if (productoEncontrado) {
        console.log("🔍 Producto encontrado mediante .find():", productoEncontrado);
        alert(`¡Encontrado! ${productoEncontrado.nombre} - Precio: $${productoEncontrado.precio} - Stock: ${productoEncontrado.stock}`);
    } else {
        console.log(`❌ No se encontró ningún producto con el nombre "${nombreBuscado}".`);
        alert("Lo sentimos, el producto no existe en el catálogo.");
    }
}

// B) MÉTODO DE BÚSQUEDA 2: filter (Filtrar productos que SÍ tienen stock disponible > 0)
const productosDisponibles = catalogoProductos.filter(p => p.stock > 0);
console.log("\n📦 Productos disponibles en stock (filtrados con .filter()):");
console.log(productosDisponibles);

// C) MÉTODO DE TRANSFORMACIÓN / CÁLCULO: reduce (Calcular el valor total invertido en el stock actual)
const valorTotalInventario = catalogoProductos.reduce((acumulador, p) => acumulador + (p.precio * p.stock), 0);
console.log(`\n💰 Valor total de la inversión en stock actual (calculado con .reduce()): $${valorTotalInventario}`);
alert(`El valor total del inventario actual en stock es de: $${valorTotalInventario}`);

// 4) REPORTE FINAL ITERATIVO (Integrando ciclos anteriores)
function mostrarResumenSistema(lista) {
    console.log("\n==================================");
    console.log("📋 REPORTE FINAL DEL SIMULADOR:");
    console.log("==================================");
    for (const item of lista) {
        console.log(`- [ID: ${item.id}] ${item.nombre} | Precio: $${item.precio} | Stock: ${item.stock}`);
    }
    console.log(`Total de artículos registrados en la base: ${lista.length}`);
}

mostrarResumenSistema(catalogoProductos);