export const loginFormCode = [
  {
    language: 'typescript',
    uri: 'loginform.ts',
    value: `import { Component } from '@angular/core';
    import { FormControl, FormGroup } from '@angular/forms';

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
          username: new FormControl('', ),
          password: new FormControl('', ),
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
    `,
  },
  {
    language: 'scss',
    uri: 'loginform.scss',
    value: `.login-form-template {
      margin: 5px;
      .form-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;

        h1 {
          text-align: center;
        }

        form {
          .mb-3 {
            margin-bottom: 15px;
          }

          .row {
            display: flex;
            align-items: center;

            .col-6 {
              flex: 0 0 50%;
            }
          }

          .text-center {
            text-align: center;
          }

          .w-100 {
            width: 100%;
          }

          mat-form-field {
            width: 100%;
          }

          button {
            width: 100%;
            margin-top: 10px;
          }

          a.btn.btn-link {
            display: inline-block;
            margin-left: 10px;
            text-decoration: none;
            color: #007bff;
          }

          p.text-center {
            margin-top: 20px;
          }

          button.mat-raised-button {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
            height: 40px;
            font-size: 14px;

            mat-icon {
              margin-right: 5px;
            }
          }

          button.mat-primary {
            background-color: #007bff;
            color: #ffffff;
          }

          button.mat-warn {
            background-color: #dc3545;
            color: #ffffff;
          }
        }
      }

    }
    `,
  },
  {
    language: 'html',
    uri: 'loginform.html',
    value: `<div
    class="container login-form-template d-flex flex-column justify-content-start h-100"
  >
    <div class="row w-100 h-100">
      <div
        class="d-flex flex-column justify-content-center align-items-center border-right component-view-section my-5 py-5"
      >
        <h1 class="text-center">User Login</h1>
        <form>
          <div class="mb-3">
            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Email address</mat-label>
              <input matInput type="email" required />
            </mat-form-field>
          </div>

          <div class="mb-3">
            <mat-form-field appearance="outline" class="w-100">
              <mat-label>Password</mat-label>
              <input matInput type="password" required />
            </mat-form-field>
          </div>
          <div class="mb-3 row">
            <div class="col-6">
              <button class="w-100" mat-raised-button color="primary">
                Sign In
              </button>
            </div>
            <div class="col-6">
              <a  class="btn btn-link">Forgot password?</a>
            </div>
          </div>

          <p class="text-center">Or sign in with:</p>
          <div class="mb-3 text-center">
            <button mat-raised-button color="primary" class="mx-2 my-2">
              <mat-icon>facebook</mat-icon>
              Sign in with Facebook
            </button>
            <button mat-raised-button color="warn" class="mx-2 my-2">
              <mat-icon>google</mat-icon>
              Sign in with Google
            </button>
          </div>
        </form>
        <p class="text-center">Don't have an account? <a >Sign Up</a></p>
      </div>

    </div>
  </div>

  `,
  },
];
