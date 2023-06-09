import { Component, Input } from '@angular/core';
import { ComponentDetails } from 'src/app/template-components/template-components.interface';


@Component({
  selector: 'app-component-card',
  templateUrl: './component-card.component.html',
  styleUrls: ['./component-card.component.scss']
})
export class ComponentCardComponent {
  @Input() components!: ComponentDetails[];

}
