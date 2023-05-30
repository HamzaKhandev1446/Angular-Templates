// /**
//  * @author Muhammad Fahad
//  * @datetime April, 14th 2022
//  * @description: This class is for utility operations.
//  */
import { format, parse } from 'date-fns';
// import { ElementRef, Injectable } from '@angular/core';
// import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
// // import { isEqual } from 'lodash';
// // import { PermanantStateManagement } from '../models/types';
// // import { StateManagementService } from '../services/state-management.service';
// // import { PageName } from './user-roles';
// // import { CONSTANTS as CONST } from 'src/app/shared/constants/constants';
// // import { config as config } from 'src/config/config';
// // import { LANGUAGE_CONSTANTS as LANG_CONST } from 'src/app/shared/constants/language-constants';
// // import { IUserGroups } from 'src/app/user-management/add-user/add-user-management.interface';
// @Injectable({
//   providedIn: 'root',
// })
// export class Utility {
// //   readonly CONST = CONST;
// //   readonly config = config;
// //   readonly LANG_CONST = LANG_CONST;
//   /**
//    * @description initializes services
//    */
//   constructor() {}

//   /**
//    * @description this method compared two JSON objects
//    * @param { JSON } obj
//    * @param { JSON } obj2
//    * @returns { boolean }
//    */
// //   static compareJson(obj: Object, obj2: Object) {
// //     return isEqual(obj, obj2);
// //   }

// //   static compareTwoStoreStates(arr1: any, arr2: any) {
// //     if (arr1?.length === arr2?.length) {
// //       for (let i = 0; i < arr1.length; i++) {
// //         if (!Utility.compareJson(arr1[1], arr2[1])) return false;
// //       }
// //     } else return false;
// //     return true;
// //   }

//   static compareTwoStoreJsonStates(state1: any, state2: any) {
//     if (JSON.stringify(state1) !== JSON.stringify(state2)) return true;
//     else return false;
//   }

// //   /**
// //    * @description this method manages adding and removing head in request
// //    * @param { boolean } loader
// //    * @returns
// //    */
// //   static loaderHeader(loader: boolean | undefined): PermanantStateManagement {
// //     return loader ? { loader: 'true' } : {};
// //   }

//   /**
//    * @description this method checks if TTL for chache is expired or not
//    * @param { number } ttl
//    * @param { number } initialTime
//    * @returns
//    */
//   static checkTTLExpiry(ttl: number, initialTime: number) {
//     const currentTime = Date.now() - initialTime;
//     return currentTime < ttl;
//   }

//   /**
//    * @description this is validator method for validating white spaces
//    * @param { FormControl } control
//    * @returns
//    */
//   static noWhitespaceValidator(control: FormControl) {
//     if (!control.value || control.value?.length === 0) return null;
//     const valueLength = (control.value || '').trim().length;
//     const isValid = valueLength === control.value.length;
//     return isValid ? null : { whitespace: true };
//   }

//   /**
//    * @description ##alphaNumeric is validator method for validating form field to
//    *              have only numbers and alphabets
//    * @param { FormControl } control
//    * @returns
//    */

//   static alphaNumeric(control: FormControl): { invalidName: true } | null {
//     const ALPHA_NUMERIC_REGEXP = /^[A-Za-z0-9 ]+$/;
//     if (
//       control?.value?.length === 0 ||
//       ALPHA_NUMERIC_REGEXP.test(control?.value)
//     ) {
//       return null;
//     }
//     return {
//       invalidName: true,
//     };
//   }

//   /**
//    * @description ##specialAddressCharacters is validator method for validating form field to
//    *              have only address typed special characters
//    * @param { FormControl } control
//    * @returns
//    */

//   static specialAddressCharacters(
//     control: FormControl
//   ): { invalidAddress: true } | null {
//     const ADDRES_CHARACTER_REGEXP = /^[A-Za-z0-9 ',.%&/#@-]+$/;
//     if (
//       control?.value?.length === 0 ||
//       ADDRES_CHARACTER_REGEXP.test(control?.value)
//     ) {
//       return null;
//     }

//     return {
//       invalidAddress: true,
//     };
//   }

