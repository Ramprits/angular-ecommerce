import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'workspace-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, public auth: AuthService) {}

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.form = this.fb.group({
      identifier: ['vershasahani@gmail.com', [Validators.required]],
      password: [
        'vershasahani@gmail.com',
        [Validators.required, Validators.min(6)]
      ]
    });
  }
}
