import { Component, inject, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { Billservice } from '../../services/billservice';
import { Learnerservice } from '../../services/learnerservice';
import { BillsInterface } from '../../interfaces/bills-interface';
import { MessageService } from 'primeng/api';
import { response } from 'express';
import { Bus, Canteen, Fee, PTA, Speciallevy, UniformInt } from '../../interfaces/accountinterface';
import { TableModule } from 'primeng/table';


@Component({
  standalone: true,
  selector: 'generate-termly-bill',
  imports: [PanelModule,TableModule],
  templateUrl: './generate-termly-bill.html',
  styleUrl: './generate-termly-bill.css',
})
export class GenerateTermlyBill implements OnInit {
  AdmissionNumber: any;
  CurrentGrade: any
  currentTerm: any
  academicYear: any
  message: any
  billID: any
  currentTermDetails: BillsInterface[] = []
  feeInfo:Fee[]=[]
  ptadueInfo:PTA[]=[]
  speciallevyInfo:Speciallevy[]=[]
  uniformInfo:UniformInt[]=[]
  busInfo:Bus[]=[];
  canteenInfo:Canteen[]=[]
  private messageService = inject(MessageService);
  
  constructor(private billservcie: Billservice, private learnerservcie: Learnerservice) { }
  ngOnInit(): void {
    if (this.learnerservcie.getCurrentGrade()===undefined) {
    } else {
      this.CurrentGrade = this.learnerservcie.getCurrentGrade()

    }
    if (this.learnerservcie.getAdmisssionNumber()===undefined) {
    } else {
      this.AdmissionNumber = this.learnerservcie.getAdmisssionNumber()
    }
    if (!this.learnerservcie.getCurrentTerm()===undefined) {
    } else {
      this.currentTerm = this.learnerservcie.getCurrentTerm()
    }
    if (this.learnerservcie.getAcademicYear()===undefined) {
    } else {
      this.academicYear = this.learnerservcie.getAcademicYear()
    }

    this.termdetails();
    this.loadSchoolFee();
    this.loadPtaDues()
    this.specialLevy()
    this.uniformcost()
    this.busfee()
    this.Canteen()
  }
  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  genranCode = () => {
    let randomInteger: number = this.getRandomInt(1, 1000000); // Generates a random integer between 1 and 10
    this.billID = "BBL-BL-" + new Date().getFullYear() + randomInteger
  }

  termdetails = () => {
    this.billservcie.loadTermDetail().subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message, life: 5000 });
      } else {
        if (response?.data) {
          this.currentTermDetails = response?.data
          // console.log(this.currentTermDetails)
        } else {
          this.message = response?.message
          this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message, life: 5000 });
        }
      }
    })
  }

  loadSchoolFee = () => {
    let data = {
      grade: this.CurrentGrade,
      AdmissionNumber: this.AdmissionNumber,
      term: this.currentTerm,
      academicYear: this.academicYear
    }
    this.billservcie.generatebill(data).subscribe((response:any)=>{
      if(response?.message){
        this.message=response?.message
      }else{
        if(response?.data){
          this.feeInfo=response?.data
        }else{
          this.message='Unknown error has occured'
        }
      }
    })
  }


 
  loadPtaDues = () => {
    let data = {
      grade: this.CurrentGrade,
      AdmissionNumber: this.AdmissionNumber,
      term: this.currentTerm,
      academicYear: this.academicYear
    }
    this.billservcie.loadPtaDues(data).subscribe((response:any)=>{
      if(response?.message){
        this.message=response?.message
      }else{
        if(response?.data){
          this.ptadueInfo=response?.data
        }else{
          this.message='Unknown error has occured'
        }
      }
    })
  } 

   
  specialLevy = () => {
    let data = {
      grade: this.CurrentGrade,
      AdmissionNumber: this.AdmissionNumber,
      term: this.currentTerm,
      academicYear: this.academicYear
    }


    this.billservcie.specialLevy(data).subscribe((response:any)=>{
      if(response?.message){
        this.message=response?.message
      }else{
        if(response?.data){
          this.speciallevyInfo=response?.data
        }else{
          this.message='Unknown error has occured'
        }
      }
    })
  }


  
  uniformcost = () => {
    let data = {
      grade: this.CurrentGrade,
      AdmissionNumber: this.AdmissionNumber,
      term: this.currentTerm,
      academicYear: this.academicYear
    }


    this.billservcie.uniformcost(data).subscribe((response:any)=>{
      if(response?.message){
        this.message=response?.message
      }else{
        if(response?.data){
          this.uniformInfo=response?.data
        }else{
          this.message='Unknown error has occured'
        }
      }
    })
  }


   busfee = () => {
    let data = {
      grade: this.CurrentGrade,
      AdmissionNumber: this.AdmissionNumber,
      term: this.currentTerm,
      academicYear: this.academicYear
    }


    this.billservcie.busfee(data).subscribe((response:any)=>{
      if(response?.message){
        this.message=response?.message
      }else{
        if(response?.data){
          this.busInfo=response?.data
        }else{
          this.message='Unknown error has occured'
        }
      }
    })
  }

    Canteen = () => {
    let data = {
      grade: this.CurrentGrade,
      AdmissionNumber: this.AdmissionNumber,
      term: this.currentTerm,
      academicYear: this.academicYear
    }


    this.billservcie.Canteen(data).subscribe((response:any)=>{
      if(response?.message){
        this.message=response?.message
      }else{
        if(response?.data){
          this.canteenInfo=response?.data
        }else{
          this.message='Unknown error has occured'
        }
      }
    })
  }

}