//   /**
//    * @description this method checks if uploading file is valid image file
//    * @param { string } filename
//    * @returns
//    */
//   static checkValidImageExtension(filename: string) {
//     const validExtensions = ['jpg', 'png', 'jpeg'];
//     const result = filename?.split('.');
//     const ext = result.pop();
//     return validExtensions.includes(ext?.toLowerCase() || '');
//   }

//   /**
//    * @description this method checks if uploading file size is valid image file size 25 MB.
//    * @param { number } fileSize
//    * @param { number } defaultfileSize
//    * @returns { boolean }
//    */
//   static checkValidImageSize(fileSize: number, maxFileSize: number) {
//     if (fileSize > maxFileSize * 1024 * 1024) return true;
//   }

//   /**
//    * @description this method checks if uploading file size is valid image file size 25 MB.
//    * @param { number } fileSize
//    * @param { number } defaultfileSize
//    * @returns { boolean }
//    */
//   static checkValidValue(value: string) {
//     return !(value === '' || value === null || value === undefined);
//   }

//   /**
//    * @description this method encodes into base 64
//    * @param { string } data data sent for encoding
//    * @returns { string }
//    */
//   static encodeToBase64(data: string): string {
//     const encoded = btoa(data);
//     return encoded;
//   }

//   /**
//    * @description this method decodes from base 64
//    * @param { string } data data sent for decoding
//    * @returns { string }
//    */
//   static decodeFromBase64(data: string): string {
//     const decoded = atob(data);
//     return decoded ?? '';
//   }

//   /**
//    * @description numberInString method accepts any value and return a 1st number present in
//    * @param { data }
//    * @returns { string }
//    */
//   static numberInString(data: any) {
//     return data?.match(/\d+/)[0];
//   }

//   /**
//    * @description: This method accepts the floor in string and check if the floor has any number.
//    * @input { string }
//    * @param { str }
//    * @output { boolean }
//    */

//   static stringContainsNumber(str: string) {
//     return /\d/.test(str);
//   }

//   /**
//    * @description: This method accept string and returns the Ordinal Suffix of that string number
//    * @param { string } number pass a number as string
//    * @output { string }
//    */

//   static ordinalSuffixConverter(number: string): string {
//     const matcher: Array<string> = number.match(`1?.$`) ?? ['0'];
//     number += [, 'st', 'nd', 'rd'][+matcher[0]] || 'th';
//     return number;
//   }

//   /**
//    * @description: #getUserRoles method will return available user roles
//    * @output { IUserGroups } userRoles
//    */
// //   static getUserRoles(): IUserGroups {
// //     const userRoles = [
// //       {
// //         label: LANG_CONST.PROPERTY_MANAGER_ADMIN,
// //         name: 'group',
// //         value: 'Property Manager Admin',
// //         desc: 'Gain access to sites, buildings, units, doors/access points as approved.',
// //         type: 'Property_Manager_Admin',
// //         active: false,
// //       },
// //       {
// //         label: LANG_CONST.PROPERTY_MANAGER_USER,
// //         name: 'group',
// //         value: 'Property Manager User',
// //         desc: 'Can add and manage units, locks (entry points) in a unit and manage devices.',
// //         type: 'Property_Manager_User',
// //         active: false,
// //       },
// //       {
// //         label: LANG_CONST.INSTALLER_ADMIN,
// //         name: 'group',
// //         value: 'Installer Admin',
// //         desc: 'Privileges for the property, buildings, units, and all locks and devices in the property.',
// //         type: 'Installer_Admin',
// //         active: false,
// //       },
// //       {
// //         label: LANG_CONST.INSTALLER_USER,
// //         name: 'group',
// //         value: 'Installer User',
// //         desc: 'Can activate and onboard a lock or device, add and manage unit and their locks (entry points) in a unit.',
// //         type: 'Installer_User',
// //         active: false,
// //       },
// //       {
// //         label: LANG_CONST.END_USER_ADMIN,
// //         name: 'group',
// //         value: 'End User Admin',
// //         desc: 'Masters of their unit, and are therefore able to invite lower level users to the units that they are assigned to.',
// //         type: 'End_User_Admin',
// //         active: false,
// //       },
// //       {
// //         label: LANG_CONST.END_USER_USER,
// //         name: 'group',
// //         value: 'End User User',
// //         desc: 'May only view, lock, and unlock the units/access points that they have been assigned to.',
// //         type: 'End_User_User',
// //         active: false,
// //       },
// //     ];
// //     return userRoles;
// //   }
// }

