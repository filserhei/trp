import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartPageComponent} from "./pages/start-page/start-page.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StartPageComponent },
  { path: 'create', loadChildren: () => import('./pages/create-tender/create-tender.module').then(m => m.CreateTenderModule) },
  { path: 'find', loadChildren: () => import('./pages/find-tender/find-tender.module').then(m => m.FindTenderModule) },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
