import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {
  idd: any;
  constructor(private route: ActivatedRoute) {
    var id = this.route.snapshot.paramMap.get("id");
    this.idd = id;
  }
}
