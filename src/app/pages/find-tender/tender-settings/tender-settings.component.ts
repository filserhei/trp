import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tender-settings',
  templateUrl: './tender-settings.component.html',
  styleUrls: ['./tender-settings.component.scss']
})
export class TenderSettingsComponent implements OnInit {
  index = 0;
  tableData: any[] = [{name: 'New announcement', }]

  constructor() { }

  ngOnInit(): void {
  }

}
