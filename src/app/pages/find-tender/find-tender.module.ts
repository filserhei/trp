import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindTenderRoutingModule } from './find-tender-routing.module';
import {FindTenderComponent} from "./find-tender.component";

import {NzButtonModule} from "ng-zorro-antd/button";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzCardModule} from "ng-zorro-antd/card";
import { TenderDetailsComponent } from './tender-details/tender-details.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import { TenderTeamComponent } from './tender-team/tender-team.component';
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import { TeamMemberCardComponent } from './tender-team/team-member-card/team-member-card.component';
import { QuotationsComponent } from './quotations/quotations.component';
import {NzDividerModule} from "ng-zorro-antd/divider";
import { TenderDataComponent } from './tender-data/tender-data.component';
import { TenderProgressComponent } from './tender-progress/tender-progress.component';
import { TenderSettingsComponent } from './tender-settings/tender-settings.component';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommunicationsComponent } from './communications/communications.component';
import { QaComponent } from './qa/qa.component';




@NgModule({
    declarations: [
        FindTenderComponent,
        TenderDetailsComponent,
        TenderTeamComponent,
        TeamMemberCardComponent,
        QuotationsComponent,
        TenderDataComponent,
        TenderProgressComponent,
        TenderSettingsComponent,
        DashboardComponent,
        CommunicationsComponent,
        QaComponent,

    ],
    exports: [
        TeamMemberCardComponent
    ],
    imports: [
        CommonModule,
        FindTenderRoutingModule,
        NzButtonModule,
        NzGridModule,
        NzSelectModule,
        NzDropDownModule,
        NzCheckboxModule,
        FormsModule,
        NzTableModule,
        NzCardModule,
        NzInputModule,
        NzIconModule,
        NzToolTipModule,
        NzDatePickerModule,
        NzLayoutModule,
        NzAvatarModule,
        NzSwitchModule,
        NzDividerModule,
        NzTabsModule,
        ReactiveFormsModule
    ]
})
export class FindTenderModule { }
