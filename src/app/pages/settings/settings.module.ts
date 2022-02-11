import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import {SettingsRoutingModule} from "./settings-routing.module";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {FindTenderModule} from "../find-tender/find-tender.module";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzSwitchModule} from "ng-zorro-antd/switch";



@NgModule({
  declarations: [
    CompanySettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NzTabsModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    FindTenderModule,
    NzSelectModule,
    NzTableModule,
    NzCardModule,
    NzSwitchModule
  ]
})
export class SettingsModule { }
