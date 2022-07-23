import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { flight } from '../models/flight';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { flightUrl } from '../services/Apis';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  flightservice: any;
  showSpinner:boolean=false;
  //registerUserData: UserData = new UserData();
  modelText:string="";
  modelHeader:string="";
  
  //showSpinner:boolean=false;

  constructor(public httpc:HttpClient,private http:HttpClient, private _flight: AuthService,private _router:Router, ) {
  }
  

  flightModel: flight = new flight();
  flightModels: Array<flight> = new Array<flight>();
  Addflight() {
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
    this.httpc.post(flightUrl,flightto).subscribe(res=>this.PostSuccess(res),res=>this.PostError(res));
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
  DisplayModalPopup(modelHeader:string,modelText:string){
    this.modelHeader=modelHeader;
    this.modelText=modelText;
    document.getElementById("btnLaunchModel")?.click();
  }

  ShowSpinner(){
    this.showSpinner=true;
  }
  HideSpinner(){
    this.showSpinner=false;
  }
  registerUserflight() {

    if(this.flightModel.airline==''|| this.flightModel.fromPlace==''){
      this.DisplayModalPopup("Error","Please enter the username and password");
      return;
    }
    this.ShowSpinner();
    var userDataObject={
      airline:this.flightModel.airline,
      fromPlace:this.flightModel.fromPlace
    }
    this._flight.registerUserflight(userDataObject).subscribe((res: { token: string; }) => {
     this.HideSpinner();localStorage.setItem('token',res.token);
      this._router.navigate([''])
    },
      (      err: any) => console.log(err));
  }


  hasError(typeofvalidator:string,controlname:string):Boolean{
    return this.flightModel.formLoginGroup.controls[controlname].hasError(typeofvalidator);
  }  
}
