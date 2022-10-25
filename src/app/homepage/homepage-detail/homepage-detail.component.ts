import { Component, OnInit } from '@angular/core';
import { HomepageWidget } from 'src/app/model/homepage.model';
import { data } from './data';

@Component({
  selector: 'app-homepage-detail',
  templateUrl: './homepage-detail.component.html',
  styleUrls: ['./homepage-detail.component.scss']
})
export class HomepageDetailComponent implements OnInit {
  homepageData = new HomepageWidget(data)
  constructor() { }

  ngOnInit() {
  }

}
