import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { LoginRoutingModule } from './login-routing.module';

// Componentes
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
