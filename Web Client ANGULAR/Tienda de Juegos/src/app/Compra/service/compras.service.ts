import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { catchError } from "rxjs/operators";
import { CompraCreate } from "../interface/CompraCreate";
import { DetalleCompraCreate } from "../interface/detalleCompraCreate";

@Injectable()
export class ComprasService {
    crearCompra(newVenta: CompraCreate) {
        throw new Error("Method not implemented.");
    }
    crearDetalleCompra(newDetalleCompra: DetalleCompraCreate) {
        throw new Error("Method not implemented.");
    }
}