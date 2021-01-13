import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos
import { ProductoRoutingModule } from './producto-routing.module';

// Componentes
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { GestionarComponent } from './pages/gestionar/gestionar.component';

@NgModule({
  declarations: [AgregarComponent, EliminarComponent, GestionarComponent],
  imports: [CommonModule, ProductoRoutingModule],
})
export class ProductoModule {}
