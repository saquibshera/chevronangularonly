import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() getdata: any;
  mysecret = "hello i am saquib from home";
  @Output() emitdata = new EventEmitter<any>();

  ngOnInit() {
    this.emitdata.emit(this.mysecret);
  }

}
