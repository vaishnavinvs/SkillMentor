import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { PlacementsComponent } from './placements/placements.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  { 
    path: 'home', component: HomeComponent 
  },
  {
    path:'home/courses', component:CoursesComponent
  },
  {
    path:'home/placements', component:PlacementsComponent
  },
  {
    path:'home/gallery', component:GalleryComponent
  },
  {
    path:'home/about_us', component:AboutUsComponent
  },
  {
    path:'home/courses/contact_us', component:ContactUsComponent
  },
  {
    path:'home/courses/view-course/:id', component:ViewCourseComponent
  },
  {
    path:'register', component:RegisterComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
