import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  //error
   errorMsg:string=""
  
  
    loginForm=this.fb.group({
      uname:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
      pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
    })
  
  constructor(private fb:FormBuilder,private api:ApiService,private loginRouter:Router){}
  
  login(){
    if(this.loginForm.valid){
      let uname= this.loginForm.value.uname
      let pswd= this.loginForm.value.pswd
   //login api call
  this.api.login(uname,pswd)
      .subscribe((result:any)=>{
        alert(result.message)
  //login success
  // this.successMsg = true
  //get uname from result and store in localstorage
  localStorage.setItem("currentUsername",result.currentUname) 
  
  //redirect page
   setTimeout(()=>{
     this.loginRouter.navigateByUrl('course/home')
   },3000);
      },
      (result:any)=>{
        // alert(result.error.message)
       this.errorMsg = result.error.message
      //after 3sec refreshloginform and error msg
      setTimeout(()=>{
        this.loginForm.reset()
        this.errorMsg = ""
      },3000);
      }
      )
    }
   
  
  
  
  
   else{
      alert('invalid form')
    }
  }


  // 
 


  }
  
  
