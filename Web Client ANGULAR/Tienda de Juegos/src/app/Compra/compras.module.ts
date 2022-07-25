import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from '../material.module';
import { CreateCompraComponent } from './create-compra/create-compra.component';
import { ComprasService } from './service/compras.service';

@NgModule({
  declarations: [
    CreateCompraComponent
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
    ComprasService
  ]
})
export class ComprasModule { }