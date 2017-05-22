import {Input, Component, OnInit } from '@angular/core';
import { IJobModel } from '../../interface/IJobModel';

@Component({
  selector: 'jobs-table',
  templateUrl: './jobs-table.component.html'
})

export class JobsTableComponent implements OnInit {
@Input() jobs: IJobModel[];

  constructor() { }

  ngOnInit() {
  }

}
