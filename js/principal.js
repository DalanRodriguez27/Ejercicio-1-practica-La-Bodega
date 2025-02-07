import CL_Articulo from "./CL_Articulo.js";
import CL_Bodega from "./CL_Bodega.js";


let articulo1 = new CL_Articulo(10);
let articulo2 = new CL_Articulo(20);
let articulo3 = new CL_Articulo(14);
let articulo4 = new CL_Articulo(6);
let articulo5 = new CL_Articulo(4);

let bodega = new CL_Bodega();

bodega.procesarArticulo(articulo1);
bodega.procesarArticulo(articulo2); 
bodega.procesarArticulo(articulo3);
bodega.procesarArticulo(articulo4);
bodega.procesarArticulo(articulo5);

let salida = document.getElementById("salida");

salida.innerHTML =`
<br>El total de ganacia es de: ${bodega.totalGanancia()}`