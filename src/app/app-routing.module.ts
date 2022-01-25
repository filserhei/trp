import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {CreateTenderComponent} from "./pages/create-tender/create-tender.component";
import {StartPageComponent} from "./pages/start-page/start-page.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StartPageComponent },
  { path: 'create', loadChildren: () => import('./pages/create-tender/create-tender-routing.module').then(m => m.CreateTenderRoutingModule) },
  { path: 'find', loadChildren: () => import('./pages/find-tender/find-tender-routing.module').then(m => m.FindTenderRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
