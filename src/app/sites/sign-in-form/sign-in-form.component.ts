import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInFormComponent {

  registerForm: FormGroup;

  constructor(
    private readonly auth: AuthService,
    private readonly fb: FormBuilder
  ) { 
    this.registerForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }
    this.auth.register(this.registerForm.value)
  }
}
