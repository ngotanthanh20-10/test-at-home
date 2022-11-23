import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() labelTitle: string = "Label title"
  @Input() placeholder: string = "Label title"
  @Input() validateForm!: FormGroup

  submitForm() {
    console.log("submit");
  }

  initForm() {
    this.validateForm = this.fb.group({
      data: [null, [this.dataValidate]]
    })
  }

  dataValidate(control: FormControl) {
    if (!control.value) {
      return {required: true}
    }
    return {}
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm()
  }

}
