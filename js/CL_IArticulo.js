export default class CL_IArticulo{

    leerCosto(){
        return prompt("Ingrese el costo del articulo");
    }

    solicitarOpcion(){
        return prompt("Desea procesar otro producto?: 1-->Si 2-->No");
    }
    
}