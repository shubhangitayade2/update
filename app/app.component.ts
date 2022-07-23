import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { FlightService } from './services/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightBook';

 // public productt : any;
  searchKey:string="";
  public searchTerm : string='';

  constructor(private _auth:AuthService,private flightservice:FlightService ){

  }
  ngOnInit(): void { }

  

  LoggedIn(input:boolean){
    if(input){
      return this._auth.loggedIn();
    }
    else{
      return !this._auth.loggedIn();
    }
  }
  LogOut(){
    this._auth.logoutUser();
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.flightservice.search.next(this.searchTerm);
  }
}