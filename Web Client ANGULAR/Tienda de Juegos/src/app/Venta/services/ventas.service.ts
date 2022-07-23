import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { VentaCreate } from "../interface/ventaCreate.interface";
import { VentaViewModel } from "../interface/ventaViewModel";

@Injectable()
export class VentasService {
    crear(newJuego: VentaCreate) {
        throw new Error("Method not implemented.");
    }
    private _ventas: VentaViewModel[] = [];
    private _historial: string[] = [];
    // private _producto: ProductoLite = {
}