import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }
  selectedNavItem: any;
  menuItems = [
    { icon: 'consultations', label: 'Consultations', route: 'consultations' },
    { icon: 'admissions', label: 'Admissions', route: 'admissions' },
    { icon: 'groomings', label: 'Groomings', route: 'groomings' },
    { icon: 'registrations', label: 'Registrations', route: 'registrations' },
    { icon: 'inventory', label: 'Inventory', route: 'inventory' },
    { icon: 'reminders', label: 'Reminders', route: 'reminders' },
    { icon: 'payments', label: 'Payments', route: 'payments' },
    { icon: 'reportsAndMis', label: 'Reports & MIS', route: 'reportsAndMis' }
  ];

  hospitalName = 'Bangalore Pet Hospital (Siddhapura)'

  ngOnInit(): void {
    const fullRoute = this.router.url
    const firstRouteSegment = fullRoute.split('/')[1];
    this.onClickNav(this.menuItems.find(item => item.route === firstRouteSegment));
  }

  onClickNav(selectedItem: any) {
    console.log(selectedItem);
    this.selectedNavItem = selectedItem.label;
    this.router.navigate([selectedItem.route]);
  }


}
