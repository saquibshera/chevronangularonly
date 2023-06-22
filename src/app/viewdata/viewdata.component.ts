import { Component } from '@angular/core';
import { ChevronService } from '../chevron.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent {
  tableinfo: any;
  constructor(private ser: ChevronService) {
    this.displaydata();
  }
  displaydata() {
    this.ser.GetPerson().subscribe(res => {
      this.tableinfo = res;
    })
  }
  delete(id: any) {
    console.log(id);
    this.ser.deleteperson(id).subscribe(res => {
      console.log("deleted");
    })
    this.displaydata();
  }

}
