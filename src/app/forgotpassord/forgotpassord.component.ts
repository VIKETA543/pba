import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar.service';
import { GlobalConstants } from '../shared/GlobalConstant-component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-forgotpassord',
  imports: [MatToolbarModule, MatDialogContent, MatDialogContent, ReactiveFormsModule, MatInputModule, MatDialogActions, MatIconModule],
  templateUrl: './forgotpassord.component.html',
  styleUrl: './forgotpassord.component.scss'
})
export class ForgotpassordComponent implements OnInit{
  forgotPasswordForm:any=FormGroup;
  responseMessage:any;

  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private dialogRef:MatDialogRef<ForgotpassordComponent>,
    private ngxService:NgxUiLoaderService,
    private snackBarService:SnackbarService,

  ){}

  ngOnInit(): void {
 this.forgotPasswordForm=this.formBuilder.group({
  email:[null,[Validators.required,Validators.pattern(GlobalConstants.EmailRegex)]],

 });
}
handleSubmit(){
  this.ngxService.start();
  var formData=this.forgotPasswordForm.value;
  var data={
    email:formData.email
  }
  this.userService.forgotPassword(data).subscribe((response:any)=>{
    this.ngxService.stop();
    this.responseMessage=response?.message;
    this.dialogRef.close();
    this.snackBarService.openSnackBar(this.responseMessage,"");

  },(error)=>{
    console.log(error)
this.ngxService.stop();
 if(error.error?.message){
  this.responseMessage=error.error?.message;
 }else{
  this.responseMessage=GlobalConstants.generateError;

 }
 this.snackBarService.openSnackBar(this.responseMessage,GlobalConstants.error)
  })
}

}
