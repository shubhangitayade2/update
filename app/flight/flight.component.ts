import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { booking } from '../models/booking';
import { bookinglUrl } from '../services/Apis';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor(public httpc:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  bookingModel: booking = new booking();
  bookingModels: Array<booking> = new Array<booking>();
  getData(){
    console.log("Hi");
    this.httpc.get(bookinglUrl).subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  
  GetSuccess(input:any){
    this.bookingModels=input;
  }
  GetError(input:any){
    console.log(input);
  }
  Editbooking(input: booking) {
    this.bookingModel = input;
  }
 

}
