import { Component, OnInit } from '@angular/core';
import { DatapasserService } from '../../services/datapasser.service';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { jsPDF } from 'jspdf';
import { autoTable } from 'jspdf-autotable'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-processpdf-report',
  imports: [MatCardModule, MatDialogModule, MatToolbarModule],
  templateUrl: './processpdf-report.component.html',
  styleUrl: './processpdf-report.component.css'
})
export class ProcesspdfReportComponent implements OnInit {

  handleSubmit() {
     const margins = {
      top: 150,
      bottom: 20,
      left: 20,
      right: 150
    }
    const doc = new jsPDF('p', 'mm', 'a4');

    // doc.addImage( this.BufferedBase64,'PNG',margins.right,margins.top,15,0)
    doc.setFontSize(24)
    doc.setTextColor(0, 26, 102);
    doc.setFont("arial",'normal',400);
    console.log(this.base64data)
    doc.addImage(this.base64data,"JPEG",margins.right,15,10,0)
    doc.text("BEACONHILL ACADEMY",10,10);
    doc.setLineWidth(2.0); 

//     var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
// var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
// doc.setLineWidth(400); 
     doc.setFontSize(12)

    doc.setTextColor(0, 128, 0);
    doc.text("2024-2025 ADMISSIONS",40,15,{align: 'center',maxWidth:500}).setFontSize(8).setFont("Tahoma", 'bold');
    // doc.line(30, 30, 560, 30); 
  
    // autoTable(doc, { html: '#applicationForm' })
    autoTable(doc, {
      margin: { top: 25, left: 5, bottom: 5 },
      head: [['Title', 'Details']],
      body: [
        ["Passport Picture:",doc.addImage(this.passportPicture,'JPEG',margins.right,15,15,0)],
        ["APPLICANT DETAILS"],
        ["Applicant ID:",this.datapaserService.getAppId()],
        [" Surname:",this.datapaserService.setSurname()],
        ["Middle Name:",this.datapaserService.setMiddleName()],
        ["Last Name",this.datapaserService.setLastName()],
        ["Nationality",this.datapaserService.setNationality()],
        ["Address",this.datapaserService.setApplicantAddress()],
        ["Gender",this.datapaserService.setapplicantGender()],
        ["Date of Birth",this.datapaserService.setApplicantDaofBirth()],
        ["Age",this.datapaserService.setApplicantAge()],
        ["Number of Male Siblings",this.datapaserService.setApplicantMaleSling()],
        ["Number of Female Siblings",this.datapaserService.setApplicantFemaleSiblings()],
        ["FATHERS DETAILS"],
      
        ["Fathers Name",this.datapaserService.setfatheersName()],
        ["Occupation",this.datapaserService.setfatherOccupation()],
        ["Place of Work",this.datapaserService.setfatherPlaceoofWork()],
        ["Phone Number",this.datapaserService.setPrimPhone()],
        ["Phone Number",this.datapaserService.setSecPhone()],
        ["Address",this.datapaserService.setFathAddress()],
        ["Email Address",this.datapaserService.setFathEmail()],
        ["Relationship with applicant",this.datapaserService.setFathRelationship()],
        ["NAtionality",this.datapaserService.setFathNationality()],
        ["Educational Level",this.datapaserService.setFatherEduc()],
        ["Is father Alive?",this.datapaserService.setIsFatherAlive()],
        ["MOTHERS DETAILS"],
        ["Mother Name",this.datapaserService.setMothName()],
        ["Occupation",this.datapaserService.setMothOccupation()],
        ["Place of Work",this.datapaserService.setMothPofWork()],
        ["Phone Number",this.datapaserService.setMothPriPhone()],
        ["Phone Number",this.datapaserService.setMothSecPhone()],
        ["Is Mother Alive",this.datapaserService.setMothisAlive()],
        ["Relationship with Applicant",this.datapaserService.setMothrelationship()],
        ["Address",this.datapaserService.setMothAddress()],
        ["Educational Level",this.datapaserService.setMothEducation()],
        ["Email Address",this.datapaserService.setMothEmailAdress()],
        ["Nationality",this.datapaserService.setMothNationality()],
        ["APPLICANT HEALTH INFORMATION"],
        ["Applicant has Health Issues",this.datapaserService.setHasGoogHealth()],
        ["Description of Health Problem",this.datapaserService.setDescofHealth()],
        ["Applicant has normal Eyesight",this.datapaserService.setHasNormalEye()],
        ["Description of Sight Problem",this.datapaserService.setEyeProblem()],
        ["Applicant has hearing impairement",this.datapaserService.setHasNormalHearing()],
        ["Description of Hearing impairement",this.datapaserService.setHearingProblem()],
        ["Applicant has food Allergy",this.datapaserService.setFoodAllergy()],
        ["Description of Allergies",this.datapaserService.setIsadjustable()],
        ["Applicant has Trauma Issues",this.datapaserService.setTraumaRelated()],
        ["Are parent still marrying",this.datapaserService.setPtMarriageStatus()],
        ["APPLICANT ATTITUDINAL AND SOCIAL DETAILS"],
        ["Behavioural & Attitudes",this.datapaserService.setApplicantAttide()],
        ["Applicant is fully Imunized",this.datapaserService.setIsImmuzed()],
        ["PAYMENT OF FEE AND ACADEMIC COMMITMENTS"],
        ["Who pays school fee",this.datapaserService.setWhopCommitment()],
        ["Title",this.datapaserService.setTitle()],
        ["Name  ",this.datapaserService.setNamePayee()],
        ["Digital Address",this.datapaserService.setDigiAddressPayee()],
        ["Postal Address",this.datapaserService.serPayeeAdd()],
        ["Email Address",this.datapaserService.setEmailPayee()],
        ["Phone Number",this.datapaserService.setPhoneofPayee()],
        ["DETAILS OF INSTITUTION (If institution is responsible for paying fee"],
        ["Name of Institution",this.datapaserService.setNameofInst()],
        ["POstal Address of Institution",this.datapaserService.setPostalAddrInst()],
        ["Email Address of Institution",this.datapaserService.setEmailInst()],
        ["Phone Number of Institution",this.datapaserService.setPhoneNumbInst()],
        ["Digital Address of Institution",this.datapaserService.setDigitalAddressofInst()],
        ["PARENT/GUARDIAN CONSENTS"],
        ["Applicant is allowed to use play Emquipments",this.datapaserService.setPlayEquip()],
        ["Applicant is allowed to take part in school activities",this.datapaserService.setSchoolActivites()],
        ["Applicant can be evaluated",this.datapaserService.setEvaluationAllowed()],
        ["School can offer Emergency Medical Care",this.datapaserService.setEmergMedicalCare()],
        ["Emergency Contact1:",this.datapaserService.setEmergContact1()],
        ["Emergency Contact2:",this.datapaserService.setEmergContact2()],
        ["Emergency Contact3:",this.datapaserService.setEmergContact3()],
        ["School may contact applicant family doctor",this.datapaserService.setFamDocContact1()],
        ["Family Doctor Contact1",this.datapaserService.setFamDocContact2()],
        ["Family Doctor Contact2",this.datapaserService.setFamDocContact3()],
        ["Family Doctor Contact3",this.datapaserService.setSchoolDoc()],
        ["School may contact Ambulance Service",this.datapaserService.setAmbService()],
        ["School can send applicant to hospital",this.datapaserService.setSendHospital()],
        ["Parents are ready to pay medical expenses(if any)",this.datapaserService.setPayMedExpense()],
       ["DECLARATION"],
        ["Declaration",this.datapaserService.setDeclara()]
      ]
    })
    doc.save(this.SName+" "+this.mname+" "+this.lname+"-"+this.applicationserialNumber+".pdf");
    // })
    // 
    // // doc.text('BEACONHILL ACADEMY',10,10)
    // const content=document.getElementById('contentData')
    // html2canvas(content!).then(canvas=>{
    //   const imgWidth=200;
    //   const imgHeight=canvas.height*imgWidth/canvas.width
    //   const contentDataUrl=canvas.toDataURL('image/png');
    //   const pos=0;
    //   doc.addImage(contentDataUrl,'PNG',0,pos,imgWidth,imgHeight)
      
    // doc.addImage(this.passportPicture,
    //   'JPEG',margins.left,
    // 15,15,15)
    // doc.save(this.SName+" "+this.mname+" "+this.lname+"-"+this.applicationserialNumber+".pdf");
  }
  previous() {
  }
  responseMessage: any
  passportPicture: any
  base64data:any
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

  constructor(
    private datapaserService: DatapasserService,
    private http:HttpClient
  ) { 
    this.http.get('assets/img/Beacon.png', { responseType: 'blob' })
    .subscribe(res => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.base64data = reader.result;                
           
      }

      reader.readAsDataURL(res); 
    });


  }


  ngOnInit(): void {
    this.datapaserService.loadfinalStage()

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
}
