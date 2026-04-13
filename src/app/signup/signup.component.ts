import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SnackbarService } from '../services/snackbar.service';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants, ngxUiLoaderConfig } from '../shared/GlobalConstant-component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';


import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'app-signup',
  imports: [MatToolbarModule, MatDialogContent, ReactiveFormsModule, MatInputModule, MatDialogActions, MatIconModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm:any=FormGroup;
  responseMessage:any;
constructor(private snackBarservice:SnackbarService,
   private userServices:UserService,
    private router:Router, 
    private formBuider:FormBuilder,
  private dialogRef:MatDialogRef<SignupComponent>,
private ngxService: NgxUiLoaderService){}
ngOnInit():void{
  this.signupForm=this.formBuider.group({
    //Validating fileds
    name:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
    email:[null,[Validators.required,Validators.pattern(GlobalConstants.EmailRegex)]],
    contactNumber:[null,[Validators.required,Validators.pattern(GlobalConstants.ContactNumberRegex)]],
    password:[null,[Validators.required]],
    staffID:[null,[Validators.required]],
  })
};
handleSubmit=()=>{
  this.ngxService.start();
  var formData=this.signupForm.value;
  var data={
    name:formData.name,
    email:formData.email,
    contactNumber:formData.contactNumber,
    password:formData.password,
    staffID:formData.staffID

  }
  this.userServices.signup(data).subscribe((response:any)=>{

    this.ngxService.stop();
    this.dialogRef.close();
    this.responseMessage=response?.message;
    this.snackBarservice.openSnackBar(this.responseMessage,"");
    this.router.navigate(["/"]);
  },(error)=>{
   this.ngxService.stop();
   if(error.error?.message){
    this.responseMessage=error.error?.message
   }else{
    this.responseMessage=GlobalConstants.generateError
   }
   this.snackBarservice.openSnackBar(this.responseMessage,GlobalConstants.error);
  })
}
}
