import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { PersonApiService } from 'src/app/person-api.service';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {

  

  peopleList$!:Observable<any[]>;
  addressesList$!:Observable<any[]>;
  addressesList:any=[];

  //Map to display addresses
  mapAddresses:Map<number,string> = new Map();

  constructor(private service:PersonApiService) { }

  ngOnInit(): void {
    this.peopleList$ = this.service.getAllPeople();
  }

//properties
Modaltitle:string="";

activateAddEditPersonComponent:boolean=false;
person:any;
address:any;

modalAdd(){
  this.person={
    id: 0,
    firstName: null,
    lastName: null,
    age: null,
    address: 
      {
        id: 0,
        street: null,
        city: null,
        postalCode: null,
        country: null,
        personId: 0
      }
    
  }
  this.Modaltitle="Add Person";
  this.activateAddEditPersonComponent=true;

}

modalEdit(person:any){
//this.person=person;
this.person={
  id: person.id,
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age,
  address: 
    {
      id: person.address.id,
      street: person.street,
      city: person.city,
      postalCode: person.postalCode,
      country: person.country,
      personId: person.id
    }
  
}
this.Modaltitle="Edit Person";
this.activateAddEditPersonComponent=true;

}
delete(person:any){
  if(confirm(`Are you sure you wanna delete ${person.firstName} ${person.lastName}?`)){
                this.service.deletePerson(person.id).subscribe(res=> {
                  var closeModalButton= document.getElementById("closeModal-add-edit");
                  if(closeModalButton){
                    closeModalButton.click();
                  }
          
                  var deleteSuccess= document.getElementById("deleteSuccess-alert");
                  if(deleteSuccess){
                    deleteSuccess.style.display="block";
                  }
          
                  setTimeout(function(){
                               
                          if(deleteSuccess){
                            deleteSuccess.style.display="none";
                          }
                  },5000);
                
                    this.service.getAllPeople();
                });
  }
}
modalClose(){
  this.activateAddEditPersonComponent=false;
  this.peopleList$ = this.service.getAllPeople();
}

}
