import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        // Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@stevens\.edu$')
      ]],
      password: ['', [
        Validators.required,
        // Validators.minLength(8)
      ]]
    });
  }

  async onSubmit() {
    const formValue = this.signinForm.value;
    var email = formValue.email;
    var pass = formValue.password;
    // this.auth.signIn(email, pass);
    this.router.navigate(['dashboard']);
  }

}
