/**
 * PhoneMaskPipe
 *
 * A custom Angular pipe to mask phone numbers.
 * Provides two transformation methods based on the provided arguments.
 * Only valid for valid UAE phone number length = 12
 * If the argument includes 'hide', the pipe will return a masked phone number with hidden digits.
 * Otherwise, it will return a masked phone number with partial visibility of digits.
 *
 * Created by [Hamza Khan]
 * [2023-06-05]
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonemask',
})
export class PhoneMaskPipe implements PipeTransform {
  /**
   * Transforms the input phone number based on the provided arguments.
   * @param number The input phone number as a string.
   * @param args Optional arguments to control the transformation behavior.
   * @returns The transformed phone number as a string.
   */
  transform(number: string, args?: any): string {
    if (number.length !== 12) {
      return number;
    }
    if (args.includes('hide')) {
      return this.maskNumberHidden(number);
    } else {
      return this.maskNumber(number);
    }
  }

  /**
   * Masks the input phone number by hiding some digits.
   * @param input The input phone number as a string.
   * @returns The masked phone number with hidden digits as a string.
   */
  maskNumberHidden(input: string): string {
    const prefix = input.slice(0, 3);
    const middle = input.slice(3, 5);
    const suffix = input.slice(-4);
    return `${prefix} - ** - *** - ${suffix}`;
  }

  /**
   * Masks the input phone number with partial visibility of digits.
   * @param input The input phone number as a string.
   * @returns The masked phone number with partial visibility of digits as a string.
   */
  maskNumber(input: string): string {
    const prefix = input.slice(0, 3);
    const middle = input.slice(3, 5);
    const middle2 = input.slice(5, 8);
    const suffix = input.slice(-4);
    return `${prefix} - ${middle} - ${middle2} - ${suffix}`;
  }
}
