
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogContent, MatDialogActions, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GlobalConstants } from '../../shared/GlobalConstant-component';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApplicationserviceService } from '../../services/applicationservice.service';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';
import { PaymentofCommitmentsComponent } from '../paymentof-commitments/paymentof-commitments.component';
import { MothersDetailsComponent } from '../mothers-details/mothers-details.component';
import { DatapasserService } from '../../services/datapasser.service';

@Component({
  selector: 'app-applicant-health',
  imports: [
    MatToolbarModule,
    MatDialogContent,
    MatDialogContent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogActions
],
  templateUrl: './applicant-health.component.html',
  styleUrl: './applicant-health.component.css'
})
export class ApplicantHealthComponent implements OnInit {

  applicationForm: any = FormGroup;
  applicantHealthStatus: any;
  isNormalHealth_No: boolean = false;
  isNormalHealth_Yes: boolean = false;
  applicanteyeStatus: any;
  isNormaEyesight_No: boolean = false;
  isNormaEyesight_Yes: boolean = false;
  isNormalhearingStatus: any;
  isNormalHearing_No: boolean = false;
  isNormalHearing_Yes: boolean = false;
  foodAllergyStatus: any = 'No';
  isFullyImmuzed: boolean = false;
  isFullyImmunizedStatus: any = 'No';
  isTraumaRelated_Yes: boolean = false;
  isTraumaRelated_No: boolean = false;
  isTraumaStatus: any = 'No';
  descofEyeProblem:string='none';
  responsemessage: any;
isFoodAllergies_No: boolean = false;
isFoodAllergies_YES: boolean = false;
isFoodAllergyStatus:any;
passportPicture: any;
applicationserialNumber:any
  constructor(private formBuilder: FormBuilder,
    private ngxService:NgxUiLoaderService,
    private applicationService:ApplicationserviceService,
    private dialogRef:MatDialogRef<ApplicantHealthComponent>,
    private dialog:MatDialog,
    private snackBarservice:SnackbarService,
  private dataservice:DatapasserService,
  ) {
    this.passportPicture=this.dataservice.setPassport()
    this.applicationserialNumber=this.dataservice.getAppId();
  }
  ngOnInit(): void {
    this.applicationForm = this.formBuilder.group({
      applicationNumber:[this.applicationserialNumber, [Validators.required, Validators.pattern(GlobalConstants.numberFieldRegex)]],
      isApplicantinGoodHealth: this.applicantHealthStatus,
      descofHealth: [this.dataservice.setDescofHealth(), [Validators.required, Validators.pattern(GlobalConstants.numberFieldRegex)]],
      applicanhasnormalEyesight: this.applicanteyeStatus,
      descofEyeProblem: [this.dataservice.setEyeProblem(), [Validators.required, Validators.pattern(GlobalConstants.numberFieldRegex)]],
      applicanhasnormalhearing: this.isNormalhearingStatus,
      descofHearingProblem: [this.dataservice.setDescofHealth(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      foodAllergies:this.foodAllergyStatus,
      foodAllergyDetails: [this.dataservice.setFoodAllergy(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      adjustability: [null, [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      applicantAttide: [null, [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      applicantFullyImmuzed:this.isFullyImmunizedStatus,
      traumaRelated:this.isTraumaStatus,
     
 
    })
  }

  applicantHealthAction = (e: string, event: any) => {
    if (e === 'Yes') {
      this.applicantHealthStatus = e;
      this.isNormalHealth_No = false;
    } else {
      if (e === 'No') {
        this.applicantHealthStatus = e;
        this.isNormalHealth_Yes = false;
      } else {
        this.applicantHealthStatus = undefined
      }
    }
  }

  applicantEyeAction = (e: string, event: any) => {
    if (e === 'Yes') {
      this.applicanteyeStatus = e;
      this.isNormaEyesight_No = false;
    } else {
      if (e === 'No') {
        this.applicanteyeStatus = e;
        this.isNormaEyesight_Yes = false;
      } else {
        this.applicanteyeStatus = undefined
      }
    }
  }

  applicantHearingAction = (e: string, event: any) => {
    if (e === 'Yes') {
      this.isNormalhearingStatus = e;
      this.isNormalHearing_No = false;
    } else {
      if (e === 'No') {
        this.isNormalhearingStatus = e;
        this.isNormalHearing_Yes = false;
      } else {
        this.isNormalhearingStatus = undefined
      }
    }
  }
  foodAllergyAction = (e: string, event: any) => {
    if (e === 'Yes') {
      //
      this.isFoodAllergies_No = false;
      this.foodAllergyStatus = e;
    } else {
      if(e === 'No'){
        this.isFoodAllergies_YES=false;
      this.foodAllergyStatus =e;
      }
    }
  }
  fullyImunizedAction = (e: string, event: any) => {
    if (e === 'Yes') {
      this.isFullyImmunizedStatus = e;
    } else {
      this.isFullyImmunizedStatus = 'No'
    }
  }
  traumaAction = (e: string, event: any) => {
    if (e === 'Yes') {
      ;
      this.isTraumaStatus = e;
    } else {
      this.isTraumaStatus = 'No';
    }
  }


  handleSubmit=()=> {
    this.ngxService.start();
    var formData=this.applicationForm.value;
    let data={
        applicationNumber:formData.applicationNumber,
        isApplicantinGoodHealth:this.applicantHealthStatus ,
        descofHealth:formData.descofHealth,
        applicanhasnormalEyesight:this.applicanteyeStatus,
        descriptionofEyeProblem:formData.descofEyeProblem,
        applicanhasnormalhearing:this.isNormalhearingStatus,
        descofHearingProblem:formData.descofHearingProblem,
        foodAllergyStatus:this.foodAllergyStatus,
        foodAllergyDetails: formData.foodAllergyDetails,
        adjustability: formData.adjustability,
        applicantAttide:formData.applicantAttide,
        applicantFullyImmuzed:this.isFullyImmunizedStatus ,
        traumaRelated:this.isTraumaStatus,
         progress:"ApplicantHealthComponent"

    }
this.applicationService.submitApplicantHealthdetails(data).subscribe((response:any)=>{
this.ngxService.stop();
this.dialogRef.close();
this.responsemessage=response?.message

const diadlogConfig = new MatDialogConfig();
            diadlogConfig.width='800px'
            this.dialog.closeAll();
        this.dialog.open(PaymentofCommitmentsComponent,diadlogConfig);
           this.snackBarservice.openSnackBar(this.responsemessage,"");
},((error)=>{
  this.ngxService.stop();
  if(error.error?.message){
   this.responsemessage=error.error?.message
  }else{
   this.responsemessage=GlobalConstants.generateError
  }
  this.snackBarservice.openSnackBar(this.responsemessage,GlobalConstants.error);

}))
  }

previous=()=>{
          this.ngxService.stop();
         // this.dialogRef.close();
       
          //this.router.navigate(["/"]);
          const diadlogConfig = new MatDialogConfig();
                diadlogConfig.width='800px'
                this.dialog.closeAll();
                this.dataservice.loadMothersDetails();
                setTimeout(() => {
                  this.dialog.open(MothersDetailsComponent,diadlogConfig);
                }, 250);
             
        }
}
