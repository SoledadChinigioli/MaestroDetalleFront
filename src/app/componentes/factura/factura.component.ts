import { Component, OnInit } from '@angular/core';
import { PlatosService } from 'src/app/servicio/platos.service';
import { Plato } from 'src/app/entidades/plato';
import { DetalleFactura } from 'src/app/entidades/detalleFactura';



@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  listaPlatos: Plato[] = [];
  platoSeleccionado : Plato;
  precioSeleccionado : number;
  precioTotal : number;
  unidades : number;
  totalFactura : number = 0;
  listaDetalles: DetalleFactura[] = [];
  detalleNuevo : DetalleFactura = {
    id: 0,
    idFactura: 0,
    plato : null,
    cantidad : 0,
    precioUnitario : 0,
    precioTotal: 0
  }

  constructor(private _platosService: PlatosService) { 
   
  }


  ngOnInit(): void {

    this.cargarDropDown();
   
  }

  cargarDropDown(){
    this.listaPlatos = this._platosService.getPlatos();    
  }

  buscarPrecio(){
   
    if(this.platoSeleccionado.id != 0){
       this.precioSeleccionado = this.platoSeleccionado.precio;
       console.log(this.precioSeleccionado);
       this.calcularPrecio();
    }
  }
  calcularPrecio(){
    if(this.platoSeleccionado.precio != null && this.unidades != null){
      this.precioTotal = this.unidades * this.platoSeleccionado.precio;
    }else{
      this.precioTotal = 0;
    }

  }
 limpiarDetalle(){
   this.platoSeleccionado = null;
   this.precioSeleccionado = null;
   this.precioTotal = null;
   this.unidades = null;

 }

 agregarDetalle(){

  if(this.platoSeleccionado.id != 0 && this.platoSeleccionado.precio != null && this.unidades != null){
    
    
    this.detalleNuevo.cantidad = this.unidades;
    this.detalleNuevo.precioUnitario = this.precioSeleccionado;
    this.detalleNuevo.precioTotal = this.precioTotal;
    this.detalleNuevo.plato = this.platoSeleccionado;

    this.listaDetalles.push(this.detalleNuevo);
    this.calcularTotal();

    this.detalleNuevo = {
      id: 0,
      idFactura: 0,
      plato : null,
      cantidad : 0,
      precioUnitario : 0,
      precioTotal: 0
    }

   }

}

eliminarDetalle = (detalle : DetalleFactura)=>{
  const opcion = confirm('¿Desea eliminar este registro?');
    if (opcion === true) {
  let index = this.listaDetalles.indexOf(detalle);
  if (index > -1) this.listaDetalles.splice(index, 1);
  this.calcularTotal();
}
}

calcularTotal(){
  if(this.platoSeleccionado.precio != null && this.unidades != null){
    this.totalFactura=0;
    this.listaDetalles.forEach(detalle => {
      this.totalFactura += detalle.precioTotal;
    });    
  }else{
    this.precioTotal = 0;
  }

}
}
