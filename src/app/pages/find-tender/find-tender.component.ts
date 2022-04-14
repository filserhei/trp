import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

export interface Tender {
  title: string,
  id: number,
  status: string,
  transportMode: string,
  tenderOwner: string,
  businessOwner: string,
  created: string,
  launched: string,
  deadline: string,
  customer: string,
  customerDeadline : string
};

@Component({
  selector: 'app-find-tender',
  templateUrl: './find-tender.component.html',
  styleUrls: ['./find-tender.component.scss']
})
export class FindTenderComponent implements OnInit {
  allTenders: Tender[] = [];
  filteredTenders: Tender[] = [];
  statuses: string[] = ['Draft', 'Template', 'Open', 'Archived', 'Past deadline', 'Finished', 'Cancelled'];
  filtersVisible = false;
  showFields: {[key: string]: boolean} = {
    transportMode: true,
    businessOwner: true,
    created: true,
    launched: true
  };
  filterStatuses: string[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.allTenders = data['tenders'];
      this.filterTenders();
    });
  }

  goToTenderDetails(tenderId: number): void {
    this.router.navigate(['/find/tender/details/' + tenderId]);
  }

  filterTenders(): void {
    this.filteredTenders = this.filterStatuses.length ? this.allTenders.filter(tender => this.filterStatuses.includes(tender.status)) : this.allTenders;
  }
}
