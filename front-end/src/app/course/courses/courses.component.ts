import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  allcourses:any = []
  searchTerm:string=''


  constructor(private api:ApiService){

  }
  


  ngOnInit(): void {


    this.api.getallcourses().subscribe(
      (result:any)=>{
        console.log(result);
        this.allcourses = result
      }
    )

    this.api.searchTerm.subscribe((result:any)=>{
      this.searchTerm=result
      console.log(result);
      
      console.log(this.searchTerm);
    })

}

// searching
search(event:any)
  {
        console.log(event.target.value);
        this.api.searchTerm.next(event.target.value )
        
  }

}