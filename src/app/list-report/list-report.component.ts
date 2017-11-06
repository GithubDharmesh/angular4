import { Component, OnInit } from '@angular/core';
import { ReportsService } from "../reports.service";
import { Report } from "../reports";
// import the service we defined to get date.

@Component({
  selector: 'app-list-report',
  templateUrl: './list-report.component.html',
  styleUrls: ['./list-report.component.css']
})
export class ListReportComponent implements OnInit {
//inject the service components in the list reports comp
  constructor(private reportService:ReportsService) { 
    
  }
// define properties you will use like report
reportProperty:Report[];
selectedReport:Report;
  ngOnInit() {
    //console.log(this.reportService.reports)
   // this.reportProperty=this.reportService.getReports();
   this.getReports();
   
  }
  getReports():void
  {
    //below call to getreports method of the service which returns a promise.
    //console.log(this.reportProperty);
    //return this.reportService.getReports().then(Report=>this.reportProperty);
     this.reportProperty=this.reportService.getReports();
  }
  onSelect(parmReport:Report):void{
    this.selectedReport=parmReport;
  }

}
