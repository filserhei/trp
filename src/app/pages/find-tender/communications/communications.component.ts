import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.scss']
})
export class CommunicationsComponent implements OnInit {
  announcements: string[] = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque beatae delectus dignissimos eligendi\n' +
  '  exercitationem laboriosam neque officiis omnis, perferendis, sint tenetur totam voluptate!', 'Lorem ipsum dolor sit amet.\n',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi, architecto aut consectetur consequuntur corporis\n' +
  '  deserunt dolorem ea eligendi exercitationem fugiat illo illum incidunt, modi mollitia natus necessitatibus neque non\n' +
  '  optio placeat quam quis ratione sapiente sed tempora, temporibus tenetur voluptatibus! Atque dicta ducimus fugiat\n' +
  '  harum nemo ratione repellat, similique.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi, architecto aut consectetur consequuntur corporis\n' +
    '  deserunt dolorem ea eligendi exercitationem fugiat illo illum incidunt, modi mollitia natus necessitatibus neque non\n' +
    '  optio placeat quam quis ratione sapiente sed tempora, temporibus tenetur voluptatibus! Atque dicta ducimus fugiat\n' +
    '  harum nemo ratione repellat, similique.'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
