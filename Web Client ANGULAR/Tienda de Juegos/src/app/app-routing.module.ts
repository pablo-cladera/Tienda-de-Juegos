import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductoComponent } from './productos/create-producto/create-producto.component';
import { MainProductosComponent } from './productos/main-productos/main-productos.component';
import { ViewProductoComponent } from './productos/view-producto/view-producto.component';
import { EditProductoComponent } from './productos/edit-producto/edit-producto.component';
import { SearchProductosComponent } from './productos/search-productos/search-productos.component';
import { MostrarProductosComponent } from './productos/mostrar-producto/mostrar-productos.component';

import { CreatePersonaComponent } from './personas/create-persona/create-persona.component';
import { CreateVentaComponent } from './Venta/create-venta/create-venta.component';
import { MainPersonasComponent } from './personas/main-personas/main-personas.component';
import { EditPersonaComponent } from './personas/edit-persona/edit-persona.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CreateCompraComponent } from './Compra/create-compra/create-compra.component';
// import { MainClientesComponent } from './personas/main-clientes/main-clientes.component';

// import { ViewClienteComponent } from './personas/view-clientes/view-clientes.component';
// import { ViewProveedoresComponent } from './personas/view-proveedores/view-proveedores.component';

const routes: Routes = [

  //Ruta Principal
  {
    path: '',
    // component: SidebarComponent,
    // pathMatch: 'full'
    component: MainProductosComponent,
    pathMatch: 'full'
  },
  

  //Rutas Productos
    {
    path: 'mainJuegos',
    component: MainProductosComponent,
    pathMatch: 'full'
  },
  {
    path: 'crear-prod',
    component: CreateProductoComponent
  },
   {
   path: 'edit-prod/:idprod',
    component: EditProductoComponent
  },



  //Rutas Personas
  {
    path: 'mainPersonas',
    component: MainPersonasComponent,
    pathMatch: 'full'
  },
  {
    path: 'create-persona',
    component: CreatePersonaComponent
  },
   {
     path: 'edit-pers/:value',
     component: EditPersonaComponent
   },


  //Rutas Ventas
  {
    path: 'create-venta',
    component: CreateVentaComponent
  },

  //Rutas Compras
  {
    path: 'create-compra',
    component: CreateCompraComponent
  },

  {
    path: '**',
    redirectTo: ''
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
