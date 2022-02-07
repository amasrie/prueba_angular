import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/formulario',
        pathMatch: 'full'
      },
      {
        path: 'formulario',
        loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule)
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      { 
        path: '**', 
        redirectTo: '/formulario'
      },
    ]
  }
];
