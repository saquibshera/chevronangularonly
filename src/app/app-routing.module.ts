import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { FormComponent } from './form/form.component';
import { ViewdataComponent } from './viewdata/viewdata.component';



const route: Routes = [
  { path: "", component: HomeComponent },
  { path: "About", component: AboutComponent },
  { path: "Contact", component: ContactComponent },
  { path: "viewuser/:id", component: ViewuserComponent },
  { path: "form", component: FormComponent },
  { path: "viewdata", component: ViewdataComponent }


]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
