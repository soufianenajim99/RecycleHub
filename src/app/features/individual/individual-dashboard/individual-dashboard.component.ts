import { Component } from '@angular/core';
import {AuthService} from '../../../core/authentication/auth.service';

@Component({
  selector: 'app-individual-dashboard',
  standalone: false,
  templateUrl: './individual-dashboard.component.html',
  styleUrl: './individual-dashboard.component.css'
})
export class IndividualDashboardComponent {
  constructor(private authService: AuthService) {}
  logout(): void {
    this.authService.logout();
  }
}
