import { Component, OnInit } from '@angular/core';
import { AppService} from '../app.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

counter:number;
postResponse:string;
businessID = 1;

  constructor(private app$:AppService,private router: Router) {
    this.app$.getAllJobs()
    .subscribe(
      result => {
        this.counter = result.length;
      },
      () => {},
      () => {}
    )
     
   }

  ngOnInit() {
    
  }

  submitForm(form: any): void{
    
    console.log(form);
    console.log("Counter: " + this.counter);
    
    this.app$.postJob(this.counter, this.businessID,form.title,form.description,form.companyName,form.location,form.phoneNo,form.salary,form.startDate,form.endDate,true)
    .subscribe(result => {
      this.postResponse = JSON.stringify(result),
      err => console.log("Error HTTP Post Service"),
      () => console.log("Data has been posted"),
      console.log(this.postResponse);
    });

    this.router.navigate(['dashboard']);
    }
  }



