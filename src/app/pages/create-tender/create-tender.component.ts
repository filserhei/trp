import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-tender',
  templateUrl: './create-tender.component.html',
  styleUrls: ['./create-tender.component.scss']
})
export class CreateTenderComponent implements OnInit {
  stepIndex = 0;
  columns: string[] = [
    'Origin country', 'Origin city', 'Origin postal code', 'Destination country',
    'Destination city', 'Destination postal code', 'Transport mode', 'Equipment type',
    'Incoterms', 'Dangerous goods', 'Temperature controlled', 'Volume(kg, pound)', 'Rate'
  ];
  fakeData: string[][] = [];
  tenderForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required], []),
    customer: new FormControl('', [Validators.required], []),
    salesResponsible: new FormControl('', [Validators.required], []),
    reportingCurrency: new FormControl('', [Validators.required], []),
    industry: new FormControl('', [Validators.required], []),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.fakeData.push(this.columns);
    }
    this.tenderForm = this.fb.group({
      title: this.fb.control('ll', [Validators.required])
    });
  }

  pre(): void {
    if (this.stepIndex > 0) {
      this.stepIndex--;
    }
  }

  next() {
    if (this.stepIndex < 7) {
      this.stepIndex++;
    }
  }

  getStepStatus(number: number): string {
    return 'wait';
  }
}
