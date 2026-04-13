import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ForgotpassordComponent } from '../forgotpassord/forgotpassord.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor(private dialog:MatDialog){

}
  signupAction=()=>{

    const diadlogConfig = new MatDialogConfig();
    diadlogConfig.width='550px'
    this.dialog.open(SignupComponent,diadlogConfig);
    
  };

  loginAction=()=>{
    console.log("loging")
 const diadlogConfig = new MatDialogConfig();
 diadlogConfig.width='550px'
 this.dialog.open(LoginComponent,diadlogConfig);
  };
  forgotPasswordAction=()=>{
    const diadlogConfig= new MatDialogConfig();
    diadlogConfig.width='550px';
    this.dialog.open(ForgotpassordComponent,diadlogConfig);
    
  };

}
