import { Component} from '@angular/core';
import { ProductosService } from 'src/app/productos/services/productos.service';
import { PersonasService } from 'src/app/personas/services/personas.service';
import { ResultPersonasComponent } from 'src/app/personas/result-personas/result-personas.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent  {

   constructor(private mostrarJuegosService:ProductosService,
               private mostrarPersonasService:PersonasService,
               private Rutas:AppRoutingModule){

   }

   buscarConsola(nombreConsola:string)
   {
     console.log("buscando....");
     this.mostrarJuegosService.buscarProdByConsola(nombreConsola)
   }

   buscarJuegos()
   {
     console.log("buscando....");
     this.mostrarJuegosService.buscarTodosProductos()
   }

   buscarTipoPersona(tipoPersona:string)
   {
     console.log("buscando....");
     this.mostrarPersonasService.buscarPorTipoPersona(tipoPersona)
   }

   buscarPersonas()
   {
     console.log("buscando....");
     this.mostrarPersonasService.buscarTodasPersonas()
     
   }

}


