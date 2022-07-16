import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PersonaViewModel } from '../interfaces/personaviewmodel.inteface';
import { environment } from '../../../environments/environment.prod';
import { PersonaLite } from '../interfaces/personalite.interface';
import { Observable } from "rxjs";
import { PersonaCreate } from '../interfaces/personacreate.interface';
import { catchError } from "rxjs/operators";

@Injectable()
export class PersonasService {
    private _personas: PersonaViewModel[] = [];
    private _historial: string[] = [];

    urlProd:string = environment.apiUri + "/Personas/";
    get todasPersonas() {
        return [...this._personas];
    }

    get historial() {
        return [...this._historial];
    }    
     

    constructor(private http:HttpClient){
        if (localStorage.getItem('historial')) {
            const historial = localStorage.getItem('historial');
            this._historial = JSON.parse(historial!)
        }        
    }

    buscarTodasPersonas(){
        this.http.get<PersonaViewModel[]>('all')
            .subscribe(
                resp => {
                    this._personas = resp;
                }
            );
    }

    buscarPersByName(argumento:string){
        const params = new HttpParams().set('nombre',argumento); 
 
        this.http.get<PersonaViewModel[]>(`${this.urlProd}byName?`, {params})
            .subscribe(
                resp => {
                    this._personas = resp;
                }
            );
        if (!this._historial.includes(argumento)){
            this._historial.push(argumento);
            localStorage.setItem('historial',JSON.stringify(this._historial));
        }
    }    

    buscarProdById(idProd:number): Observable<PersonaLite>{
        return this.http.get<PersonaLite>(`${this.urlProd}${idProd}`);
    }

    crear(nuevaPers: PersonaCreate) {
        console.log('Calling WebApi');
        this.http.put(`${this.urlProd}create`, nuevaPers)
                 .subscribe();
    }

    // buscarTipo(idTipoPersona: number)
    // {
    //     console.log('Calling WebApi');

    //     this.http.get<PersonaViewModel[]>(`${this.urlProd}byId?`, idTipoPersona)
    //         .subscribe(
    //             resp => {
    //                 if(idTipoPersona == 1){
    //                     this._personas = resp;
    //                 }
    //                 else if(idTipoPersona == 2)
    //                 {
    //                     this._proveedores = resp;
    //                 }
                    
    //             }
    //         );
    //     if (!this._historial.includes(`${idTipoPersona}`)){
    //         this._historial.push(`${idTipoPersona}`);
    //         localStorage.setItem('historial',JSON.stringify(this._historial));
    //     }
    // }
}