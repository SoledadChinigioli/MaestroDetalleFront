import { Plato } from './plato';

export interface DetalleFactura {
    id: number;
    idFactura: number;
    plato : Plato;
    cantidad : number;
    precioUnitario : number;
    precioTotal: number;
}