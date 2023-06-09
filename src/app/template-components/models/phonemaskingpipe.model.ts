export const PhoneMaskPipeModel = [
  {
    language: 'typescript',
    uri: 'phone-mask.module.ts',
    value: `import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { PhoneMaskPipe } from './phone-mask.pipe';



    @NgModule({
      declarations: [PhoneMaskPipe],
      imports: [
        CommonModule
      ],
      exports:[PhoneMaskPipe]
    })
    export class PhoneMaskModule { }
    `,
  },
  {
    language: 'typescript',
    uri: 'phone-mask.pipe.ts',
    value: `/**
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
       return ['$']{prefix} - ** - *** - ['$']{suffix} ;
      // replace ['$'] with backticks appropriate syntax
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
       return ['$']{prefix} - ['$']{middle} - ['$']{middle2} - ['$']{suffix};
       // replace ['$'] with backticks appropriate syntax
     }
   }

    `,
  },
  {
    language: 'html',
    uri: 'app.component.html',
    value: ` <div
    class="container login-form-template d-flex flex-column justify-content-start h-100"
  >
    <div
      class="row w-100 d-flex flex-row justify-content-center align-items-center my-3"
    >
      <h1>+{{ number | phonemask : "show" }}</h1>
      <h1>+{{ number | phonemask : "hide" }}</h1>
    </div>
  </div>
  `,
  },
];
