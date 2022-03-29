import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunityRoutingModule } from './opportunity-routing.module';
import { OpportunitiesComponent } from './opportunities/opportunities.component';


@NgModule({
  declarations: [
    OpportunitiesComponent
  ],
  imports: [
    CommonModule,
    OpportunityRoutingModule
  ]
})
export class OpportunityModule { }