// /**
//  * @description this method returns language for user
//  * @param langCode
//  * @returns { string }
//  */
// export function getUILanguage(langCode: string): string {
//   //please add this line for dynamically return language behavior --> lang || config.LANGUAGES["en-us"]
//   return 'English';
// }

// /**
//  * @description this method is for directly placing something to localStorage
//  * @param { string } key
//  * @param { string } value
//  * @returns { void }
//  */
// export function saveCurrentState(key: string, value: string) {
//   try {
//     let currentState = localStorage.getItem('state');
//     if (currentState) {
//       let updatedState: PermanantStateManagement = {};
//       updatedState = JSON.parse(currentState);
//       updatedState[key] = value;
//       localStorage.setItem('state', JSON.stringify(updatedState));
//     } else {
//       localStorage.setItem('state', JSON.stringify({ [key]: value }));
//     }
//     return true;
//   } catch (err) {
//     return false;
//   }
// }

// /**
//  * @description this method is to get object directly from localStorage
//  * @param { string } key
//  * @returns { void }
//  */

// export function getCurrentState(key: string) {
//   try {
//     let currentState = localStorage.getItem('state');
//     if (currentState) {
//       let updatedState: PermanantStateManagement = {};
//       updatedState = JSON.parse(currentState);
//       return updatedState[key];
//     }
//   } catch (err) {
//     return undefined;
//   }
// }

// /**
//  * @description this method will convertaccessibility matrix to a storable form
//  * @param { string } role
//  * @param { string } matrix
//  * @returns { void }
//  */
// export function convertAccessibilityMatrix(role: string, matrix: any) {
//   const userRole = role.replace(/_/g, '');
//   const accessRights = [
//     {
//       name: PageName.Site,
//       create: matrix?.addSite,
//       update: matrix?.updateSite,
//       view: matrix?.getSites,
//       delete: matrix?.deleteSite,
//     },
//     {
//       name: PageName.Building,
//       create: matrix?.addBuilding,
//       update: true,
//       view: matrix?.getBuildingsBySite,
//       delete: matrix?.deleteBuilding,
//     },
//     {
//       name: PageName.Floor,
//       create: matrix?.addFloor,
//       update: matrix?.updateFloor,
//       view: matrix?.getFloorsByBuilding,
//       delete: matrix?.deleteFloor,
//     },
//     {
//       name: PageName.Unit,
//       create: true,
//       update: true,
//       view: true,
//       delete: matrix?.deleteUnit,
//     },
//   ];
//   return [userRole, accessRights];
// }

/**
 *
 * @param time string time format
 * @param currentFormat converted default format given select any of one
 * @param parseFormat converted default format given select any of one
 * @returns string date / time format give
 */
export function convertParseDateTime(
  time: string | undefined,
  currentFormat:
    | 'hh:mm a'
    | 'hh:mma'
    | 'HH:mm'
    | 'yyyy-MM-dd'
    | 'yyyy/MM/dd'
    | "EEE, MMM do, yyyy 'at' h:mm a"
    | 'yyyy, MM, dd h:mm a'
    | 't'
    | `yyyy/MM/dd hh:mm a`
    | `yyyy, MM, dd hh:mm a`,
  parseFormat:
    | 'hh:mm a'
    | 'hh:mma'
    | 'HH:mm'
    | 'yyyy-MM-dd'
    | 'yyyy/MM/dd'
    | 'yyyy, MM, dd h:mm a'
    | "EEE, MMM do, yyyy 'at' h:mm a"
    | 't'
    | `yyyy, MM, dd hh:mm a`
    | `yyyy/MM/dd hh:mm a`
): string {
  if (!time) return '';
  return format(parse(time!, currentFormat, new Date()), parseFormat).replace(
    /-/g,
    '/'
  );
}

