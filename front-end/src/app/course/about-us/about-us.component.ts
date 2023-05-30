import { Component, OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit  {


  allreviews:any = []
  
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.getallreviews().subscribe(
      (result:any)=>{
        console.log(result);
        this.allreviews = result
      }
    )
  }

  

}


  




