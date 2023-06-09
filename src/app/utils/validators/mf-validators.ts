/**
 * @author Muhammad Fahad
 * @datetime July, 14th 2022
 * @description: This is mf-validator class that extends Validators and adds additional validators in it.
 */
import { TRANSLATIONS } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { convertParseDateTime } from 'src/app/utils/utilities/utility-service';

export class MFValidators extends Validators {
  /**
   * @description
   * Validator that requires the control's value pass username validation test.
   *
   *
   * Constrains include:
   * - Disallow the whole username to be longer than 20 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `MFValidators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid username pattern
   *
   * ```typescript
   * const control = new FormControl('bad@abc.com', MFValidators.username);
   *
   * console.log(control.errors); // {username: true}
   * ```
   *
   * @returns An error map with the `username` property
   * if the validation check fails, otherwise `null`.
   */
  static username(control: AbstractControl): ValidationErrors | null {
    const canadaUSAPhoneFormat = '^((\\+1-?)|0)?[0-9]{10}$';
    const mexicoPhoneFormat = '^((\\+52-?)|0)?[0-9]{10}$';
    const emailFormat =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const result: boolean =
      !control.value.match(canadaUSAPhoneFormat) &&
      !control.value.match(mexicoPhoneFormat) &&
      !control.value.match(emailFormat);
    return result ? { username: true } : null;
  }

  /**
   * @description
   * Validator that requires the control's value pass an email validation test.
   *
   * Tests the value using a [regular
   * expression] (^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$)
   *
   * Constrains include:
   * - Disallow the whole address to be longer than 50 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `MFValidators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid email pattern
   *
   * ```typescript
   * const control = new FormControl('bad@abc.com', MFValidators.email);
   *
   * console.log(control.errors); // {email: true}
   * ```
   *
   * @returns An error map with the `email` property
   * if the validation check fails, otherwise `null`.
   *
   * @see `updateValueAndValidity()`
   *
   */
  // static email(control: AbstractControl): ValidationErrors | null {
  //   const emailRegex =
  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return control?.value?.match(emailRegex) ? null : { email: true };
  // }

  /**
   * @description
   * Validator that requires the control's value pass an region validation test.
   *
   * Tests the value using a [regular
   * expression] (^[+][0-9]{1}$)
   *
   * Constrains include:
   * - Disallow the whole address to be longer than 20 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `MFValidators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid region pattern
   *
   * ```typescript
   * const control = new FormControl('+152392323', MFValidators.region);
   *
   * console.log(control.errors); // {region: true}
   * ```
   *
   * @returns An error map with the `region` property
   * if the validation check fails, otherwise `null`.
   *
   * @see `updateValueAndValidity()`
   *
   */
  static region(control: AbstractControl): ValidationErrors | null {
    const regionRegex = '^[+][0-9]{1}$';
    return control?.value?.match(regionRegex) ? null : { region: true };
  }

  /**
   * @description
   * Validator that requires the control's value pass an phone validation test.
   *
   * Tests the value using a [regular
   * expression] ^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$
   *
   * Constrains include:
   * - Disallow the whole address to be longer than 20 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `MFValidators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid phone pattern
   *
   * ```typescript
   * const control = new FormControl('+152392323', MFValidators.phone);
   *
   * console.log(control.errors); // {phone: true}
   * ```
   *
   * @returns An error map with the `region` property
   * if the validation check fails, otherwise `null`.
   *
   * @see `updateValueAndValidity()`
   *
   */
  static phone(control: AbstractControl): ValidationErrors | null {
    const phoneRegex =
      '^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$';
    return control?.value?.match(phoneRegex) ? null : { phone: true };
  }

