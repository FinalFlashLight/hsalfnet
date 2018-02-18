import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'; //base app component


import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UserpageComponent } from './components/userpage/userpage.component'; //routing module
import { UserservService } from './services/userserv/userserv.service';

@NgModule({
  //declare components
  declarations: [
    AppComponent,
    HomeComponent,
    UserpageComponent
  ],
  //import modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //provide services
  providers: [UserservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
