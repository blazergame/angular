import { Component, OnInit } from '@angular/core';
import { AppService} from '../app.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

counter:number;
postResponse:string;

  constructor(public app$:AppService) {
    this.counter = 0;
     
   }

  ngOnInit() {
  
  }

  submitForm(form: any): void{
    
    console.log(form);
    // console.log(form.title);
    // console.log(form.description);
    // console.log(form.companyName);
    // console.log(form.location);
    // console.log(form.phoneNo);
    // console.log(form.salary);
    // console.log(form.startDate);
    // console.log(form.endDate);
    this.counter++;
    
    this.app$.postJob(this.counter,form.title,form.description,form.companyName,form.location,form.phoneNo,form.salary,form.startDate,form.endDate,true)
    .subscribe(result => {
      this.postResponse = JSON.stringify(result),
      err => console.log("Error HTTP Post Service"),
      () => console.log("Data has been posted"),
      console.log(this.postResponse);
    });


    }
  }



