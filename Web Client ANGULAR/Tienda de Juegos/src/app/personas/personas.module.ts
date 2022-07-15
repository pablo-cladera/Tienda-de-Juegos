import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

/*import { ResultProductosComponent } from './result-productos/result-productos.component';
import { SearchProductosComponent } from './search-productos/search-productos.component';
import { MainProductosComponent } from './main-productos/main-productos.component';
import { CreateProductoComponent } from './create-producto/create-producto.component';
import { ViewProductoComponent } from './view-producto/view-producto.component';*/
import { PersonasService } from './services/personas.service';

@NgModule({
  declarations: [
    /*ResultProductosComponent, 
    SearchProductosComponent, 
    MainProductosComponent, 
    CreateProductoComponent, 
  ViewProductoComponent*/]
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [/*
    MainProductosComponent,
    CreateProductoComponent, 
    ViewProductoComponent
*/],
  providers: [
    PersonasService
  ]
})
export class PersonasModule { }