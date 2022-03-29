import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OpportunitiesComponent} from "./opportunities/opportunities.component";

const routes: Routes = [{
  path: '', component: OpportunitiesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunityRoutingModule { }
