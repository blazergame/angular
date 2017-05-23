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

  constructor(private app$:AppService,private router: Router) {
    this.counter = 0;
     
   }

  ngOnInit() {
  
  }

  submitForm(form: any): void{
    
    console.log(form);

    this.counter++;
    
    this.app$.postJob(this.counter,form.title,form.description,form.companyName,form.location,form.phoneNo,form.salary,form.startDate,form.endDate,true)
    .subscribe(result => {
      this.postResponse = JSON.stringify(result),
      err => console.log("Error HTTP Post Service"),
      () => console.log("Data has been posted"),
      console.log(this.postResponse);
    });

    this.router.navigate(['./dashboard']);
    }
  }



