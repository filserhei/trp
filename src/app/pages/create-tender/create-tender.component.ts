import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.fakeData.push(this.columns);
    }
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
}
