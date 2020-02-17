import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";


import { HomeComponent } from './home/home.component';
import { HikeListComponent } from './hike/hike-list.component';
import {HikeDetailsComponent} from './hike/hike-details.component';
import { PageNotFound } from "./page-not-found.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";

const routes :any = [
  {path:'home', component:HomeComponent},
  {path:'hikes', component:HikeListComponent} ,
  {path:'hikes/:id', component:HikeDetailsComponent} ,
  {path:'contact', component:ContactComponent} ,
  {path:'about', component:AboutComponent} ,
  {path:'', redirectTo:'home',pathMatch:'full'} ,
  {path:'**', component:PageNotFound}
       ];


@NgModule({
imports:[RouterModule.forRoot(routes) ],
exports:[RouterModule]
})
export class AppRoutingModule{}
