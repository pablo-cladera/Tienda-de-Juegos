import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { VentaCreate } from "../interface/ventaCreate.interface";
import { VentasService } from "../services/ventas.service";

@Component({
    selector: 'app-create-venta',
    templateUrl: './create-venta.component.html',
    styleUrls: ['./create-venta.component.scss']
  })
  
  export class CreateVentaComponent implements OnInit {
     miForm = this.formBuilder.group(
       {
         id: [, [Validators.required, Validators.minLength(1)] ],
         //idDetalleVenta: [, [Validators.required, Validators.min(1)]],
         idPersona: [, [Validators.required, Validators.min(1)]],
         idSucursal: [, [Validators.required, Validators.min(1)]],
         facturaNumero: [, [Validators.required, Validators.min(1)]],
         fecha: [, [Validators.required, Validators.min(4)]],
         precio: [, [Validators.required, Validators.min(1)]],
         total: [, [Validators.required, Validators.minLength(1)]],
       }
     )
  
     constructor(private formBuilder: FormBuilder,
                 private ventaService: VentasService) { }
  
     ngOnInit(): void {
       const ran = 5;
       this.miForm.reset(
         {
           stock : 5
         }
       ); 
     }
  
     tieneError(field:string){
       return this.miForm.controls[field].errors &&
              this.miForm.controls[field].touched;
     }
  
     guardar(){
       if (this.miForm.invalid){
        this.miForm.markAllAsTouched();
         return;
       }
  
       console.log('guardando juego');
  
       const newVenta: VentaCreate = {
  
         id: this.miForm.controls['id'].value,
         //idDetalleVenta: this.miForm.controls['idGenero'].value,
         idPersona: this.miForm.controls['idPersona'].value,
         idSucursal: this.miForm.controls['idSucursal'].value,
         facturaNumero: this.miForm.controls['facturaNumero'].value,
         fecha: this.miForm.controls['fecha'].value,
         total: this.miForm.controls['total'].value
       }
  
       this.ventaService.crear(newVenta);
  
       this.miForm.reset(
         {
           stock : 5
         }      
       );    
    }
  }
  