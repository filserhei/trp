import { Component, OnInit } from '@angular/core';

export interface TeamMember {
  firstName: string,
  lastName: string,
  email: string,
  role: string,
  isUnblocked: boolean
}

@Component({
  selector: 'app-tender-team',
  templateUrl: './tender-team.component.html',
  styleUrls: ['./tender-team.component.scss']
})
export class TenderTeamComponent implements OnInit {
  member: TeamMember = {
    firstName: 'Ibragim',
    lastName: 'Mamaev',
    email: 'vava@aa.ua',
    role: 'vavasl',
    isUnblocked: true
  };
  managers: TeamMember[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 7; i++) {
      this.managers.push(this.member);
    }
  }

}
