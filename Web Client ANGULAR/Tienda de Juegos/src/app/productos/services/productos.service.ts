import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JuegoViewModel } from '../interfaces/productviewmodel.interface';
import { environment } from '../../../environments/environment.prod';
import { ProductoLite } from '../interfaces/productolite.interface';
import { Observable } from "rxjs";
import { ProductoCreate } from '../interfaces/productocreate.interface';
import { catchError } from "rxjs/operators";

@Injectable()
export class ProductosService {
    private _productos: JuegoViewModel[] = [];
    private _historial: string[] = [];
    // private _producto: ProductoLite = {


    urlProd:string = environment.apiUri + "/Juegos/";

    get todosProductos() {
        return [...this._productos];
    }

    get historial() {
        return [...this._historial];
    }    
    getPosts(){
        return this.http.get(this.urlProd);
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
        this.http.get<JuegoViewModel[]>(`${this.urlProd}all`)
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

    buscarProdByConsola(argumento:string){
        const params = new HttpParams().set('nombreConsola',argumento); 
        console.log('funciona')
        this.http.get<JuegoViewModel[]>(`${this.urlProd}byConsola?`, {params})
            .subscribe(
                resp => {
                    this._productos = resp;
                }
            );

    } 

    buscarProdById(idProd:number): Observable<ProductoLite>{
        return this.http.get<ProductoLite>(`${this.urlProd}${idProd}`);
    }

    crear(nuevoProd: ProductoCreate) {
        console.log('Calling WebApi');
        this.http.put(`${this.urlProd}create`, nuevoProd)
                 .subscribe();
    } 

    eliminarJuegoService(Id: number): Observable<JuegoViewModel>{
        console.log(`Calling WebApi`);
        return this.http.delete<JuegoViewModel>(`${this.urlProd}${Id}`);
      }

    upload(nuevoProd: ProductoCreate) {
        console.log('Calling WebApi');
        this.http.put(`${this.urlProd}update`, nuevoProd)
                 .subscribe();
    }


}