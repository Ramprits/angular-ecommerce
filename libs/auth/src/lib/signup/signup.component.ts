import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'workspace-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.form = this.fb.group({
      username: ['versha', [Validators.required, Validators.min(6)]],
      email: ['vershasahani@gmail.com', [Validators.required, Validators.email]],
      password: ['vershasahani@gmail.com', [Validators.required, Validators.min(6)]]
    });
  }
  onSignupFormSubmit(data) {
    if (this.form.valid) {
      this.authService
        .addUser(data.username, data.email, data.password)
        .subscribe(res => console.log(res));
    }
    console.log(data);
  }
}
