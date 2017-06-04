import { Component, OnInit } from '@angular/core';
import { BUser } from './buser/b-user'
import { EUser } from './euser/e-user'
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  redirect()
  {
    this.router.navigate(['postjob']);
  }



}
