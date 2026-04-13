import { Injectable } from '@angular/core';
import { ApplicationserviceService } from './applicationservice.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class DatapasserService {
  AppId: string = "";
  passportPicture: any;
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
  pdfData:string[]=[];
  img:any;

  constructor(private applicationService: ApplicationserviceService,
    private ngxService: NgxUiLoaderService
  ) { }
  sendAppId = (appId: string) => {
    return this.AppId = appId;
  }
  getAppId = () => {
    return this.AppId;
  }

  getPassPort = (image: any) => {
    return this.passportPicture = image;
  }
  setPassport = () => {
    return this.passportPicture;
  }
  async loadImage() {
    this.ngxService.start();
    var data = {
      serialNumber: this.AppId
    }
    this.applicationService.loadImage(data).subscribe((response: any) => {

       this.img = new Image()

      this.img.src = `data:image/jpeg;base64,${response?.image}`;
      this.ngxService.stop();
      this.passportPicture = this.img.src;
      return this.passportPicture;
    })
  }

  loadBiodata() {

    var data = {
      serialNumber: this.getAppId()
    }

    this.applicationService.loadBiodata(data).subscribe((response: any) => {

      this.SName = response?.sname,
        this.mname = response?.mname,
        this.lname = response?.lname,
        this.appNation = response?.appNation,
        this.appAddress = response?.appAddress,
        this.appGender = response?.appGender,
        this.appDOB = response?.appDOB,
        this.appAge = response?.appAge,
        this.appMalesiblings = response?.appMalesiblings,
        this.appFemaleSiblings = response?.appFemaleSiblings
    })
  }
  loadFathersdetails() {
    var data = {
      serialNumber: this.getAppId()
    }
    this.applicationService.loadFathersdetails(data).subscribe((response: any) => {
      this.fatheersName = response?.fatheersName
      this.fatherOccu = response?.fatherOccu
      this.fatherPoWork = response?.fatherPoWork;
      this.primPhone = response?.primPhone
      this.secPhone = response?.secPhone
      this.fathAddress = response?.fathAddress
      this.fathEmail = response?.fathEmail
      this.fathRelationship = response?.fathRelationship
      this.fathNationality = response?.fathNationality
      this.fatherEduc = response?.fatherEduc
      this.isFatherAlive = response?.isFatherAlive
    })
  }

  loadMothersDetails() {
    var data = {
      serialNumber: this.getAppId()
    }
    this.applicationService.loadMothersDetails(data).subscribe((response: any) => {

      this.mothName = response?.mothName
      this.mothOccupation = response?.mothOccupation
      this.MothPofWork = response?.MothPofWork
      this.mothPriPhone = response?.mothPriPhone
      this.mothSecPhone = response?.mothSecPhone
      this.MothisAlive = response?.MothisAlive
      this.Mothrelationship = response?.Mothrelationship
      this.mothAddress = response?.mothAddress
      this.mothEducation = response?.mothEducation
      this.mothEmailAdress = response?.mothEmailAdress
      this.mothNationality = response?.mothNationality

    })
  }
  loadHealthData() {
    var data = {
      serialNumber: this.getAppId()
    }
    this.applicationService.loadHealthInformation(data).subscribe((response: any) => {
      this.hasGoogHealth = response?.hasGoogHealth,
        this.descofHealth = response?.descofHealth,
        this.hasNormalEye = response?.hasNormalEye,
        this.EyeProblem = response?.EyeProblem,
        this.hasNormalHearing = response?.hasNormalHearing,
        this.hearingProblem = response?.hearingProblem,
        this.foodAllergy = response?.foodAllergy,
        this.isadjustable = response?.isadjustable,
        this.applicantAttide = response?.applicantAttide,
        this.isImmuzed = response?.isImmuzed,
        this.traumaRelated = response?.traumaRelated

    })
  }
  loadpaymentDetails = () => {
    var data = {
      serialNumber: this.getAppId()
    }
    this.applicationService.loadpaymentDetails(data).subscribe((response: any) => {
      this.ptMarriageStatus = response?.ptMarriageStatus
      this.whopCommitment = response?.whopCommitment
      this.Title = response?.Title
      this.namePayee = response?.namePayee
      this.digiAddressPayee = response?.digiAddressPayee
      this.PayeeAdd = response?.PayeeAdd
      this.emailPayee = response?.emailPayee
      this.PhoneofPayee = response?.PhoneofPayee
      this.nameofInst = response?.nameofInst
      this.postalAddrInst = response?.postalAddrInst
      this.emailInst = response?.emailInst
      this.PhoneNumbInst = response?.PhoneNumbInst
      this.digitalAddressofInst = response?.digiAddressofInstitution

    })
  }

  loadPrentconsent = () => {
    var data = {
      serialNumber: this.getAppId()
    }
    this.applicationService.loadPrentconsent(data).subscribe((response: any) => {
      this.PlayEquip = response?.PlayEquip
      this.schoolActivites = response?.schoolActivites
      this.evaluationAllowed = response?.evaluationAllowed
      this.emergMedicalCare = response?.emergMedicalCare
      this.EmergContact1 = response?.EmergContact1
      this.EmergContact2 = response?.EmergContact2
      this.EmergContact3 = response?.EmergContact3
      this.famDocContact1 = response?.famDocContact1
      this.famDocContact2 = response?.famDocContact2
      this.famDocContact3 = response?.famDocContact3
      this.SchoolDoc = response?.SchoolDoc
      this.AmbService = response?.AmbService
      this.sendHospital = response?.sendHospital
      this.payMedExpense = response?.payMedExpense
      this.declara = response?.declara

    })
  }
  loadfinalStage = () => {
    var data = {
      serialNumber: this.getAppId()
    }
    this.applicationService.loadfinalStage(data).subscribe((response: any) => {
      this.SName = response?.sname,
        this.mname = response?.mname,
        this.lname = response?.lname,
        this.appNation = response?.appNation,
        this.appAddress = response?.appAddress,
        this.appGender = response?.appGender,
        this.appDOB = response?.appDOB,
        this.appAge = response?.appAge,
        this.appMalesiblings = response?.appMalesiblings,
        this.appFemaleSiblings = response?.appFemaleSiblings,
        this.fatheersName = response?.fatheersName
      this.fatherOccu = response?.fatherOccu
      this.fatherPoWork = response?.fatherPoWork;
      this.primPhone = response?.primPhone
      this.secPhone = response?.secPhone
      this.fathAddress = response?.fathAddress
      this.fathEmail = response?.fathEmail
      this.fathRelationship = response?.fathRelationship
      this.fathNationality = response?.fathNationality
      this.fatherEduc = response?.fatherEduc
      this.isFatherAlive = response?.isFatherAlive,
        this.mothName = response?.mothName
      this.mothOccupation = response?.mothOccupation
      this.MothPofWork = response?.MothPofWork
      this.mothPriPhone = response?.mothPriPhone
      this.mothSecPhone = response?.mothSecPhone
      this.MothisAlive = response?.MothisAlive
      this.Mothrelationship = response?.Mothrelationship
      this.mothAddress = response?.mothAddress
      this.mothEducation = response?.mothEducation
      this.mothEmailAdress = response?.mothEmailAdress
      this.mothNationality = response?.mothNationality,
        this.hasGoogHealth = response?.hasGoogHealth,
        this.descofHealth = response?.descofHealth,
        this.hasNormalEye = response?.hasNormalEye,
        this.EyeProblem = response?.EyeProblem,
        this.hasNormalHearing = response?.hasNormalHearing,
        this.hearingProblem = response?.hearingProblem,
        this.foodAllergy = response?.foodAllergy,
        this.isadjustable = response?.isadjustable,
        this.applicantAttide = response?.applicantAttide,
        this.isImmuzed = response?.isImmuzed,
        this.traumaRelated = response?.traumaRelated,
        this.ptMarriageStatus = response?.ptMarriageStatus
      this.whopCommitment = response?.whopCommitment
      this.Title = response?.Title
      this.namePayee = response?.namePayee
      this.digiAddressPayee = response?.digiAddressPayee
      this.PayeeAdd = response?.PayeeAdd
      this.emailPayee = response?.emailPayee
      this.PhoneofPayee = response?.PhoneofPayee
      this.nameofInst = response?.nameofInst
      this.postalAddrInst = response?.postalAddrInst
      this.emailInst = response?.emailInst
      this.PhoneNumbInst = response?.PhoneNumbInst
      this.digitalAddressofInst = response?.digiAddressofInstitution,
        this.PlayEquip = response?.PlayEquip
      this.schoolActivites = response?.schoolActivites
      this.evaluationAllowed = response?.evaluationAllowed
      this.emergMedicalCare = response?.emergMedicalCare
      this.EmergContact1 = response?.EmergContact1
      this.EmergContact2 = response?.EmergContact2
      this.EmergContact3 = response?.EmergContact3
      this.famDocContact1 = response?.famDocContact1
      this.famDocContact2 = response?.famDocContact2
      this.famDocContact3 = response?.famDocContact3
      this.SchoolDoc = response?.SchoolDoc
      this.AmbService = response?.AmbService
      this.sendHospital = response?.sendHospital
      this.payMedExpense = response?.payMedExpense
      this.declara = response?.declara
    })
  }




  setSurname = () => {
    return this.SName
  }
  setMiddleName = () => {
    return this.mname;
  }
  setLastName = () => {
    return this.lname;
  }
  setNationality = () => {
    return this.appNation;
  }
  setApplicantAddress = () => {
    return this.appAddress;
  }
  setapplicantGender = () => {
    return this.appGender;
  }

  setApplicantDaofBirth = () => {
    return this.appDOB;
  }
  setApplicantAge = () => {
    return this.appAge
  }

  setApplicantMaleSling = () => {
    return this.appMalesiblings;
  }
  setApplicantFemaleSiblings = () => {
    return this.appFemaleSiblings;
  }

  //initializing applicants father's details
  setfatheersName = () => {
    return this.fatheersName;
  }
  setfatherOccupation = () => {
    return this.fatherOccu;
  }
  setfatherPlaceoofWork = () => {
    return this.fatherPoWork;
  }
  setPrimPhone = () => {
    return this.primPhone
  }
  setSecPhone = () => {
    return this.secPhone;
  }
  setFathAddress = () => {
    return this.fathAddress;
  }
  setFathEmail = () => {
    return this.fathEmail;
  }
  setFathRelationship = () => {
    return this.fathRelationship;
  }
  setFathNationality = () => {
    return this.fathNationality;
  }
  setFatherEduc = () => {
    return this.fatherEduc;
  }
  setIsFatherAlive = () => {
    return this.isFatherAlive
  }


  setMothName = () => {
    return this.mothName;
  }
  setMothOccupation = () => {
    return this.mothOccupation;
  }
  setMothPofWork = () => {
    return this.MothPofWork;
  }
  setMothPriPhone = () => {
    return this.mothPriPhone
  }
  setMothSecPhone = () => {
    return this.mothSecPhone
  }
  setMothisAlive = () => {
    return this.MothisAlive;
  }
  setMothrelationship = () => {
    return this.Mothrelationship;
  }
  setMothAddress = () => {
    return this.mothAddress
  }
  setMothEducation = () => {
    return this.mothEducation
  }
  setMothEmailAdress = () => {
    return this.mothEmailAdress
  }
  setMothNationality = () => {
    return this.mothNationality
  }

  //setting applicant healthdetails

  setHasGoogHealth = () => {
    return this.hasGoogHealth
  }
  setDescofHealth = () => {
    return this.descofHealth
  }
  setHasNormalEye = () => {
    return this.hasNormalEye
  }
  setEyeProblem = () => {
    return this.EyeProblem
  }
  setHasNormalHearing = () => {
    return this.hasNormalHearing
  }
  setHearingProblem = () => {
    return this.hearingProblem
  }
  setFoodAllergy = () => {
    return this.foodAllergy
  }
  setIsadjustable = () => {
    return this.isadjustable
  }
  setApplicantAttide = () => {
    return this.applicantAttide;
  }
  setIsImmuzed = () => {
    return this.isImmuzed
  }
  setTraumaRelated = () => {
    return this.traumaRelated
  }

  //setting payment details
  setPtMarriageStatus = () => {
    return this.ptMarriageStatus;
  }
  setWhopCommitment = () => {
    return this.whopCommitment;
  }
  setTitle = () => {
    return this.Title;
  }
  setNamePayee = () => {
    return this.namePayee;
  }
  setDigiAddressPayee = () => {
    return this.digiAddressPayee
  }
  serPayeeAdd = () => {
    return this.PayeeAdd;
  }
  setEmailPayee = () => {
    return this.emailPayee;
  }
  setPhoneofPayee = () => {
    return this.PhoneofPayee;
  }
  setNameofInst = () => {
    return this.nameofInst;
  }
  setPostalAddrInst = () => {
    return this.postalAddrInst;
  }
  setEmailInst = () => {
    return this.emailInst;
  }
  setPhoneNumbInst = () => {
    return this.PhoneNumbInst
  }
  setDigitalAddressofInst = () => {
    return this.digitalAddressofInst
  }


  setPlayEquip = () => {
    return this.PlayEquip;
  }
  setSchoolActivites = () => {
    return this.schoolActivites;
  }
  setEvaluationAllowed = () => {
    return this.evaluationAllowed;
  }
  setEmergMedicalCare = () => {
    return this.emergMedicalCare
  }
  setEmergContact1 = () => {
    this.EmergContact1;
  }
  setEmergContact2 = () => {
    return this.EmergContact2;
  }
  setEmergContact3 = () => {
    this.EmergContact3;
  }
  setFamDocContact1 = () => {
    return this.famDocContact1
  }
  setFamDocContact2 = () => {
    return this.famDocContact2;
  }
  setFamDocContact3 = () => {
    return this.famDocContact3
  }
  setSchoolDoc = () => {
    return this.SchoolDoc
  }
  setAmbService = () => {
    return this.AmbService;
  }
  setSendHospital = () => {
    return this.sendHospital;
  }
  setPayMedExpense = () => {
    return this.payMedExpense
  }
  setDeclara = () => {
    return this.declara
  }



  //  this.pdfData={
  //   SName :this.setSurname(),
  //     mname:this.setMiddleName(),
  //       lname:this.setLastName(),
  //       appNation : this.setNationality(),
  //       appAddress:this.setApplicantAddress(),
  //       appGender:this.setapplicantGender(),
  //       appDOB:this.setApplicantDaofBirth(),
  //       appAge:this.setApplicantAge(),
  //       appMalesiblings:this.setApplicantMaleSling(),
  //       appFemaleSiblings:this.setApplicantFemaleSiblings(),
  //       fatheersName:this.setfatheersName(),
  //     fatherOccu:this.setfatherOccupation(),
  //     fatherPoWork:this.setfatherPlaceoofWork(),
  //     primPhone:this.setPrimPhone(),
  //     secPhone:this.setSecPhone(),
  //     fathAddress:this.setFathAddress(),
  //     fathEmail:this.setFathEmail(),
  //     fathRelationship:this.setFathRelationship(),
  //     fathNationality:this.setFathNationality(),
  //     fatherEduc:this.setFatherEduc(),
  //     isFatherAlive:this.setIsFatherAlive(),
  //     mothName:this.setMothName(),
  //     mothOccupation:this.setMothOccupation(),
  //     MothPofWork:this.setMothPofWork(),
  //     mothPriPhone:this.setMothPriPhone(),
  //     mothSecPhone:this.setMothSecPhone(),
  //     MothisAlive:this.setMothisAlive(),
  //     Mothrelationship:this.setMothrelationship(),
  //     mothAddress:this.setMothAddress(),
  //     mothEducation:this.setMothEducation(),
  //     mothEmailAdress:this.setMothEmailAdress(),
  //     mothNationality:this.setMothNationality(),
  //     hasGoogHealth:this.setHasGoogHealth(),
  //     descofHealth:this.setDescofHealth(),
  //     hasNormalEye:this.setHasNormalEye(),
  //     EyeProblem:this.setEyeProblem(),
  //     hasNormalHearing:this.setHasNormalHearing(),
  //     hearingProblem:this.setHearingProblem(),
  //     foodAllergy:this.setFoodAllergy(),
  //     isadjustable:this.setIsadjustable(),
  //     applicantAttide:this.setApplicantAttide(),
  //     isImmuzed:this.setIsImmuzed(),
  //     traumaRelated:this.setTraumaRelated(),
  //     ptMarriageStatus:this.setPtMarriageStatus(),
  //     whopCommitment:this.setWhopCommitment(),
  //     Title:this.setTitle(),
  //     namePayee:this.setNamePayee(),
  //     digiAddressPayee:this.setDigiAddressPayee(),
  //     PayeeAdd:this.serPayeeAdd(),
  //     emailPayee:this.setEmailPayee()
  //     PhoneofPayee:this.setPhoneofPayee(),
  //     nameofInst:this.setNameofInst(),
  //     postalAddrInst:this.setDigitalAddressofInst(),
  //     emailInst:this.setEmailInst(),
  //     PhoneNumbInst:this.setPhoneNumbInst(),
  //     digitalAddressofInst:this.setDigitalAddressofInst(),
  //     PlayEquip:this.setPlayEquip(),
  //     schoolActivites:this.setSchoolActivites(),
  //     evaluationAllowed:this.setEvaluationAllowed(),
  //     emergMedicalCare:this.setEmergMedicalCare(),
  //     EmergContact1:this.setEmergContact1(),
  //     EmergContact2 :this.setEmergContact2(),
  //     EmergContact3:this.setEmergContact3(),
  //     famDocContact1:this.setFamDocContact1(),
  //     famDocContact2:this.setFamDocContact2(),
  //     famDocContact3:this.setFamDocContact3(),
  //     SchoolDoc : this.setSchoolDoc(),
  //     AmbService:this.setAmbService(),
  //     sendHospital :this.sendHospital(),
  //     payMedExpense :this.payMedExpense(),
  //     declara:this.setDeclara()
  // }
}