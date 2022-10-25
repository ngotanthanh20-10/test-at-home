import { Component, Input, OnInit } from '@angular/core';
import { HomepageWidget } from 'src/app/model/homepage.model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  @Input() homepageData: any
  constructor() { }

  handleAddAttibute(event: any) {
    console.log(event);
  }

  ngOnInit() {
    console.log(this.homepageData);

  }

}
