import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";


import { HomeComponent } from './home/home.component';
import { HikeListComponent } from './hike/hike-list.component';
import {HikeDetailsComponent} from './hike/hike-details.component';
import { PageNotFound } from "./page-not-found.component";

const routes :any=[
  {path:'home', component:HomeComponent},
  {path:'hikes', component:HikeListComponent} ,
  {path:'hikes/:id', component:HikeDetailsComponent} ,
  {path:'', redirectTo:'home',pathMatch:'full'} ,
  {path:'**', component:PageNotFound}
       ];

@NgModule({
imports:[RouterModule.forRoot(routes) ],
exports:[RouterModule]
})
export class AppRoutingModule{}
