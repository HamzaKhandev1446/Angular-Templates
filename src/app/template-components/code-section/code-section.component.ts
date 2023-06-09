import { Component, Input, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-code-section',
  templateUrl: './code-section.component.html',
  styleUrls: ['./code-section.component.scss'],
})
export class CodeSectionComponent implements OnInit {
  @Input() theme = 'vs-dark';
  @Input() readOnly!: boolean;
  selectedCodeModel: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: '{}',
  };

  @Input() codeModel: CodeModel[] = [
    {
      language: 'json',
      uri: 'main.json',
      value: '{}',
    },
  ];

  @Input() options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };
  contents!: string[];

  ngOnInit(): void {
    this.selectedCodeModel = this.codeModel[0];
    this.contents = this.codeModel.map((code: any) => {
      return code.uri;
    });
  }
  selectedTabChange(event: MatTabChangeEvent) {
    this.selectedCodeModel = this.codeModel[event?.index];
    console.log(event);
  }
}
