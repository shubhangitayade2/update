import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flight } from '../models/flight';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public flight : any;
  searchKey:string="";
  public searchTerm : string='';
  constructor(private flightservice: FlightService,private _router:Router) { }

  flights: Array<flight> = new Array<flight>();
  
  ngOnInit(): void 
  {
    this.flightservice.getFlights().subscribe(res => this.flights = res, err => console.log(err))
     this.flightservice.search.subscribe((val:any)=>
    {
      this.searchKey=val;
    });
    this.flightservice.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  
      goto()
     {
       this._router.navigate(['/booking']);
     }
  
     goto1()
     {
       this._router.navigate(['/search']);
     }
     search(event:any){
      this.searchTerm = (event.target as HTMLInputElement).value;
      console.log(this.searchTerm);
      this.flightservice.search.next(this.searchTerm);
    }
  }










