import {Component, OnInit} from '@angular/core';
import {ViewService} from "./pages/services/view.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  constructor(public viewService: ViewService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  isTenderDetailsView(): boolean {
    return !!this.router.url && this.router.url.includes('tender/details');
  }
}
