import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { switchMap} from 'rxjs/operators';
import { ProductoLite } from '../interfaces/productolite.interface';

@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styles: [
  ]
})
export class ViewProductoComponent implements OnInit {
  producto: ProductoLite = {};
  constructor( private activatedRoutes: ActivatedRoute,
               private productoServices: ProductosService) {

  }

  ngOnInit(): void {
    this.activatedRoutes.params
      .pipe(
        switchMap(
          ({idprod}) => this.productoServices.buscarProdById(idprod))
        )
        .subscribe(resp => {
          this.producto = resp;
        });
  }

}
