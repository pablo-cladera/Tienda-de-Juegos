import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductoComponent } from './productos/create-producto/create-producto.component';
import { MainProductosComponent } from './productos/main-productos/main-productos.component';
import { ViewProductoComponent } from './productos/view-producto/view-producto.component';

const routes: Routes = [
  {
    path: '',
    component: MainProductosComponent,
    pathMatch: 'full'
  },
  {
    path: 'crear-prod',
    component: CreateProductoComponent
  },
  {
    path: 'edit-prod/:idprod',
    component: ViewProductoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
