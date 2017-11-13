import { Component, OnInit ,Input } from '@angular/core';
import { Report } from "../reports";

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {
  @Input() selectedReport: Report;
  constructor() { }

  ngOnInit() {
  }

}
