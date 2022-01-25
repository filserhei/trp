import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindTenderComponent} from "./find-tender.component";
import {TenderDetailsComponent} from "./tender-details/tender-details.component";
import {TenderTeamComponent} from "./tender-team/tender-team.component";


const routes: Routes = [
  {path: '', component: FindTenderComponent},
  {path: 'tender/details/:id', component: TenderDetailsComponent},
  {path: 'tender/details/:id/team', component: TenderTeamComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindTenderRoutingModule { }
