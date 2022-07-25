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
// import { MainClientesComponent } from './personas/main-clientes/main-clientes.component';

// import { ViewClienteComponent } from './personas/view-clientes/view-clientes.component';
// import { ViewProveedoresComponent } from './personas/view-proveedores/view-proveedores.component';

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
    component: EditProductoComponent
  },
  {
    path: 'eliminar-prod/:idprod',
    component: ViewProductoComponent
  },
  {
    //                  /:value
    path: 'mostrar-prod/:value',
    component: MostrarProductosComponent
  },

  //Rutas Personas
  {
    path: 'create-persona',
    component: CreatePersonaComponent
  },
  // {
  //   path: 'mostrar-clientes',
  //   component: MainClientesComponent
  // },
//  {
  //   path: 'mostrar-clientes',
  //   component: ViewClienteComponent
//   },
//   {
    //  path: 'mostrar-proveedores',
    //  component: ViewProveedoresComponent
//  }
 //Rutas Personas
 {
  path: 'create-venta',
  component: CreateVentaComponent
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
