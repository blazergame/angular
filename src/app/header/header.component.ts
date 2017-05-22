import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  onSelect(choosen: string){
    this.pageSelected.emit(choosen);
  }

}
