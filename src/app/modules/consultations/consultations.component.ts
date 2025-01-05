import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleConsultationDialogComponent } from '../schedule-consultation-dialog/schedule-consultation-dialog.component';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.scss']
})
export class ConsultationsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    console.log('ConsultationsComponent');
    this.consultations = this.activeConsultations;
     
  }
  activeTab: string = 'active';

  consultations:any=[]
  activeConsultations = [
    {
      timeSlot: '8:00 PM',
      token: 'Token - 1',
      petName: 'Bruno',
      petInfo: 'Dog - Golden Retriever',
      petParent: 'Suranjana Ghosh',
      contact: '7619562946',
      doctor: 'Dr. Jess Harris',
      type: 'Check-up',
      status: 'Upcoming',
      statusClass: 'upcoming'
    },
    {
      timeSlot: '8:00 PM',
      token: 'Token - 1',
      petName: 'Bruno',
      petInfo: 'Dog - Golden Retriever',
      petParent: 'Suranjana Ghosh',
      contact: '7619562946',
      doctor: 'Dr. K.C Cibran',
      type: 'Check-up',
      status: 'Ongoing',
      statusClass: 'ongoing'
    },
    {
      timeSlot: '8:00 PM',
      token: 'Token - 1',
      petName: 'Bruno',
      petInfo: 'Dog - Golden Retriever',
      petParent: 'Suranjana Ghosh',
      contact: '7619562946',
      doctor: 'Dr. Morgan Long',
      type: 'Check-up',
      status: 'Payment pending',
      statusClass: 'payment-pending'
    },
    {
      timeSlot: '8:00 PM',
      token: 'Token - 1',
      petName: 'Bruno',
      petInfo: 'Dog - Golden Retriever',
      petParent: 'Suranjana Ghosh',
      contact: '7619562946',
      doctor: 'N.A',
      type: 'Check-up',
      status: 'In progress',
      statusClass: 'in-progress'
    },
    {
      timeSlot: '8:00 PM',
      token: 'Token - 1',
      petName: 'Bruno',
      petInfo: 'Dog - Golden Retriever',
      petParent: 'Suranjana Ghosh',
      contact: '7619562946',
      doctor: 'N.A',
      type: 'Check-up',
      status: 'Completed',
      statusClass: 'completed'
    }
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
    if(tab == 'active') {
      this.consultations = this.activeConsultations;
    }
    else{
      this.consultations = this.activeConsultations.filter((consultation: any) => consultation.statusClass == tab);
    }
  }
  async onScheduleNow() {
    await import('../schedule-consultation-dialog/schedule-consultation-dialog.module').then(()=>{
      this.dialog.open(ScheduleConsultationDialogComponent).afterClosed().subscribe(res => {
        console.log('Dialog closed:', res);
        
        if(res) {
          this.activeConsultations.push(res.result);
        }
        console.log('Active Consultations:', this.activeConsultations);
        
      })
    })
  }
}
