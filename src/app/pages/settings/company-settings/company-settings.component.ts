import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NzButtonComponent} from "ng-zorro-antd/button";
import {TeamMember} from "../../find-tender/tender-team/tender-team.component";

export interface Participant {
  email: string,
  companyName: string,
  login: string,
  name: string
}

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class CompanySettingsComponent implements OnInit {
  tabIndex = 0;
  members: TeamMember[] = [];
  participants: Participant[] = [];
  periods: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 17; i++) {
      this.members.push({
        firstName: 'Ibragim',
        lastName: 'Mamaev',
        email: 'vava@aa.ua',
        role: 'vavasl',
        isUnblocked: !!(i % 2)
      });
      this.participants.push({
        name: 'Akakiy Bodunovich',
        email: 'dorogo@suka.ua',
        companyName: 'Sharashkina company',
        login: 'Ebun_gora'
      });

      if (i < 10) {
        this.periods.push(i);
      }
    }
  }

}
