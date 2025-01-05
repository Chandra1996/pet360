import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pet360';
  activeTab: string = 'active';
  isNavCollapsed: boolean = false;
  consultations = [
    {
      time: '8:00 PM',
      petName: 'Bruno',
      petDetails: 'Dog - Golden Retriever',
      petParent: 'Suranjana Ghosh',
      contact: '7619562946',
      doctor: 'Dr. Jess Harris',
      type: 'Check-up',
      status: 'Upcoming',
      statusClass: 'upcoming'
    },
    {
      time: '8:00 PM',
      petName: 'Bruno',
      petDetails: 'Dog - Golden Retriever',
      petParent: 'Suranjana Ghosh',
      contact: '7619562946',
      doctor: 'Dr. K.C Cibran',
      type: 'Check-up',
      status: 'Ongoing',
      statusClass: 'ongoing'
    },
    {
      time: '8:00 PM',
      petName: 'Bruno',
      petDetails: 'Dog - Golden Retriever',
      petParent: 'Suranjana Ghosh',
      contact: '7619562946',
      doctor: 'Dr. Morgan Long',
      type: 'Check-up',
      status: 'Payment pending',
      statusClass: 'payment-pending'
    },
    {
      time: '8:00 PM',
      petName: 'Bruno',
      petDetails: 'Dog - Golden Retriever',
      petParent: 'Suranjana Ghosh',
      contact: '7619562946',
      doctor: 'N.A',
      type: 'Check-up',
      status: 'Completed',
      statusClass: 'completed'
    }
  ];

  activeConsultations = [
    {
      time: '8:00 PM',
      petName: 'Bruno',
      petDetails: 'Dog - Golden Retriever',
      petParent: 'Suranjana Ghosh',
      contact: '7619562946',
      doctor: 'Dr. Jess Harris',
      type: 'Check-up',
      status: 'Upcoming',
      statusClass: 'upcoming'
    },
    {
      time: '8:00 PM',
      petName: 'Bruno',
      petDetails: 'Dog - Golden Retriever',
      petParent: 'Suranjana Ghosh',
      contact: '7619562946',
      doctor: 'Dr. K.C Cibran',
      type: 'Check-up',
      status: 'Ongoing',
      statusClass: 'ongoing'
    }
  ];

  completedConsultations = [
    {
      time: '8:00 PM',
      petName: 'Bruno',
      petDetails: 'Dog - Golden Retriever',
      petParent: 'Suranjana Ghosh',
      contact: '7619562946',
      doctor: 'Dr. Morgan Long',
      type: 'Check-up',
      status: 'Completed',
      statusClass: 'completed'
    }
  ];

  switchTab(tab: string) {
    this.activeTab = tab;
  }

  toggleNav() {
    this.isNavCollapsed = !this.isNavCollapsed;
  }
}
