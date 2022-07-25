import { Component, ElementRef, ViewChild } from '@angular/core';
//import { ProductosService } from 'src/app/productos/services/productos.service';
import { ProductosService } from 'src/app/productos/services/productos.service';
import { MostrarProductosComponent } from 'src/app/productos/mostrar-producto/mostrar-productos.component';
import { PersonasService } from 'src/app/personas/services/personas.service';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent  {

   constructor(private mostrarJuegosService:ProductosService,
               private mostrarPersonasService:PersonasService){

   }

   buscarConsola(nombreConsola:string)
   {
     console.log("buscando....");
     this.mostrarJuegosService.buscarProdByConsola(nombreConsola)
   }

   buscarTipoPersona(tipoPersona:string)
   {
     console.log("buscando....");
     this.mostrarPersonasService.buscarPorTipoPersona(tipoPersona)
   }

}



