import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { booking } from '../models/booking';
import { bookinglUrl } from '../services/Apis';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent  {

  constructor(public httpc:HttpClient) { }
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
  Deletebooking(input: booking) {
    var index=this.bookingModels.indexOf(input);
    this.bookingModels.splice(index,1);
  }

}
