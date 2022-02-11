import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTenderRoutingModule } from './create-tender-routing.module';
import {CreateTenderComponent} from "./create-tender.component";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzTableModule} from "ng-zorro-antd/table";


@NgModule({
  declarations: [
    CreateTenderComponent
  ],
  imports: [
    CommonModule,
    CreateTenderRoutingModule,
    NzStepsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzUploadModule,
    NzTableModule
  ]
})
export class CreateTenderModule { }
