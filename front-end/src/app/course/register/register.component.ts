import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm=this.fb.group({

    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.email]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]

    
    })

constructor(private fb:FormBuilder,private api:ApiService,private registerRouter:Router){}

//registr
register(){
  
  let uname = this.registerForm.value.uname
  let email = this.registerForm.value.email
  let pswd = this.registerForm.value.pswd
 
if(this.registerForm.valid){
//   //call register of api
  this.api.register(uname,email,pswd)
  .subscribe((result:any)=>{
    alert(result.message);
  // })
// }
    //redrict to login page
 setTimeout(()=>{
 this.registerRouter.navigateByUrl('')
   },3000);
    
   },

  //400 error message
  (result)=>{
    alert(result.error.message)
    this.registerForm.reset()
  }
   )
  
 }
  
else{
    alert('invalid form')
  }
}

}
