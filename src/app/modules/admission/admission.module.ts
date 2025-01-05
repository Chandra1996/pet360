import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionComponent } from './admission.component';
import { Route, RouterModule } from '@angular/router';

const route: Route[] = [
  {
    path: '',
    component: AdmissionComponent
  }
];

@NgModule({
  declarations: [
    AdmissionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),

  ]
})
export class AdmissionModule { }
