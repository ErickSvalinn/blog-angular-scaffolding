import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Rutas principales
const routes: Routes = [
  {
    // Importa módulo hijo de login de forma completa, componentes, rutas, etc.
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    // Importa módulo hijo de producto de forma completa, componentes, rutas, etc.
    path: 'producto',
    loadChildren: () => import('./producto/producto.module').then(m => m.ProductoModule),
  },
  {
    // Importa módulo hijo de venta de forma completa, componentes, rutas, etc.
    path: 'venta',
    loadChildren: () => import('./venta/venta.module').then(m => m.VentaModule),
  },
  {
    // Importa módulo hijo de login de forma completa, componentes, rutas, etc.
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then(m => m.AyudaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
