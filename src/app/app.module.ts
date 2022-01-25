import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CreateTenderComponent } from './pages/create-tender/create-tender.component';
import {NzTableModule} from "ng-zorro-antd/table";
import { FindTenderComponent } from './pages/find-tender/find-tender.component';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzAffixModule} from "ng-zorro-antd/affix";
import { StartPageComponent } from './pages/start-page/start-page.component';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzTypographyModule} from "ng-zorro-antd/typography";

import {FindTenderModule} from "./pages/find-tender/find-tender.module";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CreateTenderComponent,
    // FindTenderComponent,
    StartPageComponent,
  ],
  imports: [
    FindTenderModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzRadioModule,
    NzDropDownModule,
    NzIconModule,
    NzCheckboxModule,
    NzStepsModule,
    NzUploadModule,
    NzAffixModule,
    NzCardModule,
    NzTagModule,
    NzTypographyModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
