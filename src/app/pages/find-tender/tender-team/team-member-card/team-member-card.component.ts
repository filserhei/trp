import {Component, Input, OnInit} from '@angular/core';
import {TeamMember} from "../tender-team.component";

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss']
})
export class TeamMemberCardComponent implements OnInit {
  @Input()member: TeamMember = {} as TeamMember;

  constructor() { }

  ngOnInit(): void {
  }

}
