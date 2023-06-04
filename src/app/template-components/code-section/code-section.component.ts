import { Component, Input } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-code-section',
  templateUrl: './code-section.component.html',
  styleUrls: ['./code-section.component.scss']
})
export class CodeSectionComponent {

  @Input() theme = 'vs-dark';

  @Input() codeModel: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: '{}'
  };

  @Input() options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };

}
