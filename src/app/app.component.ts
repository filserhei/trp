import {Component, OnInit} from '@angular/core';
import {ViewService} from "./pages/services/view.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  constructor(public viewService: ViewService) {
  }

  ngOnInit(): void {
  }
}
