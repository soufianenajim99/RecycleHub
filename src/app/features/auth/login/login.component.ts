import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/authentication/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router,private authService: AuthService) {

  }

  onSubmit(event: Event): void {
    event.preventDefault();

    // Clear previous error messages
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required.';
      return;
    }

    // Retrieve users from local storage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check for matching user
    const user = users.find(
      (u: any) => u.email === this.email && u.password === this.password
    );

    if (!user) {
      this.errorMessage = 'Invalid email or password.';
      return;
    }

    // Store user in AuthService
    this.authService.login(user);

    // Redirect based on role
    if (user.userType === 'individual') {
      this.router.navigate(['/individual']);
    } else if (user.userType === 'collector') {
      this.router.navigate(['/collector']);
    }
  }


}
