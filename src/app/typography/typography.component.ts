import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  inputForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.inputForm = this.fb.group({
      country: ['Syria', Validators.required]
    })
  }

  getQuery() {
    const countryVal = this.inputForm.value.country;
    window.open("localhost:5000/get-file?" + "country=" + countryVal)
  }

}
