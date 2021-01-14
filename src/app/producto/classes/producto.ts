import { IProducto } from './iproducto';

export class Producto implements IProducto {
  id: string;
  nombre: string;
  peso: number;
  creacion: Date;

  constructor(_id: string, _nombre: string, _peso: number, _creacion: Date) {
    this.id = _id;
    this.nombre = _nombre;
    this.peso = _peso;
    this.creacion = _creacion;
  }
}
