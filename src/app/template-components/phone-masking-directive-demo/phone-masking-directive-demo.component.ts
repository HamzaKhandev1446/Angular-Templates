import { Component } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { PhoneMaskPipeModel } from '../models/phonemaskingpipe.model';

@Component({
  selector: 'app-phone-masking-directive-demo',
  templateUrl: './phone-masking-directive-demo.component.html',
  styleUrls: ['./phone-masking-directive-demo.component.scss'],
})
export class PhoneMaskingDirectiveDemoComponent {
  number: string = '971582623214';
  codeModel: CodeModel[] = PhoneMaskPipeModel;
}
