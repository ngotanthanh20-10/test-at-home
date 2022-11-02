import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'loy-from-to-number',
  templateUrl: './from-to-number.component.html'
})
export class FromToNumberComponent implements OnInit {
  @Output() fromToNumberData: EventEmitter<any> = new EventEmitter();

  @Input() orderForm!: FormGroup;
  @Input() titleField: string = "FROM_TO_NUMBER";
  @Input() fromPlaceHolder: string = "FROM_NUMBER";
  @Input() toPlaceHolder: string = "TO_NUMBER";
  @Input() step: number = 1
  @Input() limitValue: { min: number, max: number } = { min: -100000000, max: 100000000 }
  @Input() equal: boolean = true;
  @Input() required: boolean = true;
  @Input() disable: boolean = false;


  TYPE_FROM_NUMBER: string = "fromNumber";
  TYPE_TO_NUMBER: string = "toNumber";


  submitForm() {
    const data = {
      fromNumber: this.orderForm.controls['fromNumber'].value,
      toNumber: this.orderForm.controls['toNumber'].value
    }
    this.fromToNumberData.emit(data)
    console.log(this.orderForm.controls['fromNumber'].value, this.orderForm.controls['toNumber'].value);
  }

  setInitValue(data: any) {
    this.orderForm = this.fb.group({
      fromNumber: [null, [this.validateForm]],
      toNumber: [null, [this.validateForm]]
    })
  }

  validateForm(control: FormControl): { [key: string]: any } | null {
    if (control.value && this.required) {
      return { 'required': true };
    }
    return {};
  }


  onChangeFromNumber(event: number) {
    let from = this.orderForm.controls['fromNumber'].value
    let to = this.orderForm.controls['toNumber'].value
    if (from && to) {
      if (event > to || (!this.equal && event >= to)) {
        this.orderForm.controls['toNumber'].setValue(null)
      }
    }
    this.submitForm()
    // this.getValue("from")
  }

  onChangeToNumber(event: number) {
    let from = this.orderForm.controls['fromNumber'].value
    let to = this.orderForm.controls['toNumber'].value
    if (from && to) {
      if (event < from || (!this.equal && event <= from)) {
        this.orderForm.controls['fromNumber'].setValue(null)
      }
    }
    this.submitForm()
    // this.getValue("to")
  }

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.setInitValue(this.orderForm)
  }
}