import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { PersonasService } from "src/app/personas/services/personas.service";
import { ProductosService } from "src/app/productos/services/productos.service";
import { DetalleVentaCreate } from "../interface/detalleVentaCreate";
import { VentaCreate } from "../interface/ventaCreate.interface";
import { VentasService } from "../services/ventas.service";


  
@Component({
    selector: 'app-create-venta',
    templateUrl: './create-venta.component.html',
    styleUrls: ['./create-venta.component.scss']
  })
  

  export class CreateVentaComponent implements OnInit {
    

    miFormDetalle = this.formBuilder.group(
      {
        id: [, [Validators.required, Validators.minLength(1)] ],
        idVenta: [, [Validators.required, Validators.min(1)]],
        idJuego: [, [Validators.required, Validators.min(1)]],
        cantidad: [, [Validators.required, Validators.min(1)]],
        precio: [, [Validators.required, Validators.min(1)]],
        descuento: [, [Validators.required, Validators.minLength(0)]],
      }
    )

     miFormVenta = this.formBuilder.group(
       {
         id: [, [Validators.required, Validators.minLength(1)] ],
         idPersona: [, [Validators.required, Validators.min(1)]],
         idSucursal: [, [Validators.required, Validators.min(1)]],
         facturaNumero: [, [Validators.required, Validators.min(1)]],
         fecha: [, [Validators.required, Validators.min(4)]],
         precio: [, [Validators.required, Validators.min(1)]],
         total: [, [Validators.required, Validators.minLength(1)]],
       }
     )

     get resultadosPersonas() 
     {
        return this.personasService.todasPersonas;  
     }
     get resultados() 
     {
        return this.productosService.todosProductos;  
     }
  
     constructor(private formBuilder: FormBuilder,
                 private ventaService: VentasService,
                 private personasService: PersonasService,
                 private productosService: ProductosService
                 ) { }
  
     ngOnInit(): void {
       const ran = 5;
       this.miFormDetalle.reset(
         {
           fecha : ""
         }
       ); 
     }
  
     tieneError(field:string){
       return this.miFormDetalle.controls[field].errors &&
              this.miFormDetalle.controls[field].touched;
     }
  
     agregarDetalleVenta(){
       if (this.miFormDetalle.invalid){
        this.miFormDetalle.markAllAsTouched();
         return;
       }

       const newDetalleVenta: DetalleVentaCreate = {
  
        id: this.miFormDetalle.controls['id'].value,
        idVenta: this.miFormDetalle.controls['idVenta'].value,
        idJuego: this.miFormDetalle.controls['idJuego'].value,
        cantidad: this.miFormDetalle.controls['cantidad'].value,
        precio: this.miFormDetalle.controls['precio'].value,
        descuento: this.miFormDetalle.controls['descuento'].value
      }
 
      this.ventaService.crearDetalleVenta(newDetalleVenta);
  
       this.miFormDetalle.reset(
         {
           stock : ""
         }      
       );   
       
       
    }
        agregarVenta(){
         if (this.miFormVenta.invalid){
          this.miFormVenta.markAllAsTouched();
           return;
         }
         

         console.log('guardando venta');
  
         const newVenta: VentaCreate = {
    
           id: this.miFormVenta.controls['id'].value,
           idPersona: this.miFormVenta.controls['idPersona'].value,
           idSucursal: this.miFormVenta.controls['idSucursal'].value,
           facturaNumero: this.miFormVenta.controls['facturaNumero'].value,
           fecha: this.miFormVenta.controls['fecha'].value,
           total: this.miFormVenta.controls['total'].value
         }
    
         this.ventaService.crearVenta(newVenta);

         this.miFormVenta.reset(
          {
            facturaNumero : ""
          }      
        ); 
        }

          
  }
  