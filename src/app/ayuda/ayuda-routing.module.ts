import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { AyudaComponent } from './pages/ayuda/ayuda.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'ayuda', component: AyudaComponent },
      { path: '**', redirectTo: 'ayuda' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudaRoutingModule {}
