import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ReversePipe } from './reverse.pipe';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewdataComponent } from './viewdata/viewdata.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReversePipe,
    AboutComponent,
    ContactComponent,
    ViewuserComponent,
    FormComponent,
    ViewdataComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
