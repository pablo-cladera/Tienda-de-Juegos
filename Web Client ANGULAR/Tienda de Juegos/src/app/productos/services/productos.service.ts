import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JuegoViewModel } from '../interfaces/productviewmodel.interface';
import { environment } from '../../../environments/environment.prod';
import { ProductoLite } from '../interfaces/productolite.interface';
import { Observable } from "rxjs";
import { ProductoCreate } from '../interfaces/productocreate.interface';

@Injectable()
export class ProductosService {
    private _productos: JuegoViewModel[] = [];
    private _historial: string[] = [];
    // private _producto: ProductoLite = {
    //     id: '',
    //     nombre: ''
    // }; 

    urlProd:string = environment.apiUri + "/Juegos/";
    get todosProductos() {
        return [...this._productos];
    }

    get historial() {
        return [...this._historial];
    }    

    // get producto() {
    //     return this._producto;
    // }      

    constructor(private http:HttpClient){
        if (localStorage.getItem('historial')) {
            const historial = localStorage.getItem('historial');
            this._historial = JSON.parse(historial!)
        }        
    }

    buscarTodosProductos(){
        this.http.get<JuegoViewModel[]>('all')
            .subscribe(
                resp => {
                    this._productos = resp;
                }
            );
    }

    buscarProdByName(argumento:string){
        const params = new HttpParams().set('nombreJuego',argumento); 
 
        this.http.get<JuegoViewModel[]>(`${this.urlProd}byName?`, {params})
            .subscribe(
                resp => {
                    this._productos = resp;
                }
            );
        if (!this._historial.includes(argumento)){
            this._historial.push(argumento);
            localStorage.setItem('historial',JSON.stringify(this._historial));
        }
    }    

    buscarProdById(idProd:number): Observable<ProductoLite>{
        return this.http.get<ProductoLite>(`${this.urlProd}${idProd}`);
    }

    crear(nuevoProd: ProductoCreate) {
        console.log('Calling WebApi');
        this.http.put(`${this.urlProd}create`, nuevoProd)
                 .subscribe();
    }
}