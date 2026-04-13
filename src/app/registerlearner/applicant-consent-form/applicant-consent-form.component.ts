
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogActions, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GlobalConstants } from '../../shared/GlobalConstant-component';
import { MatInputModule } from '@angular/material/input';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ReviewApplicantionComponent } from '../review-applicantion/review-applicantion.component';
import { response } from 'express';
import { ApplicationserviceService } from '../../services/applicationservice.service';
import { SnackbarService } from '../../services/snackbar.service';
import { PaymentofCommitmentsComponent } from '../paymentof-commitments/paymentof-commitments.component';
import { DatapasserService } from '../../services/datapasser.service';

@Component({
  selector: 'app-applicant-consent-form',
  imports: [MatToolbarModule, MatDialogModule, MatCheckboxModule, ReactiveFormsModule, MatFormFieldModule, MatCardModule, MatFormFieldModule, MatDialogActions, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './applicant-consent-form.component.html',
  styleUrl: './applicant-consent-form.component.css'
})
export class ApplicantConsentFormComponent implements OnInit{

  passportPicture:any;
  applicantionForm:any=FormGroup;
  isUsingPlayEquiptment: any = false;
  isCantakepartinSchoolActivities: any = false;
  isApplicantcanleaveschool: any = false;
  isApplicantCanbeEvaluated: any = false;
  isCallingSchoolDoctor: any;
  isCallinganbulance: any;
  isSendchildtoHospital: any;
  isPayallMedicalExpense: any;
  isDeclaration: any=false;
isEmergencyMedicalCare: any=false;
responseMessage:any;
applicationserialNumber:any
  constructor(private formBuilder:FormBuilder,
    private ngxService:NgxUiLoaderService,
    private dialog:MatDialog,
        private dialogRef:MatDialogRef<ApplicantConsentFormComponent>,
        private applicantionservice:ApplicationserviceService,
        private snackbarService:SnackbarService,
        private datapaserService:DatapasserService,
      
  ){
    this.passportPicture=this.datapaserService.setPassport();
    this.applicationserialNumber=this.datapaserService.getAppId();
  }
  ngOnInit(): void {
  this.applicantionForm=this.formBuilder.group({
    applicationNumber:[this.applicationserialNumber,[Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
    ApplicantCanUsePlayEquiptment:this.isUsingPlayEquiptment,
    ApplicantCanTakepartInschoolActivites:this.isCantakepartinSchoolActivities,
    ApplicancaLeaveschool:this.isApplicantcanleaveschool,
    ApplicanCanbeEvaluated:this.isApplicantCanbeEvaluated,
    emergencyMedicalCare:this.isEmergencyMedicalCare,
    EmergencyContact1:[this.datapaserService.setEmergContact1(),[Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
    EmergencyContact2:[this.datapaserService.setEmergContact2(),[Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
    EmergencyContact3:[this.datapaserService.setEmergContact3(),[Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
    familyDocterContact1:[this.datapaserService.setFamDocContact1(),[Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
    familyDocterContact2:[this.datapaserService.setFamDocContact2(),[Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
    familyDocterContact3:[this.datapaserService.setFamDocContact3(),[Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
    callSchoolDoctor:this.isCallingSchoolDoctor,
    callAmbulanceService:this.isCallinganbulance,
    sendchildtoHospital:this.isSendchildtoHospital,
    payallMedicalExpense:this.isPayallMedicalExpense,
    declaration:this.isDeclaration

  });
  }



  playEquipments(arg0: string, arg1: boolean) {
    if(arg0==='YES'){
      this.isUsingPlayEquiptment=arg0;
    }else{
      this.isUsingPlayEquiptment="NO"
    }
  }
  takePartinSchoolActivities(arg0: string, arg1: boolean) {
    if(arg0==="YES"){
      this.isCantakepartinSchoolActivities=arg0;
    }else{
      this.isCantakepartinSchoolActivities="NO"
    }
  }
  canLeaveschoolPremises(arg0: string, arg1: boolean) {
    if(arg0==='YES'){
      this.isApplicantcanleaveschool=arg0;
    }else{
      this.isApplicantcanleaveschool="NO"
    }
    
  }
  canbeEvaluated(arg0: string, arg1: boolean) {
      if(arg0==="YES"){
        this.isApplicantCanbeEvaluated=arg0;
      }else{
        this.isApplicantCanbeEvaluated="NO"
      }
  }

  payAllMedicalExpenses(arg0: string,arg1: boolean) {
    if(arg0==="YES"){
      this.isPayallMedicalExpense=arg0;
    }else{
      this.isPayallMedicalExpense="NO"
    }
    }
    sentToHospital(arg0: string,arg1: boolean) {
      if(arg0==="YES"){
        this.isSendchildtoHospital=arg0;
      }else{
        this.isSendchildtoHospital="NO"
      }
    }
    canCallAmbulance(arg0: string,arg1: boolean) {
      if(arg0==="YES"){
        this.isCallinganbulance=arg0;
      }else{
        this.isCallinganbulance="NO"
      }
    }
    canCallSchoolDoctor(arg0: string,arg1: boolean) {
      if(arg0==="YES"){
        this.isCallingSchoolDoctor=arg0;
      }else{
        this.isCallingSchoolDoctor="NO"
      }
    }
    emegencyCare(arg0: string,arg1: boolean) {
      if(arg0==="YES"){
        this.isEmergencyMedicalCare=arg0;
      }else{
        this.isEmergencyMedicalCare="NO"
      }
    }

    Declaration(arg0: string,arg1: boolean) {
      if(arg0==="YES"){
        this.isDeclaration=arg0;
      }else{
        this.isDeclaration="NO"
      }
      }


  handleSubmit() {

   this.ngxService.start();
   const formData=this.applicantionForm.value;
   let data={
    applicationNumber:formData.applicationNumber,
    ApplicantCanUsePlayEquiptment:formData.ApplicantCanUsePlayEquiptment,
    ApplicantCanTakepartInschoolActivites:formData.ApplicantCanTakepartInschoolActivites,
    ApplicancaLeaveschool:formData.ApplicancaLeaveschool,
    ApplicanCanbeEvaluated:formData.ApplicanCanbeEvaluated,
    emergencyMedicalCare:formData.emergencyMedicalCare,
    EmergencyContact1:formData.EmergencyContact1,
    EmergencyContact2:formData.EmergencyContact2,
    EmergencyContact3:formData.EmergencyContact3,
    familyDocterContact1:formData.familyDocterContact1,
    familyDocterContact2:formData.familyDocterContact2,
    familyDocterContact3:formData.familyDocterContact3,
    callSchoolDoctor:formData.callSchoolDoctor,
    callAmbulanceService:formData.callAmbulanceService,
    sendchildtoHospital:formData.sendchildtoHospital,
    payallMedicalExpense:formData.payallMedicalExpense,
    declaration:formData.declaration,
    progress:"ApplicantConsentFormComponent"
   }
   this.applicantionservice.submitConsentData(data).subscribe((response:any)=>{
   this.ngxService.stop();
    this.dialogRef.close();

    this.ngxService.start();
    this.dialog.closeAll();
    const dialogconfig = new MatDialogConfig();


    this.responseMessage=response?.message;
    dialogconfig.width="800px";
    this.dialog.closeAll();
     this.dialog.open(ReviewApplicantionComponent,dialogconfig);
    this.snackbarService.openSnackBar(this.responseMessage,"")
   },((error)=>{
    this.ngxService.stop();
    console.log(error)
  if(error.error?.message){
   this.responseMessage=error.error?.message
  }else{
   this.responseMessage=GlobalConstants.generateError
  }
  this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
   }))

  }
    previous=()=>{
                  this.ngxService.stop();
                 // this.dialogRef.close();
               
                  //this.router.navigate(["/"]);
                  const diadlogConfig = new MatDialogConfig();
                        diadlogConfig.width='800px'
                        this.dialog.closeAll();
                        setTimeout(()=>{
                          this.dialog.open(PaymentofCommitmentsComponent, diadlogConfig);
                        },255)
                     
                }
}
