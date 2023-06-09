import { Component, OnInit } from '@angular/core';
import { ComponentDetails } from './template-components.interface';
import { components } from './template-components.model';

@Component({
  selector: 'app-template-components',
  templateUrl: './template-components.component.html',
  styleUrls: ['./template-components.component.scss'],
})
export class TemplateComponentsComponent implements OnInit {
  components: ComponentDetails[] = components;
  constructor() {}

  ngOnInit(): void {}
}
