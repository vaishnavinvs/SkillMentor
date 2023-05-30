import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  allcourses:any = []

  constructor(private api:ApiService){
    
  }

  
  ngOnInit(): void {
    this.api.getallcourses().subscribe(
      (result:any)=>{
        console.log(result);
        this.allcourses = result
      }
    )  }

}
