import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}


  ngOnInit(){
    // this.locale=window.location.pathname.split('/')[2];
    // this.language=this.languageList.find((f: { code: string | undefined; })=>f.code===this.locale).name;
  }

  goToLink(url: string){
    window.open(url, "_blank");
}
}
