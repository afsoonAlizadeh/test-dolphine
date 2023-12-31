import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Header } from '../../config/interface/header';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  header: Header = {
    action: 'Sign in',
    description: 'Welcome to FMS',
  };

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  hide = true;

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    this.auth.signIn(this.form.value).subscribe({
      next: () => {
        localStorage.setItem('token', JSON.stringify('Fake User'));
        this.router.navigate(['/units']);
      },
    });
  }
}
