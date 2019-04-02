import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TableviewComponent } from './tableview/tableview.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthserviceService } from './authservice.service';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgxGoogleMapModule } from 'ngx-google-map';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TableviewComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    NgxGoogleMapModule,

  ],
  providers: [AuthserviceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
