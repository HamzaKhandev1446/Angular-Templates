/**
 * @author Muhammad Fahad
 * @datetime July, 14th 2022
 * @description: This is usernameValidator directive to validated username in div, p, span or anyother block.
 */
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Directive } from '@angular/core';
import { MFValidators } from '../mf-validators';

@Directive({
  selector: '[usernameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UsernameValidator,
      multi: true,
    },
  ],
})
export class UsernameValidator implements Validator {
  /**
   * @description
   * Method that validates whether the control is valid.
   * Returns the validation result if valid, otherwise null.
   */
  validate(control: AbstractControl): ValidationErrors | null {
    return MFValidators.username(control);
  }
}
