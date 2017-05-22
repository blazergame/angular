import { Component, OnInit } from '@angular/core';
import { BUser } from './buser/b-user'
import { EUser } from './euser/e-user'

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  listOfBUsers = Array<BUser>();
  listOfEUsers = Array<EUser>();
  constructor() {
    // this.listOfBUsers.push(new BUser("2","bill@gates.com","Business","Pics"));
    // this.listOfBUsers.push(new BUser("3","bill@gates.com","Business","Pics"));
    // this.listOfBUsers.push(new BUser("4","bill@gates.com","Business","Pics"));
    // this.listOfBUsers.push(new BUser("5","bill@gates.com","Business","Pics"));
    // this.listOfBUsers.push(new BUser("6","bill@gates.com","Business","Pics"));
    // this.listOfBUsers.push(new BUser("7","bill@gates.com","Business","Pics"));
    // this.listOfBUsers.push(new BUser("8","bill@gates.com","Business","Pics"));
    // this.listOfEUsers.push(new EUser("E","bill@gates.com","Job Finder","Pics"));
  }

  ngOnInit() {
  }

  // onClick(){
  //   this.listOfBUsers[0].bName ="New";
  // }

}
