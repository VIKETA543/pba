
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogActions, MatDialogConfig, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GlobalConstants } from '../../shared/GlobalConstant-component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { NgxUiLoaderConfig, NgxUiLoaderService } from 'ngx-ui-loader';
import { ApplicationserviceService } from '../../services/applicationservice.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';
import { FathersDetailsComponent } from '../fathers-details/fathers-details.component';
import { SerialLoginComponent } from '../serial-login/serial-login.component';
import { ApplicantPassportComponent } from '../applicant-passport/applicant-passport.component';
import { DatapasserService } from '../../services/datapasser.service';


@Component({
  selector: 'app-applicationform',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatToolbarModule,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './applicationform.component.html',
  styleUrl: './applicationform.component.scss'
})
export class ApplicationformComponent implements OnInit {

  applicationForm: any = FormGroup;
  healdDescription:any;
  responseMessage: any;
  dateofBirth: any;
  isMale: boolean = false;
  isFemale: boolean = false;
  appgender: any;

  isMotherAlive: boolean = false;
  isMotherDead: boolean = false;
  isMotherAliveUnknown: boolean = false;
  
  motherAliveStatus: any;
  parentMarriageStatus: any;
  isParentMarrying: boolean = false;
  isParentDevorced: boolean = false;
  isParentSeperated: boolean = false
  isNormalHealth_Yes:boolean=false;
  isNormalHealth_No:boolean=false;
  applicantHealthStatus:any;
  isNormaEyesight_Yes:boolean=false;
  isNormaEyesight_No:boolean=false;
  applicanteyeStatus:any;
  descriptionofEyeProblem:any;
  isNormalHearing_Yes:boolean=false;
  isNormalHearing_No:boolean=false;
  isNormalhearingStatus:any;
  isFoodAllergies:boolean=false;
  appSerial:string="";
  passportPicture:any;
  sname:string="";
  // @Input()appSerial?:string
  

  constructor(private formBuilder: FormBuilder,
    private ngxService:NgxUiLoaderService,
    private applicationService:ApplicationserviceService,
    private dialogRef:MatDialogRef<ApplicationformComponent>,
    private snackBarservice:SnackbarService,
    private router:Router,
    private  dialog:MatDialog,
    private datapasser:DatapasserService,
  ) {
    this.appSerial=this.datapasser.getAppId()
    this.datapasser.loadImage();
  }
  ngOnInit(): void {
    if(this.datapasser.setapplicantGender()=="Male"){
      console.log(this.datapasser.setapplicantGender())
      this.isMale=true
    }else{
      this.isFemale=true
    }


    this.applicationForm = this.formBuilder.group({

      // PlacementClass: [null, Validators.required],
      applicationNumber:[this.appSerial, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      applicantSurname: [this.datapasser.setSurname(), [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      applicantMiddlename: [this.datapasser.setMiddleName(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      applicantLastname: [this.datapasser.setLastName(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      applicantNationality: [this.datapasser.setNationality(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      childsAddress:[this.datapasser.setApplicantAddress(), [Validators.required, Validators.pattern(GlobalConstants.addressRegex)]],
      gender:this.isMale,
       matDatepicker: [this.datapasser.setApplicantDaofBirth(), [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      applicantAge: [this.datapasser.setApplicantAge(), [Validators.required, Validators.pattern(GlobalConstants.numberFieldRegex)]],
      numberofMaleSiblings: [this.datapasser.setApplicantMaleSling(), [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      numberofFemaleSiblings: [this.datapasser.setApplicantFemaleSiblings(), [Validators.required, Validators.pattern(GlobalConstants.numberFieldRegex)]],
      // parentsMariageStatus: this.parentMarriageStatus,
    });


  }



  handleSubmit=()=>{

    this.ngxService.start();
    var formData=this.applicationForm.value;
    var data={
      applicationNumber:formData.applicationNumber,
      applicantSurname:formData.applicantSurname,
      applicantMiddlename:formData.applicantMiddlename,
      applicantLastname:formData.applicantLastname,
      applicantNationality:formData.applicantNationality,
      applicantAddress:formData.childsAddress,
      applicantGender:this.appgender,
      applicantDateofBirth:formData.matDatepicker,
      applicantAge:formData.applicantAge,
      applicantNumberofMaleSibblings:formData.numberofMaleSiblings,
      applicantNumberofFemaleSibbling:formData.numberofFemaleSiblings,
      progress:'ApplicationformComponent'
    }
    this.applicationService.submitApplicantBioData(data).subscribe((response:any)=>{
  
      this.ngxService.stop();
      this.dialogRef.close();
      this.responseMessage=response?.message;
   
      //this.router.navigate(["/"]);
      const diadlogConfig = new MatDialogConfig();
            diadlogConfig.width='800px'
            this.dialog.closeAll();
          this.dialog.open(FathersDetailsComponent,diadlogConfig);
           this.snackBarservice.openSnackBar(this.responseMessage,"");

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


  


  genderChecked = (e: string, event: any) => {

    if (e === "Male") {
      this.isFemale = false
      this.appgender = e
      this.applicationForm.gender = event;
     console.log(event)
    }
    else {
      if (e === "Female") {
        this.isMale = false
        this.appgender = e
        this.applicationForm.gender = event;
        console.log(this.applicationForm.gender )
      } else {
        this.appgender = undefined;
      }
    }
  }
  previous=()=>{
      this.ngxService.stop();
      this.dialogRef.close();
   
      //this.router.navigate(["/"]);
      const diadlogConfig = new MatDialogConfig();
            diadlogConfig.width='800px'
            this.dialog.closeAll();
          this.dialog.open(ApplicantPassportComponent,diadlogConfig);
    }



  

}
