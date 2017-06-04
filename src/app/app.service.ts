import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  host:string = 'http://localhost:3000';
  userId:string = "";
  body:any;
  options:any;
  counter:number;

  constructor(private http: Http) { 
  }


getAllJobs() {
    return this.http.get( this.host + '/api/jobs')
    .map(response => response.json());
  }

getOneJob(jobID:string){
    return this.http.get(this.host + '/api/jobs/' + jobID)
      .map(response => response.json());
}

  postJob(_jobID:number,_businessID:number,_title:string,_description:string,_companyName:string,
          _city:string,_phoneNo:string,_salary:string,_startDate:string,_endDate:string,_availability:boolean)
    {
    
    this.body = {
      "jobID":_jobID,
      "businessID":_businessID,
      "title":_title,
      "description":_description,
      "companyName":_companyName,
      "city":_city,
      "phoneNo":_phoneNo,
      "salary":_salary,
      "startDate":_startDate,
      "endDate":_endDate,
      "availability":_availability
    };

    console.log(this.body);
     this.options = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
     return this.http.post(this.host + '/api/jobs', this.body, this.options)
      .map(res=>res.json());     
    }



}

