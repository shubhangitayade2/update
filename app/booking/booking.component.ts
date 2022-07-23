import { HttpClient } from '@angular/common/http';
import { booking } from '../models/booking';
import { Component, OnInit } from '@angular/core';
import { bookinglUrl } from '../services/Apis';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent  {

  constructor(public httpc:HttpClient) { }
 

  bookingModel: booking = new booking();
  bookingModels: Array<booking> = new Array<booking>();
  Addbooking() {
    console.log(this.bookingModel);
    
    var bookingto={
      id:Number(this.bookingModel.id),  
      name:this.bookingModel.name,
      email:this.bookingModel.email,
      gender:this.bookingModel.gender,
      age:Number(this.bookingModel.age),
      meal:this.bookingModel.meal,
      seatNo:Number(this.bookingModel.seatNo),

      

    }
    this.httpc.post(bookinglUrl,bookingto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
    this.bookingModel = new booking();
  }
  PostSuccess(res:any){
    console.log(res);
    
  }
  PostError(res:any){
    console.log(res);
  }
  EditBooking(input: booking) {
    this.bookingModel = input;
  }
  DeleteBooking(input: booking) {
    var index=this.bookingModels.indexOf(input);
    this.bookingModels.splice(index,1);
  }
  getBookings(){
    console.log("Hi");
    this.httpc.get(bookinglUrl).subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  
  GetSuccess(input:any){
    this.bookingModels=input;
  }
  GetError(input:any){
    console.log(input);
  }
  
  
}
