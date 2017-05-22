// Core import
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders } from '@angular/core';

// Component import
import { HeaderComponent } from './header/header.component';
import { JobinfoComponent } from './jobinfo/jobinfo.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BUserComponent } from './userinfo/buser/buser.component';
import { EUserComponent } from './userinfo/euser/euser.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: WelcomePageComponent },
    { path: "eusers", component: EUserComponent },
    { path: "busers", component: BUserComponent },
    { path: "dashboard", component: DashboardComponent}
];

export const routing = RouterModule.forRoot(routes);
