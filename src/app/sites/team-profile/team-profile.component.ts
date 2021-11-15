import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamProfileComponent {
  
  loginForm: FormGroup;

  constructor(
    private readonly auth: AuthService,
    private readonly fb: FormBuilder,
  ) { 
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.login(this.loginForm.value)
  }
}
