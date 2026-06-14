import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogActions, MatDialogConfig, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar.service';
import { GlobalConstants } from '../shared/GlobalConstant-component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { User } from '../interfaces/user';
import { SignupComponent } from '../signup/signup.component';
import { DividerModule } from 'primeng/divider';
import { ForgotpassordComponent } from '../forgotpassord/forgotpassord.component';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-login',
  imports: [MatToolbarModule,
    DividerModule,
     MatDialogContent,
      ReactiveFormsModule,
       MatInputModule,
        MatDialogActions,
         MatIconModule, FormsModule,AvatarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  responseMessage: any;
  userId:string=''
  image:any;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private ngxService: NgxUiLoaderService,
    private snackBarService: SnackbarService,
    private user:UserService,
    private dialog:MatDialog
    
  ) {

  }
  ngOnInit(): void {
      this.loginForm=this.formBuilder.group({
        email:[null,[Validators.required,Validators.pattern(GlobalConstants.EmailRegex)]],
        password:[null,Validators.required]
      });

  }
  handlesSubmit=()=>{
this.ngxService.start();
var formData=this.loginForm.value;
var data={
  email: formData.email,
  password:formData.password
}

this.userService.login(data).subscribe((response:any)=>{
  this.ngxService.stop();
  this.dialogRef.close();
 this.user.userdata=response?.userData
 this.user.image=response?.Photo;
 this.image=this.user.image;

 localStorage.setItem("userData",JSON.stringify( response?.userData))
 localStorage.setItem('Photo',response?.Photo)
  // console.log(response.userData)

  localStorage.setItem('token',response.token)//storing the token in the browswers local storage
  this.router.navigate(['app-admin-dashboard']);

},(error)=>{
  this.ngxService.stop();
  if(error.error?.message){
    this.responseMessage=error.error?.message;
  }else{
    this.responseMessage=GlobalConstants.generateError;
  }
  this.snackBarService.openSnackBar(this.responseMessage,GlobalConstants.error)
})
  }

  closeDialog=()=>{
      this.dialogRef.close();
  }

    onSignup=()=>{

    const diadlogConfig = new MatDialogConfig();
    diadlogConfig.width='550px'
    this.dialog.open(SignupComponent,diadlogConfig);
    
  };


  rememberMe: boolean = false;

  onForgotPassword(event: Event) {
    event.preventDefault();
   this.forgotPasswordAction()
  }

    forgotPasswordAction=()=>{
    const diadlogConfig= new MatDialogConfig();
    diadlogConfig.width='550px';
    this.dialog.open(ForgotpassordComponent,diadlogConfig);
    this.closeDialog()
    
  };

}
