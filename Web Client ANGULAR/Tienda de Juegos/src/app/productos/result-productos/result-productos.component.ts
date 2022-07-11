import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-result-productos',
  templateUrl: './result-productos.component.html',
  styles: [
  ]
})
export class ResultProductosComponent {

  get resultados() {
     return this.prodsService.todosProductos;
  }

  constructor(private prodsService: ProductosService) { }

}
