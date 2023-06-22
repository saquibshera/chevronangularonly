import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  // // name: string = "saquib";
  // // persons = ["saquib", "umer", "gervasio"]
  // // phonenumber = 9906;
  // buttonname = "click";
  // myfunc() {
  //   this.buttonname = "Changed";
  // }
  // mystatus = "";
  // persons = [
  //   {
  //     name: "saquib",
  //     status: "pass"
  //   },
  //   {
  //     name: "gervasio",
  //     status: "fail"
  //   },
  //   {
  //     name: "couto",
  //     status: "fail"
  //   },
  //   {
  //     name: "lithaa",
  //     status: "pass"
  //   }
  // ]
  // mynewstatus = "saquib";
  displaydata: any;
  date = new Date();
  price = 120;
  Firstname = "Gervasio";
  listofdatapersons = ["saquib", "umer", "couto"]
  getdatafromchild(x: any) {
    this.displaydata = x;

  }
}
