import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http';
//import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import{MatToolbarModule}from '@angular/material/toolbar';
import{MatIconModule}from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { UniversityListComponent } from './_Components/university-list/university-list.component';
import { CollegeListComponent } from './_Components/college-list/college-list.component';

import { CourseListComponent } from './_Components/course-list/course-list.component';
import { BranchListComponent } from './_Components/branch-list/branch-list.component';

import { ApplicationListComponent } from './_Components/application-list/application-list.component';
import { PaymentListComponent } from './_Components/payment-list/payment-list.component';



import { MenuComponent } from './pages/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';

import { FooterComponent } from './sharePage/footer/footer.component';
import { NavbarComponent } from './sharePage/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './pages/signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    UniversityListComponent,
    CollegeListComponent,
   
    CourseListComponent,
    BranchListComponent,
  
    ApplicationListComponent,
    PaymentListComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    MenuComponent,
    SignupComponent,

    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatIconModule,
    // FlexLayoutModule,
    // MatCardModule,
    
    
    // RouterModule.forRoot([
    //   { path: '', pathMatch: 'full', redirectTo: 'home' },
    //   { path: 'home', component: HomeComponent },
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
