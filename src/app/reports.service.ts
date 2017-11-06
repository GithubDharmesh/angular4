import { Injectable } from '@angular/core';
import { Report } from "./reports"; //class for storing report objects
import { REPORTS } from "./mock-reports";// mock stub till we connect with backend/sp
@Injectable()
export class ReportsService {

  constructor() { }
  /*just a array of reports entity in future this will be gettting from SP */
  //reports=['internal report','external report','some data']
 //method to return data from external services*/ 
//getReports():Promise<Report[]>{
  //return Promise.resolve(REPORTS);
//}
getReports():Report[]
{
  return REPORTS;
}

}
