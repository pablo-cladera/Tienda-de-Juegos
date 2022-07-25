import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DetalleVentaCreate } from "../interface/detalleVentaCreate";
import { detalleVentaViewModel } from "../interface/detalleVentaViewModel";
import { VentaCreate } from "../interface/ventaCreate.interface";
import { VentaViewModel } from "../interface/ventaViewModel";

@Injectable()
export class VentasService {

    crearVenta(newVenta: VentaCreate) {
      throw new Error("Method not implemented.");
    }
    crearDetalleVenta(newDetalleVenta: DetalleVentaCreate) {
        throw new Error("Method not implemented.");
    }

    private _ventas: VentaViewModel[] = [];
    private _detalleVenta: detalleVentaViewModel[] = [];
    private _historial: string[] = [];
    // private _producto: ProductoLite = {
}