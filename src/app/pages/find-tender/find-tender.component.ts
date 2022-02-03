import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-find-tender',
  templateUrl: './find-tender.component.html',
  styleUrls: ['./find-tender.component.scss']
})
export class FindTenderComponent implements OnInit {
  tenders: any = [];
  tender = {
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
  statuses: string[] = ['Any status', 'Draft', 'Template', 'Open', 'Archived', 'Any status', 'Past deadline', 'Finished', 'Cancelled'];
  filtersVisible = false;
  showFields: {[key: string]: boolean} = {
    transportMode: true,
    businessOwner: true,
    created: true,
    launched: true
  };

  constructor(private router: Router ) { }

  ngOnInit(): void {
    for (let i = 0; i < 24; i++) {
      const tender = { ...this.tender };
      tender.status = this.statuses[i % this.statuses.length];
      this.tenders.push(tender);
    }

  }

  goToTenderDetails(tenderId: string): void {
    this.router.navigate(['/find/tender/details/' + tenderId]);
  }



}