  /**
   * @description
   * Validator that requires the control's value pass an password validation test.
   *
   * Tests the value using four [regular expression]
   *  - /[A-Z]/g
   *  - /[a-z]/g
   *  - /[0-9]/g
   *  - /[#?!@$%^&*-]+/g
   *
   * Constrains include:
   * - Disallow the whole address to be longer than 25 characters.
   * - Does not allow special characters other than mentioned
   *
   * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid password pattern
   *
   * ```typescript
   * const control = new FormControl('Abcd@123', MFValidators.password);
   *
   * console.log(control.errors); // {password: true, details: { basicFailure: false, specialFailure: true } }
   * ```
   *
   * @returns An error map with the `password` property
   * if the validation check fails, otherwise `null`.
   *
   * @see `updateValueAndValidity()`
   *
   */
  static password(control: AbstractControl): ValidationErrors | null {
    const upperCase = /[A-Z]/g;
    const lowerCase = /[a-z]/g;
    const number = /[0-9]/g;
    const specialCharacter = /[#?!@$%^&*-]+/g;

    let result1 = control?.value?.match(upperCase);
    let result2 = control?.value?.match(lowerCase);
    let result3 = control?.value?.match(number);
    let result4 = control?.value?.match(specialCharacter);

    let result = [];
    let details = {};
    if (result1 && result2 && result3 && result4) {
      details = { basicFailure: false, specialFailure: true };
      result4 = result4.map((v: string) => v.split('')).flat();
      result = [].concat(result1, result2, result3, result4);
    } else details = { basicFailure: true };

    return result.length === control?.value?.length
      ? null
      : { password: true, details: details };
  }

  /**
   * @description
   * MFValidators that requires the control's value and check if tere is any extra whitespace in the start or
   * end of the value
   *
   * Tests the value using four [regular expression]
   *  - /[A-Z]/g
   *  - /[a-z]/g
   *  - /[0-9]/g
   *  - /[#?!@$%^&*-]/g
   *
   * Constrains include:
   * - Disallow the whole address to be longer than 25 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `MFValidators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid password pattern
   *
   * ```typescript
   * const control = new FormControl('Abcd@123  ', MFValidators.whitespace);
   *
   * console.log(control.errors); // {whitespace: true}
   * ```
   *
   * @returns An error map with the `whitespace` property
   * if the validation check fails, otherwise `null`.
   *
   * @see `updateValueAndValidity()`
   *
   */
  static whitespace(control: AbstractControl): ValidationErrors | null {
    if (!control.value || control.value?.length === 0) return null;
    const valueLength = (control.value || '').trim().length;
    const isValid = valueLength === control.value.length;
    return isValid ? null : { whitespace: true };
  }

  /**
   * @description
   * MFValidators that requires the control's value and check if there is any alpha numeric value
   *
   * Tests the value using four [regular expression]
   *  - /^[A-Za-z0-9 ]+$/
   *
   * Constrains include:
   * - Disallow the whole address to be longer than 25 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `MFValidators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid password pattern
   *
   * ```typescript
   * const control = new FormControl('abcAbcd123  ', MFValidators.alphaNumeric);
   *
   * console.log(control.errors); // {alphaNumeric: true}
   * ```
   *
   * @returns An error map with the `alphaNumeric` property
   * if the validation check fails, otherwise `null`.
   *
   * @see `updateValueAndValidity()`
   *
   */
  static alphaNumeric(control: AbstractControl): ValidationErrors | null {
    const ALPHA_NUMERIC_REGEXP = /^[A-Za-z0-9 ]+$/;
    return control?.value?.length === 0 ||
      ALPHA_NUMERIC_REGEXP.test(control?.value)
      ? null
      : { alphaNumeric: true };
  }

  /**
   * @description
   * MFValidators that requires the control's value and check if this is a valid macc address type
   *
   * Tests the value using four [regular expression]
   *  - /^([0-9a-fA-F]{2}[:.-]){5}[0-9a-fA-F]{2}$/
   *
   * Constrains include:
   *
   * If this pattern does not satisfy your business needs, you can use `MFValidators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid mac address pattern
   *
   * ```typescript
   * const control = new FormControl('abcAbcd123  ', MFValidators.macAddress);
   *
   * console.log(control.errors); // {macAddress: true}
   * ```
   *
   * @returns An error map with the `macAddress` property
   * if the validation check fails, otherwise `null`.
   *
   * @see `updateValueAndValidity()`
   *
   */
  static macAddress(control: AbstractControl): ValidationErrors | null {
    const MAC_ADDESS_REGEXP = /^([0-9a-fA-F]{2}[:]){5}[0-9a-fA-F]{2}$/;
    return control?.value?.length === 0 ||
      MAC_ADDESS_REGEXP.test(control?.value)
      ? null
      : { macAddress: true };
  }

  /**
   * @description
   * MFValidators that requires the control's value and check if tere is any extra whitespace in the start or
   * end of the value
   *
   * Tests the value using four [regular expression]
   *  - /^[A-Za-z0-9 ',.%&/#@-]+$/
   *
   * Constrains include:
   * - Disallow the whole address to be longer than 25 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `MFValidators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid password pattern
   *
   * ```typescript
   * const control = new FormControl('Abcd@123  ', MFValidators.alphaNumSpecialChar);
   *
   * console.log(control.errors); // {alphaNumSpecialChar: true}
   * ```
   *
   * @returns An error map with the `alphaNumSpecialChar` property
   * if the validation check fails, otherwise `null`.
   *
   * @see `updateValueAndValidity()`
   *
   */
  static alphaNumSpecialChar(
    control: AbstractControl
  ): ValidationErrors | null {
    const ADDRESS_CHARACTER_REGEXP = /^[A-Za-z0-9 ',.%&(*)/#@-]+$/;
    const ONLY_SPECIAL_CHARACTER = /^[',.%&(*) /#@-]+$/;
    if (ONLY_SPECIAL_CHARACTER.test(control?.value))
      return { alphaNumSpecialChar: true };
    return control?.value?.length === 0 ||
      ADDRESS_CHARACTER_REGEXP.test(control?.value)
      ? null
      : { alphaNumSpecialChar: true };
  }

  /**
   * @description
   * MFValidators that requires the control's value and check if tere is any extra whitespace in the start or
   * end of the value
   *
   * Tests the value using four [regular expression]
   *  - /^[0-9A-Fa-f]{16}$/
   *
   * Constrains include:
   * - Disallow the whole address to be longer than 16 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `MFValidators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid password pattern
   *
   * ```typescript
   * const control = new FormControl('Abcd@123  ', MFValidators.serialNumber);
   *
   * console.log(control.errors); // {serialNumber: true}
   * ```
   *
   * @returns An error map with the `serialNumber` property
   * if the validation check fails, otherwise `null`.
   */

  static serialNumber(control: AbstractControl): ValidationErrors | null {
    const SERIAL_NUMBER_REGEXP = /^[0-9A-Fa-f]{16}$/;
    return control?.value?.length === 0 ||
      SERIAL_NUMBER_REGEXP.test(control?.value)
      ? null
      : { serialNumber: true };
  }

  /**
   * @description
   * MFValidators ##setPassword requires the control's value and check if control's value fulfill
   * all the required policy password.
   *
   * Tests the value using four [regular expression]
   *  - upperCase = /[A-Z]/g
   *  - lowerCase = /[a-z]/g
   *  - number = /[0-9]/g
   *  - specialCharacter = /[#?!@$%^&*-]+/g
   *
   * Constraints include:
   * - Disallow if password does not have a single uppercase.
   * - Disallow if password does not have a single lowercase.
   * - Disallow if password does not have a single number.
   * - Disallow if password does not have a single specialCharacter [#?!@$%^&*-].
   *
   *
   * @usageNotes
   *
   * ### Validate that the field matches a password policy
   *
   * ```typescript
   * const control = new FormControl('bcd@123  ', MFValidators.setPassword);
   * console.log(control.errors); // {upperCase: true}
   * ```
   *
   * * ```typescript
   * const control = new FormControl('BCD@123  ', MFValidators.setPassword);
   * console.log(control.errors); // {lowercase: true}
   * ```
   *
   * * ```typescript
   * const control = new FormControl('bcdAsadad@  ', MFValidators.setPassword);
   * console.log(control.errors); // {number: true}
   * ```
   *
   *    * ```typescript
   * const control = new FormControl('bcdA123  ', MFValidators.setPassword);
   * console.log(control.errors); // {specialCharacter: true}
   * ```
   *
   * @returns An error map with the `password :{upperCase | lowercase | number |
   *  specialCharacter }` relevant property
   * if the relevant validation check fails, otherwise `null`.
   *
   *
   */

  static setPassword(control: AbstractControl): ValidationErrors | null {
    const upperCase = /[A-Z]/g;
    const lowerCase = /[a-z]/g;
    const number = /[0-9]/g;
    const specialCharacter = /[#?!@$%^&*-]+/g;
    const restrictedCharacters = /[~``()=+""'';_:\\<>|/.\]\[,{}]+/g;
    let details = {
      upperCase: false,
      lowerCase: false,
      number: false,
      specialCharacter: false,
      restrictedCharacters: false,
    };
    if (!upperCase.test(control?.value)) {
      details = { ...details, upperCase: true };
    }
    if (!lowerCase.test(control?.value)) {
      details = { ...details, lowerCase: true };
    }
    if (!number.test(control?.value)) {
      details = { ...details, number: true };
    }
    if (!specialCharacter.test(control?.value)) {
      details = { ...details, specialCharacter: true };
    }
    if (restrictedCharacters.test(control?.value)) {
      details = { ...details, restrictedCharacters: true };
    }
    return details?.lowerCase ||
      details.upperCase ||
      details.number ||
      details.specialCharacter ||
      details.restrictedCharacters
      ? { password: details }
      : null;
  }

  /**
   * @description
   * ## matchPassword Validator requires the two fields which have to be maqtched for Valid form.
   *
   *
   * Constrains include:
   * - Disallow the submission of form while both fields not matches .
   *
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid username pattern
   *
   * ```typescript
   *  {
        validator: MFValidators.matchPassword('newpassword', 'confirmpassword'),
      }
   *
   * console.log(control.errors); // { passwordMismatch: true }
   * ```
   *
   * @returns An error map with the `passwordMismatch` property
   * if the validation check fails, otherwise `null`.
   */

  static matchPassword(
    password: string,
    confirmPassword: string
  ): ValidationErrors | null {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  /**
   * @description
   * ## dateValidator Validator requires the two fields which have to be valid unix value.
   *
   *
   * Constrains include:
   * - Disallow the submission of form while endDateTime equal and greater than startDateTime.
   *
   *
   * @usageNotes
   *
   * ```typescript
   *  {
        validator: MFValidators.dateValidator('startDateTime', 'endDateTime'),
      }
   *
   * console.log(control.errors); // { dateValidator: true }
   * ```
   *
   * @returns An error map with the `dateValidator` property
   * if the validation check fails, otherwise `null`.
   */
  static startTimeEndTime(
    startDateTime: string,
    endDateTime: string
  ): ValidationErrors | null {
    return (formGroup: FormGroup) => {
      let startDateTimeControl = formGroup.controls[startDateTime]?.value
        ? Number(
            convertParseDateTime(
              formGroup.controls[startDateTime]?.value,
              "EEE, MMM do, yyyy 'at' h:mm a",
              't'
            )
          )
        : null;

      let endDateTimeControl = formGroup.controls[endDateTime]?.value
        ? Number(
            convertParseDateTime(
              formGroup.controls[endDateTime]?.value,
              "EEE, MMM do, yyyy 'at' h:mm a",
              't'
            )
          )
        : null;

      if (
        startDateTimeControl &&
        endDateTimeControl &&
        new Date(startDateTimeControl! * 1000).getTime() >=
          new Date(endDateTimeControl! * 1000).getTime()
      ) {
        formGroup.controls[endDateTime].setErrors({ dateValidator: true });
      } else {
        formGroup.controls[endDateTime].setErrors(null);
      }
    };
  }

  /**
   * @description
   * MFValidators that requires the control's value and check if there is any value which only has
   * special character returns an error while check for special characters includes: 
   * /^[A-Za-z0-9 ',.-]+$/ && /^[',.-]+$/ returns an error { entityName : true } else returns null
   *
   * Tests the value using four [regular expression]
   *  - /^[A-Za-z0-9 ',.-]+$/ && /^[',.-]+$/
   *
   * Constrains include:
   * - Disallow the whole address to be other than specific pattern.
   *
   * If this pattern does not satisfy your business needs, you can use `MFValidators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid entityName pattern.
   *
   * ```typescript
   *  {
        validator: MFValidators.entityName,
      }
   *
   * console.log(control.errors); // { entityName : true }
   *
   * @returns An error map with the `entityName` property
   * if the validation check fails, otherwise `null`.
   *
   * @see `updateValueAndValidity()`
   *
   */
  static entityName(control: AbstractControl): ValidationErrors | null {
    const ALPHA_NUMERIC_REGEXP = /^[A-Za-z0-9 ',.-]+$/;
    const ONLY_SPECIAL_CHARACTER = /^[',. -]+$/;
    if (ONLY_SPECIAL_CHARACTER.test(control?.value))
      return { entityName: true };
    return control?.value?.length === 0 ||
      ALPHA_NUMERIC_REGEXP.test(control?.value)
      ? null
      : { entityName: true };
  }
}
