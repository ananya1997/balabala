import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css']
})
export class TableviewComponent implements OnInit {
  data:any;
  constructor(public router:Router,public serve:AuthserviceService) { }

  ngOnInit() {
    this.data=JSON.parse(localStorage.getItem('myinfo'));
    // console.log(this.data)
  }
  showDetails(data){
    this.serve.userData=data;
   this.router.navigate(['/welcome-page'])
 }
 delete(data){
   var index;
   for(let item in this.data)
   if(data.Email==this.data[item].Email){
   index=this.data.indexOf(this.data[item])
   } 
   this.data.splice(index, 1);
    localStorage.setItem('myinfo',JSON.stringify(this.data))
 }

}
