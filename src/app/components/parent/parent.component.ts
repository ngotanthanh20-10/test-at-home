import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  data = [
    { name: "abc", age: 20 },
    { name: "abcd", age: 230 },
    { name: "abcèwefas", age: 2350 },
    { name: "abcádasfasvasvsavasv", age: 23570 },
  ]

  getData(event: any) {
    console.log(event);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