// /**
//  *
//  * @param time string time format
//  * @param currentFormat converted default format given select any of one
//  * @param parseFormat converted default format given select any of one
//  * * @param yesterday default will be available yesterday
//  * @returns string date / time format give
//  */
// export function activityParseDate(
//   time: string,
//   currentFormat: 't' | 'MMM dd' | 'MMM yyyy',
//   parseFormat: 't' | 'MMM dd' | 'MMM yyyy',
//   Yesterday: boolean = true
// ): string {
//   const yesterday = new Date();
//   yesterday.setDate(yesterday.getDate() - 1);

//   const covertCurrentDate = convertDateTimeFormat(
//     new Date().toString(),
//     'yyyy/MM/dd'
//   );
//   const covertYesterdayDate = convertDateTimeFormat(
//     yesterday.toString(),
//     'yyyy/MM/dd'
//   );
//   const convertServerDate = convertParseDateTime(time, 't', 'yyyy/MM/dd');

//   if (covertCurrentDate === convertServerDate) {
//     return 'Today';
//   } else if (covertYesterdayDate === convertServerDate && Yesterday) {
//     return 'YesterDay';
//   }
//   return format(parse(time, currentFormat, new Date()), parseFormat).replace(
//     /-/g,
//     '/'
//   );
// }
// /**
//  * @description It's reset form state with empty strin
//  * @param formGroup formgroup instance
//  */
// export function resetForm(formGroup: FormGroup, value: any = '') {
//   let control: AbstractControl;
//   formGroup.reset();
//   formGroup.markAsUntouched();
//   Object.keys(formGroup.controls).forEach((name) => {
//     control = formGroup.controls[name];
//     control.patchValue(value);
//     control.setErrors(null);
//   });
// }
// /**
//  *
//  * @param time string time format
//  * @param convertFormat converted default format given select any of one
//  * @returns string date / time format given
//  */
// export function convertDateTimeFormat(
//   time: string,
//   convertFormat:
//     | 'hh:mm a'
//     | 'HH:mm'
//     | 'yyyy-MM-dd'
//     | 'yyyy/MM/dd'
//     | "EEE, MMM do, yyyy 'at' h:mm a"
//     | 'yyyy, MM, dd h:mm a'
//     | 't'
//     | 'yyyy/MM/dd hh:mm a'
// ): string {
//   const convertStringToDate = new Date(time);
//   const getValidDate =
//     convertStringToDate.toString() === 'Invalid Date'
//       ? new Date(time.replace(/-/g, '/'))
//       : convertStringToDate;
//   return format(getValidDate, convertFormat);
// }

// /**
//  *
//  * @param startTime number
//  * @param endTime number
//  * @returns {object} {hours, minutes}
//  * @description this function takes start time and end time and returns the object.
//  */
// export function getTimeDifference(startTime: number, endTime: number) {
//   let delta = endTime - startTime;
//   if (delta < 0) return { days: 0, hours: 0, minutes: 0 };

//   let days = Math.floor(delta / 86400);
//   delta -= days * 86400;

//   let hours = Math.floor(delta / 3600);
//   delta -= hours * 3600;

//   let minutes = Math.floor(delta / 60);
//   delta -= minutes * 60;

//   return { days, hours, minutes };
// }

// /**
//  *
//  * @param data {string}
//  * @description remove selected special character and return string
//  * @returns string
//  */
// export function removeSpecialChar(data: string): string {
//   return data.replace(/[()-\s]/g, '');
// }
// /**
//  * @param data {string}
//  * @description function remove special character from the number and return number
//  */
// export function transformPhone(data: string) {
//   return data.replace(/[^+\d]+/g, '');
// }

// /**
//  * @param data {event}
//  * @param data {HTML Element}
//  * @description function remove the last character of specific input field when backspace pressed and set the selected range of input
//  */

// export function onEnterBackSpace(ev: any, phoneInput: ElementRef): void {
//   let startPosition = ev.target.selectionStart;

//   if (ev.key === config.KEYBOARD_KEY.BACKSPACE) {
//     if (startPosition >= 6) {
//       setTimeout(() => {
//         phoneInput.nativeElement.focus();
//         phoneInput.nativeElement.setSelectionRange(
//           startPosition - 1,
//           startPosition - 1
//         );
//       }, 100);
//     }
//   }
// }
