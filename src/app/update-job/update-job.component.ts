import { Component, OnInit } from '@angular/core';
import { AppService} from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  constructor(private app$:AppService, private router:Router) { }

  ngOnInit() {
  }

  //Need to figure out how to pass the jobID that is being updated into this function
  submimtUpdateForm(form:any, jobID:number){
   // console.log(form);
    jobID = 1;
    this.app$.updateJob(jobID,form.title,form.description,form.companyName,form.city,form.address,form.zipcode,form.salary)
    this.router.navigate(['dashboard']);
  }

}
