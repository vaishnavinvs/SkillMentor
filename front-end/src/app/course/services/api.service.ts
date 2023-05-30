import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchTerm = new BehaviorSubject('')

  // 


  BASE_URL = 'https://educational-instition.onrender.com'

  constructor(private http:HttpClient) { }


  // all courses
  getallcourses(){
    return this.http.get(`${this.BASE_URL}/courses/course`)
  }
  
  

  // view course
  viewcourse(id:any){
    return this.http.get(`${this.BASE_URL}/courses/view-course/${id}`)
  }
  
  
  // all students placed
  getallplacements(){
    return this.http.get(`${this.BASE_URL}/courses/placement`)
  }


  // all reviews
  getallreviews(){
    return this.http.get(`${this.BASE_URL}/courses/about_us`)
  }


  //register api call
  register(uname:any,email:any,pswd:any,){
    const body = {
      uname,
      email,
      pswd
    }
   //server register api-post
   return this.http.post('http://localhost:3200/register',body)
  }

  // login
  login(uname:any,pswd:any){
    const body ={
      uname,
      pswd
    }
  //   //server login api-post
    return this.http.post('http://localhost:3200/login',body)
  }



}
