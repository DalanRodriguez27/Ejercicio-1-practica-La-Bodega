import CL_Articulo from "./CL_Articulo.js";
import CL_Bodega from "./CL_Bodega.js";
import CL_IArticulo from "./CL_IArticulo.js";
import CL_IBodega from "./CL_IBodega.js";

let iBodega = new CL_IBodega(),
bodega = new CL_Bodega(),
salida = document.getElementById("salida");


let opc = 1;

while(opc == 1){
    let iArticulo = new CL_IArticulo(),
    c = iArticulo.leerCosto(),
    articulo = new CL_Articulo(c);

    bodega.procesarArticulo(articulo);

    opc = iArticulo.solicitarOpcion();
}

salida.innerHTML = iBodega.reporteBodega(bodega.totalGanancia());