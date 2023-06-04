import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-component-renderer',
  templateUrl: './component-renderer.component.html',
  styleUrls: ['./component-renderer.component.scss']
})
export class ComponentRendererComponent {
  componentId : string='';

  constructor( public route: ActivatedRoute){
    this.route.params.subscribe((params: Params)=>{
      console.log(params)
      this.componentId= params?.['id']
    })
  }

}
