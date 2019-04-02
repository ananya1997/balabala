import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';




declare var google:any;
export type name=[];
var Map: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm:any;
Password:any;
ConfirmPassword:any;
   match:any;
 address:any;
 computelatlng:any;
 
 data= [];

  getData;
  countryList=[];
  stateList=[];
  cityList=[];
  constructor(private fb:FormBuilder,public router:Router,) { }

ngOnInit() {
   
 
    this.userForm=this.fb.group({
      'FirstName': new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z]+$/)])),
      'LastName': new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z]+$/)])),
      'Contact': new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)])),
      'Email': new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})+$/)])),
      'Password': new FormControl('',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(16)])),
      'ConfirmPassword': new FormControl('',Validators.required),
      'Address': new FormControl('',Validators.required),
    });
    this.Password=this.userForm.value.Password;
    this.ConfirmPassword=this.userForm.value.ConfirmPassword;
    if(this.Password==this.ConfirmPassword){
      this.match=true;
    }
  }


details(){
  this.router.navigate(['/tableview'])
}




 getvalue(){


  //  var key=this.userForm.value.Email;
   var obj1={
     'FirstName':this.userForm.value.FirstName,
     'LastName':this.userForm.value.LastName,
     'Contact':this.userForm.value.Contact,
     'Email':this.userForm.value.Email,
     'Password':this.userForm.value.Password,
     'ConfirmPassword':this.userForm.value.ConfirmPassword,
     'Address':this.address,
     'userLatLng':this.computelatlng
   }
     var data=JSON.parse(localStorage.getItem('myinfo'))
   console.log(this.data)
   this.data.push(obj1)
   console.log(obj1)
   localStorage.setItem('myinfo',JSON.stringify(this.data));
  this.router.navigate(['/login']);

   
  
  }

 public handleAddressChange(address: Address) {
  this.address=address.formatted_address;
  this.computelatlng={
      'lat':address.geometry.location.lat(),
      'lng':address.geometry.location.lng(),
  };
  var marker = new google.maps.Marker({
    position: this.computelatlng,
    map: Map,
  });
  marker.setMap(Map);
}

}



