import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppsvcService } from './emp-dashboard/services/appsvc.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthserviceService } from './empLogin/authservice.service';
//import { EmpDashboardModule } from './emp-dashboard/emp-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    //EmpDashboardModule
  ],
  providers: [AppsvcService,AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
