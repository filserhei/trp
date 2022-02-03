import { Component, OnInit } from '@angular/core';
import {ViewService} from "../../services/view.service";

interface Tender {
  title: string,
  salesResponsible: string,
  internalDeadline: Date,
  customerDeadline: Date,
  launchDate: Date,
  customer: string,
  industry: string,
  currency: string
}

@Component({
  selector: 'app-tender-details',
  templateUrl: './tender-details.component.html',
  styleUrls: ['./tender-details.component.scss']
})
export class TenderDetailsComponent implements OnInit {
  tender: Tender = {
    title: 'asldkgfds' ,
    salesResponsible: 'Tom Jerry',
    internalDeadline: new Date('11.11.2222'),
    customerDeadline: new Date('11.11.2222'),
    launchDate: new Date('11.11.2222'),
    customer: 'Dasldk',
    industry: 'ssd',
    currency: 'USA'
  };
  salesResponsibleIsEditing: boolean = false;
  newSalesResponsible: string = this.tender.salesResponsible;

  title = 'Title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, magnam.';
  titleIsEditing = false;
  newTitle = this.title;


  constructor(public viewService: ViewService) { }

  ngOnInit(): void {
    this.viewService.tenderDetailsView = true;
  }

  changeSalesResponsible(): void {
    this.tender.salesResponsible = this.newSalesResponsible;
    this.salesResponsibleIsEditing = false;
  }

  cancel() {
    this.newSalesResponsible = this.tender.salesResponsible;
    this.salesResponsibleIsEditing = false;
  }
}
