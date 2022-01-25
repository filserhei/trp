import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateTenderComponent} from "./create-tender.component";

const routes: Routes = [
  {path: '', component: CreateTenderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTenderRoutingModule { }
