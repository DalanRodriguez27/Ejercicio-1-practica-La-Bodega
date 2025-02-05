export default class CL_Bodega{
    constructor(){
        this.acGanancia = 0.0;
    }

    procesarArticulo(articulo){

        this.acGanancia += Number(articulo.ganancia()); 
    }

    totalGanancia(){
        return this.acGanancia + "Bs";
    }
}