import { Input, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService} from '../../../app.service';
import IJobModel from '../../../interface/IJobModel';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})

export class JobDetailComponent implements OnInit {
  jobID: string;
  jobInfo: IJobModel;

  constructor(private route: ActivatedRoute, private app$: AppService, private router: Router) {
    this.jobID = this.route.snapshot.params['id'];
    this.app$.getOneJob(this.jobID)
    .subscribe(
      result => {
        this.jobInfo = result;
      },
      () => {},
      () => {}
    );
   }


  ngOnInit() {
  }

  applyJob(){
    //Need to write this
  }

  saveJob(){
    //Need to write this
  }

  updateJob(){
    //this.app$.updateJob(_jobID,_title,_description,_company,_city,_address,_zipcode,_salary);
    this.router.navigate(['updatejob']);
  }

  deleteJob(_jobID:number){
    this.app$.deleteJob(_jobID);
    this.router.navigate(['dashboard']);
  }
}
