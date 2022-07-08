import { Component, Input,OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { PersonApiService } from 'src/app/person-api.service';

@Component({
  selector: 'app-add-edit-person',
  templateUrl: './add-edit-person.component.html',
  styleUrls: ['./add-edit-person.component.css']
})
export class AddEditPersonComponent implements OnInit {

  peopleList$!:Observable<any[]>;
  addressesList$!:Observable<any[]>;
  constructor(private Service:PersonApiService) { }

  

  @Input() person:any;
  Id:number=0;
  firstName:string="";
  lastName:string="";
  age:number=0;

  street:string="";
  city:string="";
  postalCode:number=0;
  country:string="";
  

  ngOnInit(): void {
    this.Id=this.person.id;
    this.firstName=this.person.firstName;
    this.lastName=this.person.lastName;
    this.age=this.person.age;
    this.street=this.person.address.street;
    this.city=this.person.address.city;
    this.postalCode=this.person.address.postalCode;
    this.country=this.person.address.country;
    this.peopleList$ = this.Service.getAllPeople();
    this.addressesList$ = this.Service.getAllAddresses();



  }

  addPerson(){
    var person={
      firstName:this.firstName,
      lastName:this.lastName,
      age:this.age,
      address:{
        street:this.street,
        city:this.city,
        postalCode:this.postalCode,
        country:this.country
      }
    }
    this.Service.addPerson(person).subscribe(res=>
      {
        var closeModalButton= document.getElementById("closeModal-add-edit");
        if(closeModalButton){
          closeModalButton.click();
        }

        var addSuccess= document.getElementById("addSuccess-alert");
        if(addSuccess){
          addSuccess.style.display="block";
        }

        setTimeout(function(){
                     
                if(addSuccess){
                  addSuccess.style.display="none";
                }
        },5000);
      });

  }
 

 
  editPerson(){
    var person={
      id:this.Id,
      firstName:this.firstName,
      lastName:this.lastName,
      age:this.age,
      address:{
        street:this.street,
        city:this.city,
        postalCode:this.postalCode,
        country:this.country
      }
    }
    var id:number=this.Id;
    this.Service.editPerson(id,person).subscribe(res=>
      {
        var closeModalButton= document.getElementById("closeModal-add-edit");
        if(closeModalButton){
          closeModalButton.click();
        }

        var updateSuccess= document.getElementById("updateSuccess-alert");
        if(updateSuccess){
          updateSuccess.style.display="block";
        }

        setTimeout(function(){
                     
                if(updateSuccess){
                  updateSuccess.style.display="none";
                }
        },5000);
      });
  }

}
