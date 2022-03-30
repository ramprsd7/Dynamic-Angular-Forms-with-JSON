import { Component, Input, OnInit, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}

interface JsonArrayItemOption {
  value: string,
  text: string
}

interface JsonFormControls {
  order: number;
  label: string;
  key: string;
  type: string;
  items?: [],
  isReadonly: boolean;
  isRequired: boolean;
  unit?: string;
}

export interface JsonFormData {
  fields: JsonFormControls[];
}

@Component({
  selector: 'app-dynamic-json-schema',
  templateUrl: './dynamic-json-schema.component.html',
  styleUrls: ['./dynamic-json-schema.component.css']
})
export class DynamicJsonSchemaComponent implements OnInit {

  @Input()
  jsonFormData!: JsonFormData;

  firstChange: boolean = false;

  public myForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder) { }

  /**
   * 
   * @param changes on selection value change of Data automaticall DOM is changes
   */
  ngOnChanges(changes: SimpleChanges) {
    this.myForm.controls = {};
    if (!changes['jsonFormData'].firstChange) {
      this.firstChange = true;
      this.jsonFormData.fields.sort((a, b) => {
        return a.order - b.order;
      });
      this.createForm(this.jsonFormData.fields);
    }
  }

  ngOnInit(): void {
    console.log(this.myForm);
  }

  /**
   * 
   * @param controls controls need to be created for forms
   */
  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      console.log(control);
      this.myForm.addControl(
        control.key,
        this.fb.control('')
      );
    }
  }

  //On Submit prints value of forms in console
  onSubmit() {
    console.log(this.myForm.valid);
    console.log(this.myForm.value);
    console.log(this.myForm);
  }

}
