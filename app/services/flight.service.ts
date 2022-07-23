import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { flightUrl } from './Apis';

@Injectable({
    providedIn: 'root'
  })
export class FlightService {
    private flightUrl = flightUrl;
    


    public search = new BehaviorSubject<string>("");
    
    private _flightUrl = flightUrl;
    
    constructor(private http: HttpClient, private _router: Router) { }

    registerUserflight(user: any) {
        return this.http.post<any>(this._flightUrl, user);
      }
    
    getFlights() {
        return this.http.get<any>(this._flightUrl);
    }

}