import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name: string = '';
  prenom: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  address: string = '';
  city: string = '';
  dateNaissance: string = '';
  telephone: string = '';
  profilePhoto: File | null = null;
  userType: string = 'individual';
  successMessage: string = '';
  errorMessage: string = '';

  onSubmit(event: Event): void {
    event.preventDefault();

    this.successMessage = '';
    this.errorMessage = '';

    if (
      !this.name ||
      !this.prenom ||
      !this.email ||
      !this.password ||
      !this.confirmPassword ||
      !this.address ||
      !this.city ||
      !this.dateNaissance ||
      !this.telephone
    ) {
      this.errorMessage = 'All fields are required';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.errorMessage = 'Please enter a valid email address';
      return;
    }

    const user = {
      name: this.name,
      prenom: this.prenom,
      email: this.email,
      password: this.password,
      address: this.address,
      city: this.city,
      dateNaissance: this.dateNaissance,
      telephone: this.telephone,
      profilePhoto: this.profilePhoto ? this.profilePhoto.name : null,
      userType: this.userType,
    };


    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    const emailExists = existingUsers.some(
      (existingUser: any) => existingUser.email === this.email
    );
    if (emailExists) {
      this.errorMessage = 'This email is already registered';
      return;
    }

    existingUsers.push(user);

    localStorage.setItem('users', JSON.stringify(existingUsers));

    this.successMessage = 'Registration successful!';
    this.resetForm();
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onFileChange(event: any): void {
    this.profilePhoto = event.target.files[0];
  }

  private resetForm(): void {
    this.name = '';
    this.prenom = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.address = '';
    this.city = '';
    this.dateNaissance = '';
    this.telephone = '';
    this.profilePhoto = null;
    this.userType = 'individual';
  }
}
