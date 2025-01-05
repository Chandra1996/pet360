import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'consultations' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      // { path: 'home', loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule) },
      { path: 'consultations', loadChildren: () => import('./modules/consultations/consultations.module').then(m => m.ConsultationsModule) },
      { path: 'admissions', loadChildren: () => import('./modules/admission/admission.module').then(m => m.AdmissionModule) },
      { path: '**', redirectTo: 'consultations' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
