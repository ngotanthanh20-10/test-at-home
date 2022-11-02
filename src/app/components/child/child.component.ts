import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {
  @Output() change = new EventEmitter()
  @Input() data: any[] = []
  constructor() { }

  outputData(data: any) {
    this.change.emit(data)
  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
