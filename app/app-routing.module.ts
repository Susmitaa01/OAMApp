import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SignupComponent } from './pages/signup/signup.component';

import { ApplicationListComponent } from './_Components/application-list/application-list.component';
import { BranchListComponent } from './_Components/branch-list/branch-list.component';
import { CollegeListComponent } from './_Components/college-list/college-list.component';

import { CourseListComponent } from './_Components/course-list/course-list.component';

import { PaymentListComponent } from './_Components/payment-list/payment-list.component';

import { UniversityListComponent } from './_Components/university-list/university-list.component';


const routes: Routes = [

// {path:'college',component:CollegeListComponent},
// {path:'course',component:CourseListComponent},

// {path:'application',component:ApplicationListComponent},
// {path:'payment',component:PaymentListComponent},
// {path:'login',component:LoginComponent}

// {path:'course',component:CourseListComponent},
// {path:'aboutUs',component:ContactUsComponent},
// {path:'login',component:LoginComponent}
{path:'',component:HomeComponent},
{path:'menu',component:MenuComponent},
{path:'university',component:UniversityListComponent},
{path:'college',component:CollegeListComponent},
{path:'course',component:CourseListComponent},
{path:'branch',component:BranchListComponent},
{path:'aboutUs',component:AboutUsComponent},
{path:'contactUs',component:ContactUsComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
