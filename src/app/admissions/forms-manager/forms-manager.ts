import { Component, inject, OnInit, signal } from '@angular/core';
import { FormGrades, PinAcademicyear } from '../../interfaces/admission-data';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { Divider } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { Table, TableModule } from 'primeng/table';
import { Toast } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ToolbarModule } from 'primeng/toolbar';
import { AdmissionSvcService } from '../../services/admission-svc.service';
import { FluidModule } from 'primeng/fluid';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormPrices } from '../../interfaces/accountinterface';
import { AccountService } from '../../services/account-service';
import { response } from 'express';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'forms-manager',
  imports: [FormsModule,
    DialogModule,
    AvatarModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    InputNumberModule,
    CardModule,
    Toast,
    Divider,
    SelectModule,
    MessageModule,
    ToolbarModule,
    TableModule,
    ToggleSwitchModule,
    DatePipe,
    FluidModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './forms-manager.html',
  styleUrl: './forms-manager.css',
  providers:[MessageService]
})
export class FormsManager implements OnInit {
  messageservice=inject(MessageService)
  dropBill(_t106: any) {
    console.log(_t106)
    let data={
      price_number:_t106?.price_number
    }
    this.accountservice.dropFormPrice(data).subscribe((response:any)=>{
            if (response?.message) {
        this.message=response?.message
          this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message,life:5000 });
      } else {
        if(response?.success){
          this.message=response?.success
          this.loadPrices()
            this.messageservice.add({ severity: 'success', summary: 'Success', detail: this.message,life:5000 });
        }
      }
    })
  }


  constructor(private admissionservcie: AdmissionSvcService, private accountservice: AccountService) {

  }
  ngOnInit(): void {
    this.loadYears()
    this.loadGrades();
    this.genranCode();
    this.loadPrices()
  }
  message: any
  academicYearData: PinAcademicyear[] | any
  selectedYear: PinAcademicyear | any
  gradesData: FormGrades[] | any
  selectedGrde: FormGrades | any
  Price: number = 0;
  priceNumber: any;
  price_Number: any
  formPrices: FormPrices[] | any
  searchValue = signal('');
  activityValues = signal<number[]>([0, 100]);


  loadPrices = () => {
    this.accountservice.loadPrices().subscribe((response: any) => {
      if (response?.message) {
        this.message=response?.message
          this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message,life:5000 });
      } else {
        if(response?.data){
          this.formPrices=response?.data
            this.messageservice.add({ severity: 'success', summary: 'Success', detail: this.message,life:5000 });
        }
      }
    })
  }




  loadYears = async () => {
    this.admissionservcie.loadcureentadmissionyear()
    this.academicYearData = this.admissionservcie.PIN_ACADEMIC_YEAR
    // console.log(this.academicYearData)

  }

  loadGrades = async () => {
    this.admissionservcie.loadGrades()
    this.gradesData = this.admissionservcie.FORM_PRICE_GRADES
    // console.log('The Grades: ', this.gradesData)

  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  genranCode = () => {
    const randomInteger = this.getRandomInt(1, 10000); // Generates a random integer between 1 and 10
    this.price_Number = 'FPCRM' + randomInteger


  }
  clear(table: Table) {
    table.clear();
    this.searchValue.set('');
  }

    submitPrice() {
      this.genranCode()
      let data={
        price_number:this.price_Number,
        price_value:this.Price,
        academic_grade:this.selectedGrde?.SerialNumber,
        academic_year:this.selectedYear?.sessionID,
        date_posted:new Date(),
        price_status:true
      }
      console.log(data)
      this.accountservice.submitprices(data).subscribe((response:any)=>{
        if (response?.message) {
        this.message=response?.message
          this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message,life:5000 });
      } else {
        if(response?.success){
          this.message=response?.success
          this.loadPrices()
            this.messageservice.add({ severity: 'success', summary: 'Success', detail: this.message,life:5000 });
        }
      }
      })
  }
}
