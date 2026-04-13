
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogContent, MatDialogActions, MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
import { ApplicantHealthComponent } from '../applicant-health/applicant-health.component';
import { FathersDetailsComponent } from '../fathers-details/fathers-details.component';
import { DatapasserService } from '../../services/datapasser.service';

@Component({
  selector: 'app-mothers-details',
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
  templateUrl: './mothers-details.component.html',
  styleUrl: './mothers-details.component.css'
})
export class MothersDetailsComponent implements OnInit {
  responseMessage: any;
  passportPicture:any;
  applicationserialNumber:any
  constructor(private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService,
    private applicationservice: ApplicationserviceService,
    private dialog: MatDialog,
    private snackBarservice: SnackbarService,
    private datapasser:DatapasserService,
  ) {
    this.passportPicture=this.datapasser.setPassport()
    this.applicationserialNumber=datapasser.getAppId();
  }

  ngOnInit(): void {

    this.applicationForm = this.formBuilder.group({
      applicationNumber: [this.applicationserialNumber, [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      motherName: [this.datapasser.setMothName(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      mothersOccupation: [this.datapasser.setMothOccupation(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      mothersPlaceofWork: [this.datapasser.setMothPofWork(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      mothersPhoneNumber: [this.datapasser.setMothSecPhone(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      mothersSecondaryPhoneNumber: [this.datapasser.setMothSecPhone(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      mothersAddress: [this.datapasser.setMothAddress(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      mothersEmailAdress: [this.datapasser.setMothEmailAdress(), [Validators.required, Validators.pattern(GlobalConstants.EmailRegex)]],
      mothersrelationship: [this.datapasser.setMothrelationship(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      motherNationality: [this.datapasser.setMothNationality(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      mothersEducation: [this.datapasser.setMothEducation(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      isMotherAlive: this.motherAliveStatus,

    })

  }

  handleSubmit() {
    this.ngxService.start();
    var formData = this.applicationForm.value;
    let data = {
      applicationNumber: formData.applicationNumber,
      motherName: formData.motherName,
      mothersOccupation: formData.mothersOccupation,
      mothersPlaceofWork: formData.mothersPlaceofWork,
      mothersPhoneNumber: formData.mothersPhoneNumber,
      mothersSecondaryPhoneNumber: formData.mothersSecondaryPhoneNumber,
      mothersAddress: formData.mothersAddress,
      mothersEmailAdress: formData.mothersEmailAdress,
      mothersrelationship: formData.mothersrelationship,
      motherNationality: formData.motherNationality,
      mothersEducation: formData.mothersEducation,
      isMotherAlive:this.motherAliveStatus,
      progress:'MothersDetailsComponent'
    }
    this.applicationservice.submitMothersDetails(data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.ngxService.stop();
      this.dialog.closeAll();
      const dialogconfig = new MatDialogConfig();
      dialogconfig.width = '800px'
      this.dialog.open(ApplicantHealthComponent,dialogconfig);
      this.snackBarservice.openSnackBar(this.responseMessage, "")
    }, (error) => {
      this.ngxService.stop();
      if (error.error.message) {
        this.responseMessage = error.error.message
      } else {
        this.responseMessage = GlobalConstants.generateError
      }
      this.snackBarservice.openSnackBar(this.responseMessage, GlobalConstants.error);
    })
  }
  applicationForm: any = FormGroup;
  isMotherDead: boolean = false;
  isMotherAliveUnknown: boolean = false;
  motherAliveStatus: any;
  isMotherAlive: boolean = false;



  motherAliveDeadChecked = (e: string, event: any) => {

    if (e === 'Alive') {
      this.isMotherDead = false;
      this.isMotherAliveUnknown = false;
      this.motherAliveStatus = e;
      console.log(e)
    } else {
      if (e === 'Dead') {
        this.isMotherAlive = false;
        this.isMotherAliveUnknown = false;
        this.motherAliveStatus = e;
        console.log(e)
      } else {
        if (e === 'Unknown') {
          this.isMotherAlive = false;
          this.isMotherDead = false;
          this.motherAliveStatus = e;
          console.log(e)
        } else {
          this.motherAliveStatus = undefined;
        }
      }
    }
  }

    previous=()=>{
          this.ngxService.stop();
         // this.dialogRef.close();
       
          //this.router.navigate(["/"]);
          const diadlogConfig = new MatDialogConfig();
                diadlogConfig.width='800px'
                this.dialog.closeAll();
                this.datapasser.loadFathersdetails();
                setTimeout(()=>{
                  this.dialog.open(FathersDetailsComponent,diadlogConfig);
                },250)
           
        }

}
