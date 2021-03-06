import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';


import { AppComponent }  from './app.component';
import { HikeModule } from './hike/hike.module';
import { HomeModule } from './home/home.module';
import { PageNotFound } from './page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';
// import { HikeResolveService } from './hike/hike-resolver.service';

@NgModule({
  imports:      [ BrowserModule,
                   HikeModule,
                   HomeModule,
                   ContactModule,
                   AboutModule,
                   HttpModule,
                   AppRoutingModule],

  declarations: [ AppComponent, PageNotFound ],
  bootstrap:    [ AppComponent ],
  providers:[
    // HikeResolveService
  ]
})
export class AppModule { }
