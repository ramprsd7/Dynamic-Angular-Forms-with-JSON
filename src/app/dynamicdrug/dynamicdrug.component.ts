import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const drug1Json = {
  "fields": [
    {
      "label": "Date of Birth (YYYY-MM-DD)",
      "key": "birthday",
      "isRequired": true,
      "order": 1,
      "isReadonly": false,
      "type": "date"
    },
    {
      "label": "Gestational Age",
      "key": "gestationalAge",
      "isRequired": true,
      "order": 3,
      "unit": "weeks",
      "isReadonly": false,
      "type": "number"
    },
    {
      "label": "Sex",
      "items": [
        {
          "value": "male",
          "text": "Male"
        },
        {
          "value": "female",
          "text": "Female"
        }
      ],
      "key": "sex",
      "isRequired": true,
      "order": 4,
      "isReadonly": false,
      "type": "dropdown"
    },
    {
      "label": "Height",
      "key": "height",
      "isRequired": true,
      "order": 5,
      "unit": "cm",
      "isReadonly": false,
      "type": "number"
    },
    {
      "label": "Weight",
      "key": "weight",
      "isRequired": true,
      "order": 6,
      "unit": "kg",
      "isReadonly": false,
      "type": "number"
    },
    {
      "label": "BMI",
      "key": "bmi",
      "order": 11,
      "unit": "kg/m²",
      "isReadonly": true,
      "type": "number"
    }
  ]
};

const drug2Json = {
  "fields": [
    {
      "label": "Date of Birth (YYYY-MM-DD)",
      "key": "birthday",
      "isRequired": true,
      "order": 1,
      "isReadonly": false,
      "type": "date"
    },
    {
      "label": "Sex",
      "items": [
        {
          "value": "male",
          "text": "Male"
        },
        {
          "value": "female",
          "text": "Female"
        }
      ],
      "key": "sex",
      "isRequired": true,
      "order": 2,
      "isReadonly": false,
      "type": "dropdown"
    },
    {
      "label": "Weight",
      "key": "weight",
      "isRequired": true,
      "order": 3,
      "unit": "kg",
      "isReadonly": false,
      "type": "number"
    }
  ]
};

@Component({
  selector: 'app-dynamicdrug',
  templateUrl: './dynamicdrug.component.html',
  styleUrls: ['./dynamicdrug.component.css']
})

export class DynamicdrugComponent implements OnInit {

  selectedValue: any;

  // Dropdown List
  listOfDrug = [
    { 'value': drug1Json, name: 'Drug 1' },
    { 'value': drug2Json, name: 'Drug 2' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
