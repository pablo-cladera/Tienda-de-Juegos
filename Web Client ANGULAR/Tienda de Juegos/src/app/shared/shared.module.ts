import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { ProductosService } from '../productos/services/productos.service';




@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
