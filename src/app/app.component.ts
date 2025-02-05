import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecycleHub';
  showNavbar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.showNavbar = !(currentRoute === '/login' || currentRoute === '/register' || currentRoute === '/unauthorized'); ;
    });
  }
}
const collectors = [
  {
    name: 'Jane',
    prenom: 'Doe',
    email: 'collector1@example.com',
    password: 'securepassword',
    address: '123 Collector Street',
    city: 'City A',
    dateNaissance: '1985-06-15',
    telephone: '9876543210',
    profilePhoto: null,
    userType: 'collector',
  },
  {
    name: 'John',
    prenom: 'Smith',
    email: 'collector2@example.com',
    password: 'securepassword',
    address: '456 Collector Avenue',
    city: 'City B',
    dateNaissance: '1990-11-22',
    telephone: '8765432109',
    profilePhoto: null,
    userType: 'collector',
  },
];

if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(collectors));
}

