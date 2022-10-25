import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @Input() homepageData: any

  lang = [
    { language: "vi" },
    { language: "en" },
  ]

  langSelect: string = "vi"

  

  constructor() { }

  ngOnInit() {
    console.log(this);
  }

}
