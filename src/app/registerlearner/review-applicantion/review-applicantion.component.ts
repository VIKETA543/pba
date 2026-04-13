import { Component, OnInit } from '@angular/core';
import { ApplicationserviceService } from '../../services/applicationservice.service';
import { ApplicantConsentFormComponent } from '../applicant-consent-form/applicant-consent-form.component';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DatapasserService } from '../../services/datapasser.service';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { SnackbarService } from '../../services/snackbar.service';
import { GlobalConstants } from '../../shared/GlobalConstant-component';
import { ProcesspdfReportComponent } from '../processpdf-report/processpdf-report.component';

@Component({
  selector: 'app-review-applicantion',
  imports: [MatToolbarModule, MatDialogModule, MatFormFieldModule, MatCardModule],
  templateUrl: './review-applicantion.component.html',
  styleUrl: './review-applicantion.component.css'
})
export class ReviewApplicantionComponent implements OnInit {
  responseMessage: any
  passportPicture: any
  applicationserialNumber: any;
  SName: string = "";
  mname: any
  lname: any
  appNation: any
  appAddress: any
  appGender: any
  appDOB: any
  appAge: any
  appMalesiblings: any
  appFemaleSiblings: any

  fatheersName: any
  fatherOccu: any
  fatherPoWork: any
  primPhone: any
  secPhone: any
  fathAddress: any
  fathEmail: any
  fathRelationship: any
  fathNationality: any
  fatherEduc: any
  isFatherAlive: any


  mothName: any
  mothOccupation: any
  MothPofWork: any
  mothPriPhone: any
  mothSecPhone: any
  MothisAlive: any
  Mothrelationship: any
  mothAddress: any
  mothEducation: any
  mothEmailAdress: any
  mothNationality: any

  hasGoogHealth: any
  descofHealth: any
  hasNormalEye: any
  EyeProblem: any
  hasNormalHearing: any
  hearingProblem: any
  foodAllergy: any
  isadjustable: any
  applicantAttide: any
  isImmuzed: any
  traumaRelated: any


  ptMarriageStatus: any
  whopCommitment: any
  Title: any
  namePayee: any
  digiAddressPayee: any
  PayeeAdd: any
  emailPayee: any
  PhoneofPayee: any
  nameofInst: any
  postalAddrInst: any
  emailInst: any
  PhoneNumbInst: any
  digitalAddressofInst: any

