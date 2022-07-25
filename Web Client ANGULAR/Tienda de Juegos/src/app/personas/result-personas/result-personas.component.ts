import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-result-personas',
  templateUrl: './result-personas.component.html',
  styles: [
  ]
})
export class ResultPersonasComponent {

   get resultados() {
      return this.persService.todasPersonas;
   }
//   get resultados() {
//     return this.persService.buscarTodasPersonasLite;
//  }

  constructor(private persService: PersonasService) { }

}