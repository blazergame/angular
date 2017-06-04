import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AppService} from '../app.service';
import IJobModel from '../interface/IJobModel';

@Component({
  selector: 'app-jobinfo',
  templateUrl: './jobinfo.component.html',
  styleUrls: ['./jobinfo.component.css']
})
export class JobinfoComponent implements OnInit {

  jobList: IJobModel[];

  constructor(    
    private route: ActivatedRoute,
    private location: Location,
    private app$: AppService) { 

      app$.getAllJobs()
        .subscribe(result => {
          this.jobList = result;
        },
      () => {},
      () => {}
      );
    }

  ngOnInit() {
  }

}
