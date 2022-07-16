import { Component, ElementRef, ViewChild } from '@angular/core';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-search-personas',
  templateUrl: './search-personas.component.html',
  styles: [
  ]
})
export class SearchPersonasComponent  {

  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private persService:PersonasService){

  }
 
  buscar (){
    const value = this.txtBuscar.nativeElement.value;
    if (value.trim()==='') return;
    this.persService.buscarPersByName(value);
    this.txtBuscar.nativeElement.value = '';
  }
 
}
