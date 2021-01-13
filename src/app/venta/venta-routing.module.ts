import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionarComponent } from './pages/gestionar/gestionar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'gestionar', component: GestionarComponent },
      { path: '**', redirectTo: 'gestionar' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaRoutingModule {}
