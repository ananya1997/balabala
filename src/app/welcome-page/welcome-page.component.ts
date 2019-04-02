import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
declare var google:any;
import{  AuthserviceService} from '../authservice.service';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  data:any;
  map:any;
  computelatlng:any;
 @ViewChild("placesRef") placesRef : GooglePlaceDirective;
  constructor(public router:Router,public serve:AuthserviceService) { }
  userData;
  ngOnInit() {
    this.userData=this.serve.userData;
     console.log(this.userData);
    this.computelatlng=this.userData.userLatLng;
    this.initMap(this.computelatlng.lat,this.computelatlng.lng);
    // console.log(this.data)
  }
  back(){
    this.router.navigate(['/tableview'])
  }

  logout(){
    this.router.navigate(['/login'])
  }
  initMap(Latt,lngg){
    console.log(Latt,lngg)
    var mapProp={
      center:new google.maps.LatLng(Latt,lngg),
      zoom:8
    };
    this.map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    this.addMarker(Latt,lngg)
}
addMarker(lat,lng){
  var latlng={lat:lat,lng:lng}
  var marker = new google.maps.Marker({
    position: latlng,
    map:this.map,
    
    
  })
  marker.setMap(this.map)
  }
}
