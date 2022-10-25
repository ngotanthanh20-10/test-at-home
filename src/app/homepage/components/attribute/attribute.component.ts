import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AttributeItem, HomepageWidget } from '../../../model/homepage.model';
import { data } from '../../homepage-detail/data';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {
  @Output() onClickAddAttribute: EventEmitter<number> = new EventEmitter<number>();
  @Input() indexSection: number = 0
  @Input() attributeData: any
  @Input() homepageData: any

  validateAttributeForm!: FormGroup;
  isAddAttribute: boolean = false

  // homepageData = new HomepageWidget(data)

  handleCancel() {
    this.isAddAttribute = false
  }

  showAddAttribute() {
    this.isAddAttribute = true
  }

  handleAddAttribute(index: number) {
    let dataAttribute = new AttributeItem(this.validateAttributeForm.value);
    this.homepageData.addAttribute(dataAttribute, index)
    this.validateAttributeForm.value.key = ""
    this.validateAttributeForm.value.value = ""
    this.isAddAttribute = false;
  }
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.validateAttributeForm = this.fb.group({
      key: [null, [this.validateAttributeKey.bind(this)]],
      value: [null, [this.validateAttributeKey.bind(this)]]
    })
  }

  validateAttributeKey(control: FormControl) {
    const whiteSpace = /\s/;
    if (!control.value) {
      return { required: true };
    } else if (control.value.match(whiteSpace)) {
      return { whiteSpace: true }
    }
    // else if (this.mobileData.isDublicateAttributeKey(control.value)) {
    //   return { already: true }
    // }
    return {};
  }

}
