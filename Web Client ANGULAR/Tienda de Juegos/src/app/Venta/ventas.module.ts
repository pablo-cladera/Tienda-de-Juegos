import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from '../material.module';
import { CreateVentaComponent } from './create-venta/create-venta.component';
import { VentasService } from './services/ventas.service';

@NgModule({
  declarations: [
    CreateVentaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [

    //CreateVentaComponent

  ],
  providers: [
    VentasService
  ]
})
export class VentasModule { }