import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindTenderComponent} from "./find-tender.component";
import {TenderDetailsComponent} from "./tender-details/tender-details.component";
import {TenderTeamComponent} from "./tender-team/tender-team.component";
import {QuotationsComponent} from "./quotations/quotations.component";
import {TenderDataComponent} from "./tender-data/tender-data.component";
import {TenderProgressComponent} from "./tender-progress/tender-progress.component";
import {TenderSettingsComponent} from "./tender-settings/tender-settings.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CommunicationsComponent} from "./communications/communications.component";
import {QaComponent} from "./qa/qa.component";
import {TendersResolver} from "../resolvers/tenders.resolver";


const routes: Routes = [
  {path: '', component: FindTenderComponent, resolve: { tenders: TendersResolver}},
  {path: 'tender/details/:id', component: TenderDetailsComponent},
  {path: 'tender/details/:id/team', component: TenderTeamComponent},
  {path: 'tender/details/:id/quotations', component: QuotationsComponent},
  {path: 'tender/details/:id/data', component: TenderDataComponent},
  {path: 'tender/details/:id/progress', component: TenderProgressComponent},
  {path: 'tender/details/:id/settings', component: TenderSettingsComponent},
  {path: 'tender/details/:id/dashboards', component: DashboardComponent},
  {path: 'tender/details/:id/communication', component: CommunicationsComponent},
  {path: 'tender/details/:id/qa', component: QaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindTenderRoutingModule { }
