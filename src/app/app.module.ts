import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from "angular-font-awesome/angular-font-awesome"

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListReportComponent } from './list-report/list-report.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportsService } from "./reports.service";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListReportComponent,
    ReportDetailsComponent
  
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      {path:'ListReport',component:ListReportComponent},
      {path:'ReportDetail',component:ReportDetailsComponent},
      {path:'Home',component:HomeComponent}
    ])
  ],
  providers: [ReportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
