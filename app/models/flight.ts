import {NgForm,FormGroup,Validators,FormBuilder,FormControl} from '@angular/forms';
export class flight
{
    id:number=0;
    flightNo:number=0;
    airline:string='';
    fromPlace:string='';
    toPlace:string='';
    startDateTime:string='';
    endDateTime:string='';
    days:string='';
    instrument:string='';
    businessSeats:string='';
    nonBusinessSeats:string='';
    ticketCost:number=0;
    rows:number=0;
    meal:string='';
    logo:string='';
    isActive:number=0;


    formLoginGroup:FormGroup;
    constructor(){
        var _builder=new FormBuilder();
        this.formLoginGroup=_builder.group({});
        this.formLoginGroup.addControl("flightNoControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("airlineControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("fromPlaceControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("toPlaceControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("startDateTimeControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("endDateTimeControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("daysControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("instrumentControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("businessSeatsControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("nonBusinessSeatsControl",new FormControl('',Validators.required));

        this.formLoginGroup.addControl("ticketCostControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("rowsControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("mealControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("logoControl",new FormControl('',Validators.required));
       // this.formLoginGroup.addControl("isActiveControl",new FormControl('',Validators.required));


    }

}
