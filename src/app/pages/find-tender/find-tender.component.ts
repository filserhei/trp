import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

interface Tender {
  title: 'Tender Title',
  id: number,
  status: string,
  transportMode: 'Air',
  tenderOwner: 'KJH',
  businessOwner: 'LJHJG',
  created: '10.10.2010',
  launched: '10.11.2010',
  deadline: '30.03.2040',
  customer: 'Vano',
  customerDeadline : '30.04.2060'
};

@Component({
  selector: 'app-find-tender',
  templateUrl: './find-tender.component.html',
  styleUrls: ['./find-tender.component.scss']
})
export class FindTenderComponent implements OnInit {
  allTenders: Tender[] = [];
  filteredTenders: Tender[] = [];
  tender: Tender = {
    title: 'Tender Title',
    id: 44854,
    status: 'Active',
    transportMode: 'Air',
    tenderOwner: 'KJH',
    businessOwner: 'LJHJG',
    created: '10.10.2010',
    launched: '10.11.2010',
    deadline: '30.03.2040',
    customer: 'Vano',
    customerDeadline : '30.04.2060'
  };
  statuses: string[] = ['Draft', 'Template', 'Open', 'Archived', 'Past deadline', 'Finished', 'Cancelled'];
  filtersVisible = false;
  showFields: {[key: string]: boolean} = {
    transportMode: true,
    businessOwner: true,
    created: true,
    launched: true
  };
  filterStatuses: string[] = [];

  constructor(private router: Router ) { }

  ngOnInit(): void {
    for (let i = 0; i < 24; i++) {
      const tender: Tender = { ...this.tender };
      tender.status = this.statuses[i % this.statuses.length];
      this.allTenders.push(tender);
    }
    this.filterTenders();
  }

  goToTenderDetails(tenderId: number): void {
    this.router.navigate(['/find/tender/details/' + tenderId]);
  }


  filterTenders(): void {
    this.filteredTenders = this.filterStatuses.length ? this.allTenders.filter(tender => this.filterStatuses.includes(tender.status)) : this.allTenders;
  }
}
