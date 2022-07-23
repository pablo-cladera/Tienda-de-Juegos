export interface VentaCreate {

    id:               number;
    //idDetalleVenta: number;
    idPersona:        number;
    idSucursal:       number;
    facturaNumero:    string;
    fecha:            string;
    total:            number;
}