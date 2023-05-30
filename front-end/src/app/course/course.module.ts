import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { PlacementsComponent } from './placements/placements.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule} from  '@angular/common/http';
import { ViewCourseComponent } from './view-course/view-course.component';
import { FilterPipe } from './pipes/filter.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [
    CourseComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CoursesComponent,
    PlacementsComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactUsComponent,
    ViewCourseComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPayPalModule
  ]
})
export class CourseModule { }
