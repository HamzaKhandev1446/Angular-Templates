import { AfterContentChecked, AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit,AfterContentChecked {
  authForm!: FormGroup;
  isLoginMode = true;
  isLoading = false;
  error: string | null = null;
  hide: boolean = true;
  initialized = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  /**
   * @description: runs after component view is initialized. This method sets initialized
   *               field to true which symbols for component tha view is initialized successfully.
   * @input {none}
   * @output {void}
   */

  ngAfterContentChecked(): void {
    this.initialized = true;
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  userLogin() {
    if (!this.authForm.valid) {
      return;
    }

    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/components']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    this.authForm.reset();
  }
}
