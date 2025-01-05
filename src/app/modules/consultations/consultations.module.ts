import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationsComponent } from './consultations.component';
import { Route, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const route: Route[] = [
  {
    path: '',
    component: ConsultationsComponent
  }
];

@NgModule({
  declarations: [
    ConsultationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConsultationsModule { }
