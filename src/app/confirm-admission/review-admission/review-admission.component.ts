import { Component, OnInit } from '@angular/core';
import { DatapasserService } from '../../services/datapasser.service';

import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ConfirmComponent } from '../confirm/confirm.component';
import { AdmissionSvcService } from '../../services/admission-svc.service';

@Component({
  selector: 'app-review-admission',
  imports: [MatDialogModule, MatCardModule, MatToolbarModule],
  templateUrl: './review-admission.component.html',
  styleUrl: './review-admission.component.css'
})
export class ReviewAdmissionComponent implements OnInit {

  passportPicture: any;
  applicationserialNumber: any;
  SName: any;
  mname: any;
  lname: any;
  appNation: any;
  appAddress: any;
  appGender: any;
  appDOB: any;
  appAge: any;
  appMalesiblings: any;
  appFemaleSiblings: any;
  fatheersName: any;
  fatherOccu: any;
  fatherPoWork: any;
  primPhone: any;
  secPhone: any;
  fathAddress: any;
  fathEmail: any;
  fathRelationship: any;
  fathNationality: any;
  fatherEduc: any;
  isFatherAlive: any;
  mothName: any;
  mothOccupation: any;
  MothPofWork: any;
  mothPriPhone: any;
  mothSecPhone: any;
  MothisAlive: any;
  Mothrelationship: any;
  mothAddress: any;
  mothEducation: any;
  mothEmailAdress: any;
  mothNationality: any;
  hasGoogHealth: any;
  descofHealth: any;
  hasNormalEye: any;
  EyeProblem: any;
  hasNormalHearing: any;
  hearingProblem: any;
  foodAllergy: any;
  isadjustable: any;
  applicantAttide: any;
  isImmuzed: any;
  traumaRelated: any;
  ptMarriageStatus: any;
  whopCommitment: any;
  Title: any;
  namePayee: any;
  digiAddressPayee: any;
  PayeeAdd: any;
  emailPayee: any;
  PhoneofPayee: any;
  nameofInst: any;
  postalAddrInst: any;
  emailInst: any;
  PhoneNumbInst: any;
  digitalAddressofInst: any;
  PlayEquip: any;
  schoolActivites: any;
  evaluationAllowed: any;
  emergMedicalCare: any;
  EmergContact1: any;
  EmergContact2: any;
  EmergContact3: any;
  famDocContact1: any;
  famDocContact2: any;
  famDocContact3: any;
  SchoolDoc: any;
  AmbService: any;
  sendHospital: any;
  payMedExpense: any;
  declara: any;
  constructor(private datapaserService:DatapasserService,private ngxService:NgxUiLoaderService,
    private dialog:MatDialog,
    private dialogRef:MatDialogRef<ReviewAdmissionComponent>,
    private admisionService:AdmissionSvcService
  ){}
  ngOnInit(): void {
    this.datapaserService.loadImage()
    this.datapaserService.loadBiodata();
      this.datapaserService.loadFathersdetails();
      this.datapaserService.loadMothersDetails();
      this.datapaserService.loadHealthData();
      this.datapaserService.loadpaymentDetails();
      this.datapaserService.loadPrentconsent();
     

      setTimeout(()=>{
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

      },250)
  }
  handleSubmit() {
    this.ngxService.stop();
   
    this.datapaserService.sendAppId(this.applicationserialNumber)
    // let data={
    //   applicationNumber:this.applicationserialNumber,
    //   AdmissionNumber:this.admissionNumber,
    //   AdmissionDate:this.AdmissionDate,
    //   AssignedClass:this.AssignedClas,
    //   issuedAdmissionLetter:this.issuedAdmisionletter,
    //   AdmisionConfirmed:this.admisionConfirmed
    // }
    this.admisionService.loadAdmissionIndex();
    this.dialogRef.close()
       this.dialog.open(ConfirmComponent,{
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '80%',
        width: 'calc(100% - 40%)',
        position: {
          top: '15vh',
          left: '30vw'
      },
        panelClass: 'full-screen-modal'
      });
    }
}
