import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-schedule-consultation-dialog',
  templateUrl: './schedule-consultation-dialog.component.html',
  styleUrls: ['./schedule-consultation-dialog.component.scss']
})
export class ScheduleConsultationDialogComponent implements OnInit {

  appointmentForm: FormGroup;
  doctors: string[] = ['Dr. Jess Harris', 'Dr. K.C Cibran', 'Dr. Morgan Long'];
  petVisitPurposes = [
    'Routine Check-up',
    'Vaccination',
    'Emergency Care',
    'Dental Cleaning',
    'Spaying/Neutering',
  ]
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ScheduleConsultationDialogComponent>
  ) {
    this.appointmentForm = this.fb.group({
      petParent: ['', Validators.required],
      petName: ['', Validators.required],
      date: ['', Validators.required],
      timeSlot: ['', Validators.required],
      doctor: ['', Validators.required],
      type: ['', Validators.required],
      primaryComplaint: [''],
      status: 'Upcoming',
      statusClass: 'upcoming',
      token: 'Token - 1',

    });
  }

  ngOnInit(): void {}

  isInvalid(controlName: string): boolean {
    const control :any= this.appointmentForm.get(controlName);
    return control?.invalid && control?.touched;
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log('Form Submitted:', this.appointmentForm.value);
      this.dialogRef.close({ result: this.appointmentForm.value });
    } else {
      console.log('Form is invalid!');
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
