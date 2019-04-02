import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TableviewComponent } from './tableview/tableview.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path:'',redirectTo:'signup',pathMatch:'full'},
  { path:'signup',component:SignupComponent},
  { path:'login',component:LoginComponent, canActivate:[AuthGuard]},
  { path:'welcome-page',component:WelcomePageComponent,canActivate:[AuthGuard]},
  { path:'tableview',component:TableviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
