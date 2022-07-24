export interface ProductoCreate {

    //id:               number;
    nombre:           string;
    idGenero:         number;
    idConsola:        number;
    idDesarroladores: number;
    idClasificacion:  number;
    añoLanzamiento:   string;
    precio:           number;
    stock:            number;
    stockMin:         number;
    stockMax:         number;
}
