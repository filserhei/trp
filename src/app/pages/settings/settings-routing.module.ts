import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanySettingsComponent} from "./company-settings/company-settings.component";
import {PortsComponent} from "./ports/ports.component";

const routes: Routes = [
  {path: '', component: CompanySettingsComponent},
  {path: 'ports', component: PortsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
