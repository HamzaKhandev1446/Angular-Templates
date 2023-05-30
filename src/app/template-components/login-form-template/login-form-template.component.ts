import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MFValidators } from 'src/app/utils/validators/mf-validators';

@Component({
  selector: 'app-login-form-template',
  templateUrl: './login-form-template.component.html',
  styleUrls: ['./login-form-template.component.scss'],
})
export class LoginFormTemplateComponent {
  loginForm!: FormGroup;
  hide = true;
  invalidCredentialsPassword = false;
  initialized = false;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        MFValidators.required,
        MFValidators.username,
      ]),
      password: new FormControl('', [MFValidators.required]),
      rememberMe: new FormControl(false),
    });
  }

  onLogin() {}

  /**
   * @description This method hides notification from the user
   * @input { none }
   * @output { none }
   */
  hideNotificationPassword() {
    this.invalidCredentialsPassword = false;
  }

  /**
   * @description: runs after component view is initialized. This method sets initialized
   *               field to true which symbols for component tha view is initialized successfully.
   * @input {none}
   * @output {void}
   */

  ngAfterViewInit(): void {
    this.initialized = true;
  }

  /**
   * @description This method starts forgot password scenario. It validates user input
   *              and redirect user to the appropriate form.
   * @input { none }
   * @output { none }
   */
  forgotPassword() {}
}
