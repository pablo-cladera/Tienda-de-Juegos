import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductoComponent } from './productos/create-producto/create-producto.component';
import { MainProductosComponent } from './productos/main-productos/main-productos.component';
import { ViewProductoComponent } from './productos/view-producto/view-producto.component';
import { CreatePersonaComponent } from './personas/create-persona/create-persona.component';

const routes: Routes = [
  {
    //Rutas Productos
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
    path: 'eliminar-prod/:idprod',
    component: ViewProductoComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
  //Rutas Personas
  {
    path: 'crear-pers',
    component: CreatePersonaComponent
  },
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
