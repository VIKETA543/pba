
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogActions, MatDialogConfig, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GlobalConstants } from '../../shared/GlobalConstant-component';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApplicationserviceService } from '../../services/applicationservice.service';
import { SnackbarService } from '../../services/snackbar.service';
import { ApplicantConsentFormComponent } from '../applicant-consent-form/applicant-consent-form.component';
import { ApplicantHealthComponent } from '../applicant-health/applicant-health.component';
import { DatapasserService } from '../../services/datapasser.service';

@Component({
  selector: 'app-paymentof-commitments',
  imports: [MatDialogModule, MatToolbarModule, MatDialogContent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatCardModule, MatDialogActions],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './paymentof-commitments.component.html',
  styleUrl: './paymentof-commitments.component.css'
})
export class PaymentofCommitmentsComponent implements OnInit {
passportPicture:any;
applicationserialNumber:any
  constructor(private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService,
    private applicationService: ApplicationserviceService,
    private dialog: MatDialog,
    private snackBarservice: SnackbarService,
    private datapasserservice:DatapasserService,

  ) {
this.passportPicture=this.datapasserservice.setPassport();
this.applicationserialNumber=this.datapasserservice.getAppId();
  }

  isParentMarrying: boolean = false;
  isParentDevorced: boolean = false;
  isParentSeperated: boolean = false;
  parentMarriageStatus: any;
  isMother: boolean = false;
  isFather: boolean = false;
  isGuardian: boolean = false;
  isInstitution: boolean = false;
  isOnScholarship: boolean = false;
  whopaysschoolfee:any;
  responseMessage: any;
  setDigitalAddressofInst:any
  applicationForm: any = FormGroup;
  ngOnInit(): void {
    console.log('appid',this.applicationserialNumber)
    this.applicationForm = this.formBuilder.group({
      applicationNumber:[this.applicationserialNumber, [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      isParentMarying: [this.datapasserservice.setPtMarriageStatus(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      applicantCommitment: [this.datapasserservice.setWhopCommitment(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      PayeeTitle: [this.datapasserservice.setTitle(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      nameofPayee: [this.datapasserservice.setNamePayee(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],

      digitalAddressofPayee: [this.datapasserservice.setDigiAddressPayee(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      PayeeAddress: [this.datapasserservice.serPayeeAdd(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      emailofPayee: [this.datapasserservice.setEmailPayee(), [Validators.required, Validators.pattern(GlobalConstants.EmailRegex)]],
      PhoneNumberofPayee: [this.datapasserservice.setPhoneofPayee(), [Validators.required, Validators.pattern(GlobalConstants.ContactNumberRegex)]],
      nameofInstitution: [this.datapasserservice.setNameofInst(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      postalAddressofInstitution: [this.datapasserservice.setPostalAddrInst(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      digitalAddressofInstitution: [this.datapasserservice.setDigitalAddressofInst(), [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      emailofInstitution: [this.datapasserservice.setEmailInst(), [Validators.required, Validators.pattern(GlobalConstants.EmailRegex)]],
      PhoneNumberofInstitution: [this.datapasserservice.setPhoneNumbInst(), [Validators.required, Validators.pattern(GlobalConstants.ContactNumberRegex)]],
    })
  }

  handleSubmit() {
    this.ngxService.start();
    var formData = this.applicationForm.value;
    let data = {
      applicationNumber:formData.applicationNumber,
      parentMarriageStatus:this.parentMarriageStatus,
      applicantCommitment:this.whopaysschoolfee,
      PayeeTitle: formData.PayeeTitle,
      nameofPayee: formData.nameofPayee,
      digitalAddressofPayee: formData.digitalAddressofPayee,
      PayeeAddress: formData.PayeeAddress,
      emailofPayee: formData.emailofPayee,
      PhoneNumberofPayee: formData.PhoneNumberofPayee,
      nameofInstitution: formData.nameofInstitution,
      postalAddressofInstitution: formData.postalAddressofInstitution,
      digitalAddressofInstitution: formData.digitalAddressofInstitution,
      emailofInstitution: formData.emailofInstitution,
      PhoneNumberofInstitution: formData.PhoneNumberofInstitution,
      progress:'PaymentofCommitmentsComponent'
    }
    this.applicationService.submitapplicantcommitmentsDetails(data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.ngxService.start();
      this.dialog.closeAll();
      const dialogconfig = new MatDialogConfig();
      dialogconfig.width = '800px'
      this.dialog.open(ApplicantConsentFormComponent, dialogconfig)
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
  parentsMarrying = (e: string, event: boolean) => {
    if (e === 'Yes') {
      this.isParentDevorced = false;
      this.isParentSeperated = false;
      this.parentMarriageStatus = e;
      console.log(e)
    } else {
      if (e === 'Devorced') {
        this.isParentSeperated = false;
        this.isParentMarrying = false;
        this.parentMarriageStatus = e;
        console.log(e)
      } else {
        if (e === 'Seperated') {
          this.isParentDevorced = false;
          this.isParentMarrying = false;
          this.parentMarriageStatus = e;
          console.log(e)
        } else {
          this.parentMarriageStatus = undefined;
        }
      }
    }
  }

  paymentofFee(arg0: string, arg1: boolean) {
    if (arg0==='Father') {
      this.whopaysschoolfee = arg0;
     console.log(this.whopaysschoolfee )
      this.isMother = false;
      this.isGuardian = false;
      this.isInstitution = false

    } else {
      if (arg0==='Mother') {
        this.whopaysschoolfee = arg0;
        this.isFather = false;
        // this.isMother=true;
        this.isGuardian = false;
        this.isInstitution = false

      } else {
        if (arg0==='Guardian') {
          this.whopaysschoolfee = arg0;
          this.isFather = false;
          this.isMother = false;
          // this.isGuardian=true;
          this.isInstitution = false

        } else {
          
          if (arg0==='Institution') {
            this.whopaysschoolfee = arg0;
            this.isFather = false;
            this.isMother = false;
            this.isGuardian = false;
             this.isInstitution=true

          } else {
            this.whopaysschoolfee = undefined;
          }
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
                      this.datapasserservice.loadHealthData()
                      setTimeout(()=>{
                        this.dialog.open(ApplicantHealthComponent,diadlogConfig);
                      },255)
                  
              }
}