  PlayEquip: any
  schoolActivites: any
  evaluationAllowed: any
  emergMedicalCare: any
  EmergContact1: any
  EmergContact2: any
  EmergContact3: any
  famDocContact1: any
  famDocContact2: any
  famDocContact3: any
  SchoolDoc: any
  AmbService: any
  sendHospital: any
  payMedExpense: any
  declara: any
  constructor(private applicationService: ApplicationserviceService,
    private ngxService: NgxUiLoaderService,
    private dialog: MatDialog,
    private datapaserService: DatapasserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<ApplicationserviceService>

  ) {
    this.passportPicture = this.datapaserService.setPassport();
    this.applicationserialNumber = this.datapaserService.getAppId()
    this.SName = this.datapaserService.setSurname()
    this.mname = this.datapaserService.setMiddleName()
    this.lname = this.datapaserService.setLastName()
    this.appNation = this.datapaserService.setNationality()
    this.appAddress = this.datapaserService.setApplicantAddress()
    this.appGender = this.datapaserService.setapplicantGender()
    this.appDOB = this.datapaserService.setApplicantDaofBirth()
    this.appAge = this.datapaserService.setApplicantAge()
    this.appMalesiblings = this.datapaserService.setApplicantMaleSling()
    this.appFemaleSiblings = this.datapaserService.setApplicantFemaleSiblings()

    this.fatheersName = this.datapaserService.setfatheersName()
    this.fatherOccu = this.datapaserService.setfatherOccupation()
    this.fatherPoWork = this.datapaserService.setfatherPlaceoofWork()
    this.primPhone = this.datapaserService.setPrimPhone()
    this.secPhone = this.datapaserService.setSecPhone()
    this.fathAddress = this.datapaserService.setFathAddress();
    this.fathEmail = this.datapaserService.setFathEmail()
    this.fathRelationship = this.datapaserService.setFathRelationship()
    this.fathNationality = this.datapaserService.setFathNationality()
    this.fatherEduc = this.datapaserService.setFatherEduc()
    this.isFatherAlive = this.datapaserService.setIsFatherAlive();

    this.mothName = this.datapaserService.setMothName()
    this.mothOccupation = this.datapaserService.setMothOccupation()
    this.MothPofWork = this.datapaserService.setMothPofWork()
    this.mothPriPhone = this.datapaserService.setMothPriPhone()
    this.mothSecPhone = this.datapaserService.setMothSecPhone()
    this.MothisAlive = this.datapaserService.setMothisAlive()
    this.Mothrelationship = this.datapaserService.setMothrelationship()
    this.mothAddress = this.datapaserService.setMothAddress()
    this.mothEducation = this.datapaserService.setMothEducation()
    this.mothEmailAdress = this.datapaserService.setMothEmailAdress()
    this.mothNationality = this.datapaserService.setMothNationality()

    this.hasGoogHealth = this.datapaserService.setHasGoogHealth()
    this.descofHealth = this.datapaserService.setDescofHealth()
    this.hasNormalEye = this.datapaserService.setHasNormalEye()
    this.EyeProblem = this.datapaserService.setEyeProblem()
    this.hasNormalHearing = this.datapaserService.setHasNormalHearing()
    this.hearingProblem = this.datapaserService.setHearingProblem()
    this.foodAllergy = this.datapaserService.setFoodAllergy()
    this.isadjustable = this.datapaserService.setIsadjustable()
    this.applicantAttide = this.datapaserService.setApplicantAttide()
    this.isImmuzed = this.datapaserService.setIsImmuzed()
    this.traumaRelated = this.datapaserService.setTraumaRelated()


    this.ptMarriageStatus = this.datapaserService.setPtMarriageStatus()
    this.whopCommitment = this.datapaserService.setWhopCommitment()
    this.Title = this.datapaserService.setTitle()
    this.namePayee = this.datapaserService.setNamePayee()
    this.digiAddressPayee = this.datapaserService.setDigiAddressPayee()
    this.PayeeAdd = this.datapaserService.serPayeeAdd()
    this.emailPayee = this.datapaserService.setEmailPayee()
    this.PhoneofPayee = this.datapaserService.setPhoneofPayee()
    this.nameofInst = this.datapaserService.setNameofInst()
    this.postalAddrInst = this.datapaserService.setPostalAddrInst()
    this.emailInst = this.datapaserService.setEmailInst()
    this.PhoneNumbInst = this.datapaserService.setPhoneNumbInst()
    this.digitalAddressofInst = this.datapaserService.setDigitalAddressofInst()

    this.PlayEquip = this.datapaserService.setPlayEquip()
    this.schoolActivites = this.datapaserService.setSchoolActivites()
    this.evaluationAllowed = this.datapaserService.setEvaluationAllowed()
    this.emergMedicalCare = this.datapaserService.setEmergMedicalCare()
    this.EmergContact1 = this.datapaserService.setEmergContact1()
    this.EmergContact2 = this.datapaserService.setEmergContact2()
    this.EmergContact3 = this.datapaserService.setEmergContact3()
    this.famDocContact1 = this.datapaserService.setFamDocContact1()
    this.famDocContact2 = this.datapaserService.setFamDocContact2()
    this.famDocContact3 = this.datapaserService.setFamDocContact3()
    this.SchoolDoc = this.datapaserService.setSchoolDoc()
    this.AmbService = this.datapaserService.setAmbService()
    this.sendHospital = this.datapaserService.setSendHospital()
    this.payMedExpense = this.datapaserService.setPayMedExpense()
    this.declara = this.datapaserService.setDeclara()

  }

  ngOnInit(): void {

  }
  handleSubmit = () => {
    this.ngxService.start();
    let data = {
      applicationNumber: this.applicationserialNumber,
      progress: 'ReviewApplicantionComponent',
      statu: "COMPLETE",
      serialStatus: 'PROCESSED'
    }
    this.applicationService.finalSubmit(data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      this.dialog.closeAll();
      // this.dialogRef.close();
      const dialogconfig = new MatDialogConfig();
      dialogconfig.width = '800px';
      this.dialog.open(ProcesspdfReportComponent, dialogconfig);
      this.snackbarService.openSnackBar(this.responseMessage,'')
    }, (error) => {
      this.ngxService.start();
      if (error) {
        this.responseMessage = error.error.message;
      } else {
        this.responseMessage = GlobalConstants.generateError;
      }
      this.snackbarService.openSnackBar(this.responseMessage, "");
    })
  }


  previous = () => {
    this.ngxService.stop();
    // this.dialogRef.close();

    //this.router.navigate(["/"]);
    const diadlogConfig = new MatDialogConfig();
    diadlogConfig.width = '800px'
    this.dialog.closeAll();
    setTimeout(() => {
      this.dialog.open(ApplicantConsentFormComponent, diadlogConfig);
    }, 255)
  }
}
