import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  tenders: any[] = [];
  notifications: any[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.tenders.push({
        title: 'Tender title',
        startDate: new Date('02.02.2020'),
        participants: 123,
        deadline: new Date('02.02.2020'),
        stage: 'STAGE'
      });
      this.notifications.push({
        title: 'Critical notifications',
        content: 'sld as;ldgh asldkfg as;ldgf saldkfjads;lf  dsfdfsa'
      });
    }
  }

}
