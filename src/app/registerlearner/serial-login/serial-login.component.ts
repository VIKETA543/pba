
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GlobalConstants } from '../../shared/GlobalConstant-component';
import { MatIconModule } from '@angular/material/icon';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApplicationserviceService } from '../../services/applicationservice.service';
import { response } from 'express';
import { ApplicationformComponent } from '../applicationform/applicationform.component';
import { DialogConfig } from '@angular/cdk/dialog';
import { SnackbarService } from '../../services/snackbar.service';
import { ApplicantPassportComponent } from '../applicant-passport/applicant-passport.component';
import { DatapasserService } from '../../services/datapasser.service';
import { FathersDetailsComponent } from '../fathers-details/fathers-details.component';
import { MothersDetailsComponent } from '../mothers-details/mothers-details.component';
import { ApplicantHealthComponent } from '../applicant-health/applicant-health.component';
import { PaymentofCommitmentsComponent } from '../paymentof-commitments/paymentof-commitments.component';
import { ApplicantConsentFormComponent } from '../applicant-consent-form/applicant-consent-form.component';
import { ReviewApplicantionComponent } from '../review-applicantion/review-applicantion.component';
import { ProcesspdfReportComponent } from '../processpdf-report/processpdf-report.component';

@Component({
  selector: 'app-serial-login',
  imports: [
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './serial-login.component.html',
  styleUrl: './serial-login.component.css'
})
export class SerialLoginComponent implements OnInit {

  applicationForm: any = FormGroup;
  responseMessage: any;
  applicationserialNumber: any
  progressData: any;
  applicationstatus:any
  constructor(private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<SerialLoginComponent>,
    private applicationService: ApplicationserviceService,
    private snackBarservice: SnackbarService,
    private datapasserservice: DatapasserService,
  ) {

  }
  ngOnInit(): void {
    this.applicationForm = this.formBuilder.group({
      serialNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      pinNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]]
    })
  }
  handleSubmit() {

    this.ngxService.start();
    this.dialog.closeAll();
    var formData = this.applicationForm.value
    if( formData.serialNumber!==undefined && formData.pinNumber!==undefined ){
    let data = {
      serialNumber: formData.serialNumber,
      pinNumber: formData.pinNumber
    }
    this.datapasserservice.sendAppId(formData.serialNumber)
    this.applicationService.validateSerialLogin(data).subscribe((response: any) => {
      this.responseMessage = response?.message
      this.ngxService.start()
      this.dialogRef.close()
      const diadlogConfig = new MatDialogConfig();
      diadlogConfig.width = 'calc(100% - 10%)'
      // console.log(response)
      this.progressData = response?.progress
      this.applicationstatus=response?.processstatus
      this.datapasserservice.loadBiodata();
      this.datapasserservice.loadFathersdetails();
      this.datapasserservice.loadMothersDetails();
      this.datapasserservice.loadHealthData();
      this.datapasserservice.loadpaymentDetails();
      this.datapasserservice.loadPrentconsent();
      this.datapasserservice.loadImage()
      if(this.applicationstatus==="PROCESSING"){
      switch (this.progressData) {
        case "ApplicantPassportComponent":  
          this.dialog.open(ApplicantPassportComponent, diadlogConfig);
          break;
        case "ApplicationformComponent":

        setTimeout(() => {
          this.dialog.open(ApplicationformComponent, diadlogConfig);
        }, 1000);
      
          break;
        case 'FathersDetailsComponent':
          setTimeout(()=>{
            this.dialog.open(FathersDetailsComponent, diadlogConfig);
          },1000)
          break;
        case 'MothersDetailsComponent':
          setTimeout(()=>{
            this.dialog.open(MothersDetailsComponent, diadlogConfig);
          },1000)
         
          break;
        case 'ApplicantHealthComponent':
          setTimeout(()=>{
            this.dialog.open(ApplicantHealthComponent, diadlogConfig);
          },1000)
          
          break;
        case 'PaymentofCommitmentsComponent':
          setTimeout(()=>{
            this.dialog.open(PaymentofCommitmentsComponent, diadlogConfig);
          },1000)
   
          break
        case "ApplicantConsentFormComponent":
          setTimeout((event:Event)=>{
            console.log(event)
            this.dialog.open(ApplicantConsentFormComponent, diadlogConfig);
          },1000)
          break
        case "ReviewApplicantionComponent":
          setTimeout((event:Event)=>{
            this.dialog.open(ReviewApplicantionComponent, diadlogConfig);
          },1000)
          break
      }
    }else{
            setTimeout((event:Event)=>{
              this.dialog.open(ProcesspdfReportComponent,diadlogConfig)
            },1000)

    }
      this.snackBarservice.openSnackBar(this.responseMessage, '')
    }, ((error) => {
      this.ngxService.stop();
      if (error.error.message) {
        this.responseMessage = error.error.message
      } else {
        this.responseMessage = GlobalConstants.generateError
      }
      this.snackBarservice.openSnackBar(this.responseMessage, GlobalConstants.error);

    }))
  }else{
    alert("All fields are required")
  }
  }
}
