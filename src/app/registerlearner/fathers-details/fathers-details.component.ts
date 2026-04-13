
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogContent, MatDialogActions, MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from 'express';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApplicationserviceService } from '../../services/applicationservice.service';
import { SnackbarService } from '../../services/snackbar.service';
import { ApplicationformComponent } from '../applicationform/applicationform.component';
import { GlobalConstants } from '../../shared/GlobalConstant-component';
import { MothersDetailsComponent } from '../mothers-details/mothers-details.component';
import { DatapasserService } from '../../services/datapasser.service';

@Component({
  selector: 'app-fathers-details',
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
  templateUrl: './fathers-details.component.html',
  styleUrl: './fathers-details.component.css'
})
export class FathersDetailsComponent implements OnInit {
  applicationForm:any=FormGroup;
  healdDescription:any;
  responseMessage: any;
  isFatherAlive: boolean = false;
  isFatherDead: boolean = false;
  isfatherAliveUnknown: boolean = false;
fatehrAliveStatus: any;
passportPicture: any;
applicationserialNumber:any
constructor(private formBuilder: FormBuilder,
   private ngxService:NgxUiLoaderService,
    private applicationService:ApplicationserviceService,
    private dialogRef:MatDialogRef<FathersDetailsComponent>,
   private snackBarservice:SnackbarService,
  //private router:Router,
    private  dialog:MatDialog,
    private datapasser:DatapasserService,
  ){
    this.passportPicture=this.datapasser.setPassport()
    this.applicationserialNumber=datapasser.getAppId()
}
  ngOnInit(): void {
    this.applicationForm=this.formBuilder.group({
      applicationNumber:[this.applicationserialNumber, [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
            fathersName: [this.datapasser.setfatheersName(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
            fathersOccupation: [this.datapasser.setfatherOccupation(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
            fathersPlaceofWork: [this.datapasser.setfatherPlaceoofWork(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
            fatherMobileNumber: [this.datapasser.setPrimPhone(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
            fatherSecondaryNumber: [this.datapasser.setSecPhone(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
            fathersAddress: [this.datapasser.setFathAddress(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
            fathersEmailAdress:[this.datapasser.setFathEmail(), [Validators.required, Validators.pattern(GlobalConstants.EmailRegex)]],
            relationship:[this.datapasser.setFathRelationship(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
            fatherNationality: [this.datapasser.setFathNationality(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
            fathersEducation: [this.datapasser.setFatherEduc(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
            isFatherAlive:  [this.datapasser.setIsFatherAlive(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
    })
  }

  fatherAliveDeadChecked = (e: string, event: any) => {

    if (e === 'Alive') {
      this.isFatherDead = false;
      this.isfatherAliveUnknown = false;
      this.fatehrAliveStatus = e;
      console.log(e)
    } else {
      if (e === 'Dead') {
        this.isFatherAlive = false;
        this.isfatherAliveUnknown = false;
        this.fatehrAliveStatus = e;
        console.log(e)
      } else {
        if (e === 'Unknown') {
          this.isFatherAlive = false;
          this.isFatherDead = false;
          this.fatehrAliveStatus = e;
          console.log(e)
        } else {
          this.fatehrAliveStatus = undefined;
        }
      }
    }
  }

  handleSubmit=()=>{
    this.ngxService.start();
    var formData=this.applicationForm.value;
    var data={
      applicationNumber:formData.applicationNumber,
      fathersName: formData.fathersName,
      fathersOccupation:formData.fathersOccupation,
      fathersPlaceofWork:formData.fathersOccupation, 
      fatherMobileNumber: formData.fatherMobileNumber,
      fatherSecondaryNumber:formData.fatherSecondaryNumber,
      fathersAddress: formData.fathersAddress,
      fathersEmailAdress:formData.fathersEmailAdress,
      relationship:formData.relationship,
      fatherNationality:formData.fatherNationality,
      fathersEducation: formData.fathersEducation,
      isFatherAlive: this.fatehrAliveStatus,
      progress:'FathersDetailsComponent'
    }
this.applicationService.submitFathersDetails(data).subscribe((response:any)=>{

this.responseMessage=response?.message;
this.ngxService.stop();
this.dialog.closeAll();

 //this.router.navigate(["/"]);
      const diadlogConfig = new MatDialogConfig();
            diadlogConfig.width='800px'
            this.dialog.closeAll();
          this.dialog.open(MothersDetailsComponent,diadlogConfig);
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

  previous=()=>{
        this.ngxService.stop();
        this.dialogRef.close();
     
        //this.router.navigate(["/"]);
        const diadlogConfig = new MatDialogConfig();
              diadlogConfig.width='800px'
              this.dialog.closeAll();
            this.dialog.open(ApplicationformComponent,diadlogConfig);
      }
}
