import { Injectable } from '@angular/core';
import { platos } from '../assets/platos.json';
import { Plato } from '../entidades/plato';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  listaPlatos : Plato [] = [];

  constructor() { }

  public getPlatos(): Plato[]{ 
    this.listaPlatos = platos;
    console.log(platos);
    return  this.listaPlatos;   
  }
}



