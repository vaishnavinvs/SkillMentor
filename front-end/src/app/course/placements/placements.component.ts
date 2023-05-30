import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

  allplacements:any = []

  constructor(private api:ApiService ){

  }


  ngOnInit(): void {

    this.api.getallplacements().subscribe(
      (result:any)=>{
        console.log(result);
        this.allplacements = result
      }
    )
  }

}
