import {NgForm,FormGroup,Validators,FormBuilder,FormControl} from '@angular/forms';

export class UserData{
    userName:string='';
    password:string='';
    formLoginGroup:FormGroup;
    constructor(){
        var _builder=new FormBuilder();
        this.formLoginGroup=_builder.group({});
        this.formLoginGroup.addControl("UserNameControl",new FormControl('',Validators.required));
        this.formLoginGroup.addControl("PasswordControl",new FormControl('',Validators.required));
    }
}