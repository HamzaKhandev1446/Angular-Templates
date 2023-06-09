import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'app-tab',
  templateUrl: './app-tab.component.html',
  styleUrls: ['./app-tab.component.scss'],
})
export class AppTabComponent {
  @Input() contents!: any[];
  @Input() headings!: any[];
  @Input() theme = 'vs-dark';
  @Input() readOnly!: boolean;
  @Output() selectedTabChange: EventEmitter<MatTabChangeEvent> =
    new EventEmitter<MatTabChangeEvent>();

  @Input() codeModel: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: '{}',
  };

  @Input() options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  onTabChange(event: MatTabChangeEvent): void {
    this.selectedTabChange.emit(event);
  }
}
