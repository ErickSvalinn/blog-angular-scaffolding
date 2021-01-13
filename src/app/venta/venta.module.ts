import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { VentaRoutingModule } from './venta-routing.module';

// Componentes
import { GestionarComponent } from './pages/gestionar/gestionar.component';

@NgModule({
  declarations: [GestionarComponent],
  imports: [CommonModule, VentaRoutingModule],
})
export class VentaModule {}
