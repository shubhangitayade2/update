//import { Component, OnInit } from '@angular/core';
//import { flight } from '../models/flight';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { flight } from '../models/flight';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { flightUrl } from '../services/Apis';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  flightservice: any;

  constructor(public httpc:HttpClient,private http:HttpClient) {
  }
  ngOnInit(): void {
  
  }
  
  

  flightModel: flight = new flight();
  flightModels: Array<flight> = new Array<flight>();
  Updateflight() {
    console.log(this.flightModel);
   

    var flightto={
      flightNo:Number(this.flightModel.flightNo),  
      
      airline:this.flightModel.airline,
      
      fromPlace:this.flightModel.fromPlace,
     
      toPlace:this.flightModel.toPlace,
     
      startDateTime:this.flightModel.startDateTime,
      
      endDateTime:this.flightModel.endDateTime,
  
      days:this.flightModel.days,

      instrument:this.flightModel.instrument,

      businessSeats:this.flightModel.businessSeats,
      
      nonBusinessSeats:this.flightModel.nonBusinessSeats,
      
      ticketCost:Number(this.flightModel.ticketCost),
      
      rows:Number(this.flightModel.rows),
      
      meal:this.flightModel.meal,

      logo:this.flightModel.logo,

      isActive:this.flightModel.isActive,
      
    }
    this.httpc.put(flightUrl,flightto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
    this.flightModel = new flight();
    
  }
  PostSuccess(res:any){
    console.log(res);
    
  }
  PostError(res:any){
    console.log(res);
  }
  Editflight(input: flight) {
    this.flightModel = input;
  }
  Deleteflight(input: flight) {
    var index=this.flightModels.indexOf(input);
    this.flightModels.splice(index,1);
  }
  getData(){
    console.log("Hi");
    this.httpc.get(flightUrl).subscribe(res=>this.GetSuccess(res),res=>this.GetError(res));
  }
  
  GetSuccess(input:any){
    this.flightModels=input;
  }
  GetError(input:any){
    console.log(input);
  }
  uploadFile=(files: any)=>{
    console.log("Hi");
    
    if(files.length==0){
      return;
    }
    let filetoUpload=<File>files[0];
    const formData=new FormData();
    formData.append('file',filetoUpload,filetoUpload.name)
    this.http.post(flightUrl,formData).subscribe(res=>console.log(res),res=>console.log(res));
  }
  hasError(typeofvalidator:string,controlname:string):Boolean{
    return this.flightModel.formLoginGroup.controls[controlname].hasError(typeofvalidator);
  }  

}
