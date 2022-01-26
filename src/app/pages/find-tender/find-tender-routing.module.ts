import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindTenderComponent} from "./find-tender.component";
import {TenderDetailsComponent} from "./tender-details/tender-details.component";
import {TenderTeamComponent} from "./tender-team/tender-team.component";
import {QuotationsComponent} from "./quotations/quotations.component";


const routes: Routes = [
  {path: 'find', component: FindTenderComponent},
  {path: 'tender/details/:id', component: TenderDetailsComponent},
  {path: 'tender/details/:id/team', component: TenderTeamComponent},
  {path: 'tender/details/:id/quotations', component: QuotationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindTenderRoutingModule { }
