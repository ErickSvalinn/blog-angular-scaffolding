import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { AyudaRoutingModule } from './ayuda-routing.module';

// Componentes
import { AyudaComponent } from './pages/ayuda/ayuda.component';

@NgModule({
  declarations: [AyudaComponent],
  imports: [CommonModule, AyudaRoutingModule],
})
export class AyudaModule {}
