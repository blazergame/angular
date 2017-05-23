// Core Import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Component Import
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { JobinfoComponent } from './jobinfo/jobinfo.component';

// Anything else
import { AppService } from './app.service'
import { routing } from './app.routing'
import { APP_BASE_HREF } from '@angular/common';
import { BUserComponent } from './userinfo/buser/buser.component';
import { EUserComponent } from './userinfo/euser/euser.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {JobsTableComponent } from './jobinfo/jobs-table/jobs-table.component';
import { PostJobComponent } from './post-job/post-job.component';
import { JobDetailComponent } from './jobinfo/jobs-table/job-detail/job-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserinfoComponent,
    JobinfoComponent,
    BUserComponent,
    EUserComponent,
    WelcomePageComponent,
    DashboardComponent,
    JobsTableComponent,
    PostJobComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
