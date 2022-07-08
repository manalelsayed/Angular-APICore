import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonApiService {

  readonly personAddressApi = "https://localhost:7131/api";
  constructor(private http:HttpClient) { }

  getAllPeople():Observable<any[]> {
    return this.http.get<any>(this.personAddressApi + "/People");
  }

  getPersonById(id:number|string){
    return this.http.get(this.personAddressApi + "/People/" + id);
  }

  addPerson(data:any){
    return this.http.post(this.personAddressApi + "/People", data);
  }

  editPerson(id:number|string, data:any){
    return this.http.put(this.personAddressApi + `/People/${id}` , data);
  }

  deletePerson(id:number|string){
    return this.http.delete(this.personAddressApi + `/People/${id}`);
  }


  //Addresses

  getAllAddresses():Observable<any[]> {
    return this.http.get<any>(this.personAddressApi + "/Addresses");
  }

  getAddressById(id:number|string){
    return this.http.get(this.personAddressApi + "/Addresses/" + id);
  }

  addAddress(data:any){
    return this.http.post(this.personAddressApi + "/Addresses", data);
  }

  editAddress(id:number|string, data:any){
    return this.http.put(this.personAddressApi + `/Addresses/${id}` , data);
  }

  deleteAddress(id:number|string){
    return this.http.delete(this.personAddressApi + `/Addresses/${id}`);
  }
}
