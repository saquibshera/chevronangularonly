import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChevronService {

  constructor(private http: HttpClient) {


  }
  AddPerson(data: any) {

    const dataone = { id: 0, Name: data.name, Address: data.address, Email: data.email }
    console.log(dataone)
    this.http.post("https://localhost:7240/api/Persons", dataone).subscribe(res => {
      console.log("submitted");
    })
  }
  GetPerson() {
    return this.http.get("https://localhost:7240/api/Persons");
  }

  deleteperson(id: any) {
    console.log(id);
    return this.http.delete("https://localhost:7240/api/Persons/" + id);
  }

}
