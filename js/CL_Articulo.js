export default class CL_Articulo{
    constructor(costo){
        this.costo = costo;
    }

    set costo(c){
        return this._costo = c;
    }

    get costo(){
        return this._costo;
    }

    ganancia(){
        return this._costo * 50/100;
    }
}