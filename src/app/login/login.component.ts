import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
//import { AuthService} from '../auth.service';
import { AuthserviceService} from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm1:any;

  constructor(private fb1:FormBuilder, public router:Router,public serve:AuthserviceService) { }

  ngOnInit() {
    this.userForm1=this.fb1.group({
      'Email': new FormControl('',Validators.compose([Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})+$/)])),
      'Password': new FormControl('',Validators.compose([Validators.required]))

    });
  }
  getValue1(){
    // console.log('value is:',this.userForm1.value);
    var data=JSON.parse(localStorage.getItem('myinfo'));
    //console.log(data);
    //console.log(this.userForm1.value) 
    //this.userForm1.reset();

    if(data==null){
      alert('Account not exists');
    }
    else{
      for(let i in data){
      if((data[i].Password==this.userForm1.value.Password) && (data[i].Email==this.userForm1.value.Email))
          {
       
            alert('welcome')
            this.router.navigate(['/tableview'])
           
          }   
    }
  }
    this.userForm1.reset();
  }
  clear(){
    this.userForm1.reset();
  }
}

