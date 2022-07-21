import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-search-productos',
  templateUrl: './search-productos.component.html',
  styles: [
  ]
})
export class SearchProductosComponent  {

  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private prodService:ProductosService){

  }
 
  buscar (){
    const value = this.txtBuscar.nativeElement.value;
    if (value.trim()==='') return;
    this.prodService.buscarProdByName(value);
    this.txtBuscar.nativeElement.value = '';
  }

  buscarConsola (){
    const value = this.txtBuscar.nativeElement.value;
    if (value.trim()==='') return;
    this.prodService.buscarProdByConsola(value);
    this.txtBuscar.nativeElement.value = '';
  }
 
  
}
