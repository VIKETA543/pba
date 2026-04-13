import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SignupComponent } from '../signup/signup.component';
import { RegisterlearnerComponent } from '../registerlearner/registerlearner.component';
import { PaymentofCommitmentsComponent } from '../registerlearner/paymentof-commitments/paymentof-commitments.component';
import { ApplicantConsentFormComponent } from '../registerlearner/applicant-consent-form/applicant-consent-form.component';
import { SerialLoginComponent } from '../registerlearner/serial-login/serial-login.component';
import { ConfirmAdmissionComponent } from '../confirm-admission/confirm-admission.component';
import { AdmissionRegisterComponent } from '../admission-register/admission-register.component';
import { WithdralPropmtComponent } from '../actions/withdral-propmt/withdral-propmt.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { WithdrawalListPromptComponent } from '../actions/withdrawal-list-prompt/withdrawal-list-prompt.component';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { WithdrawnListComponent } from '../withdrawn-list/withdrawn-list.component';
import { AdmissionSvcService } from '../services/admission-svc.service';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { Divider } from "primeng/divider";
import { PopoverModule } from 'primeng/popover';


@Component({
  selector: 'app-admissions',
  imports: [
    MatToolbarModule,
    ToolbarModule,
    ButtonModule,
    Divider,
    PopoverModule
],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss'
})
export class AdmissionsComponent {
handlesWithdrawnList() {
    this.dialog.open(WithdrawalListPromptComponent,{
    maxWidth: '100vw',
    maxHeight: '35vh',
    height: '35vh',
    width: 'calc(100% - 70%)',
    position: {
      top: '13%',
      left: '20%'
  },
    panelClass: 'full-screen-modal',  disableClose: true
  });
}
  constructor(private observer:BreakpointObserver,
    private  dialog:MatDialog,private admissionService:AdmissionSvcService){}
handlesWithdrawals() {

  // this.observer.observe(['(max-width:800px)']).subscribe((res) => {
  

      
   this.dialog.open(WithdralPropmtComponent,{
    maxWidth: '100vw',
    maxHeight: '35vh',
    height: '35vh',
    width: 'calc(100% - 75%)',
    position: {
      top: '13%',
      left: '15%'
  },
    panelClass: 'full-screen-modal',  disableClose: true
  });
   
  // })

}
handleAdmissionRegister() {

  this.dialog.open(AdmissionRegisterComponent,{
    maxWidth: '100vw',
    maxHeight: '100vh',
    height: '98%',
    width: 'calc(100% - 10%)',
    position: {
      // top: '10vh',
            bottom:'2vh',
      left: '14vw'
  },
    panelClass: 'full-screen-modal',  disableClose: false
  });
  //
}
  

registerLearner=()=>{
  const diadlogConfig = new MatDialogConfig();
      diadlogConfig.width='100%'
       
       this.dialog.open(RegisterlearnerComponent,{
         maxWidth: '100vw',
    maxHeight: '100vh',
    height: '98%',
    width: 'calc(100% - 10%)',
    position: {
      top: '11vh',
      left: '14vw',
  },
    panelClass: 'full-screen-modal',  disableClose: true
  

       });
   
}
confirmAdmission=()=>{
  const diadlogConfig = new MatDialogConfig();
      // diadlogConfig.width='100%'

      diadlogConfig.minHeight='calc(100vh - 90px)',
      diadlogConfig.height= 'auto'
    
       this.dialog.open(ConfirmAdmissionComponent,{
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '98%',
        width: 'calc(100% - 15%)',
        position: {
          top: '13vh',
          left: '15vw'
      },
        panelClass: 'full-screen-modal',  disableClose: true
      });
}

handlesListofWithdrawals=()=>{
  this.admissionService.loadWithdrawnpartialdata();
  const diadlogConfig = new MatDialogConfig();
      // diadlogConfig.width='100%'

      diadlogConfig.minHeight='calc(100vh - 90px)',
      diadlogConfig.height= 'auto'
    
       this.dialog.open(WithdrawnListComponent,{
        maxWidth: '100vw',
        maxHeight: '100vh',
    
        width: 'calc(100% - 15%)',
        position: {
          top: '13vh',
          left: '15vw'
      },
        panelClass: 'full-screen-modal',  disableClose: true
      });
}

}
