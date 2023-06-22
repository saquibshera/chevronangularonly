import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChevronService } from '../chevron.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private service: ChevronService, private router: Router) {

  }

  ngOnInit() {
    this.service.GetPerson().subscribe(res => {
      console.log(res);
    })
  }
  ourform = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(10)]),
    address: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email])
  })
  // arr: any = [
  //   {
  //     name: "danish",
  //     address: "kashmir",
  //     email: ""
  //   },
  //   {
  //     name: "umer",
  //     address: "kashmir",
  //     email: ""
  //   }
  // ]
  submitform() {
    const data = {
      name: this.ourform.value.name,
      address: this.ourform.value.address,
      email: this.ourform.value.email
    }
    this.service.AddPerson(data);
    this.router.navigate(['viewdata'])
    // this.arr.push(data);
    // console.log(this.arr);
  }

}
