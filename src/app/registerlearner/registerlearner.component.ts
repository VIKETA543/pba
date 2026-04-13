
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogContent, MatDialogActions, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ApplicationformComponent } from './applicationform/applicationform.component';
import { ApplicantConsentFormComponent } from './applicant-consent-form/applicant-consent-form.component';
import { PaymentofCommitmentsComponent } from './paymentof-commitments/paymentof-commitments.component';
import { SerialLoginComponent } from './serial-login/serial-login.component';
import { ReviewApplicantionComponent } from './review-applicantion/review-applicantion.component';

@Component({
  selector: 'app-registerlearner',
  imports: [
    MatToolbarModule,
    MatDialogContent,
    MatDialogContent,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogActions,
    MatIconModule
],
  templateUrl: './registerlearner.component.html',
  styleUrl: './registerlearner.component.scss'
})
export class RegisterlearnerComponent {
constructor(private dialog:MatDialog){}
startApplication=()=>{
 const diadlogConfig = new MatDialogConfig();
      diadlogConfig.width='calc(100% - 50%)'
      this.dialog.closeAll();
       this.dialog.open(SerialLoginComponent,diadlogConfig);
        // this.dialog.open(ReviewApplicantionComponent,diadlogConfig);
      
    }
}
