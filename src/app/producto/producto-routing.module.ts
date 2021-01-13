import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { GestionarComponent } from './pages/gestionar/gestionar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'gestionar', component: GestionarComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'eliminar', component: EliminarComponent },
      { path: '**', redirectTo: 'gestionar' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoRoutingModule {}
