import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Learnerservice } from '../../services/learnerservice';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { FluidModule } from 'primeng/fluid'; // Import the module
import { CommonModule } from '@angular/common';
import { Table, TableModule, TablePageEvent } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CdkNoDataRow } from "@angular/cdk/table";
import { ToggleSwitchChangeEvent, ToggleSwitchModule } from 'primeng/toggleswitch';
import { PanelModule } from 'primeng/panel';
import { Component, signal, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BillsInterface, LearenrBillHistory } from '../../interfaces/bills-interface';
import { Billservice } from '../../services/billservice';


@Component({
  selector: 'sepecial-levy-schedule',
  imports: [PanelModule,
    ToastModule,
    FormsModule,
    SelectModule, DividerModule,
    InputNumberModule,
    FluidModule,
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    TagModule,
    ButtonModule,
    ToggleSwitchModule,],
  templateUrl: './sepecial-levy-schedule.html',
  styleUrl: './sepecial-levy-schedule.css',
})
export class SepecialLevySchedule {


  setCurrent($event: ToggleSwitchChangeEvent) {
    this.isCurrentBill = $event.checked
  }

  AdmissionNumber: any;
  CurrentGrade: any
  currentTerm: any
  currentSchoolFee: number = 0
  currentTermDetails: BillsInterface[] = []
  currentFeeData: any
  fee_In_Arrear_Data: any
  arrears: number = 0;
  amountDue: number = 0;
  message: any
  academicYear: any
  isCurrentBill: boolean = false
  constructor(private billService: Billservice, private learnerservcie: Learnerservice) {
  }

  statuses = signal<any[]>([]);
  loading = signal(true);
  searchValue = signal('');
  activityValues = signal<number[]>([0, 100]);
  billID: any;
  LearnerbillHistory: LearenrBillHistory[] = [];
  ngOnInit(): void {

    this.CurrentGrade = this.learnerservcie.getCurrentGrade()
    this.AdmissionNumber = this.learnerservcie.getAdmisssionNumber()
    this.currentTerm = this.learnerservcie.getCurrentTerm()
    this.academicYear = this.learnerservcie.getAcademicYear()

    this.termdetails();
    this.load_current_special_levy()
    this.Load_special_levy_Arrears()
  
    this.genranCode()
    this.Load_special_levy_History()
      this.setAmountDue();
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  genranCode = () => {
    let randomInteger: number = this.getRandomInt(1, 1000000); // Generates a random integer between 1 and 10
    this.billID = "FNL-BL-" + new Date().getFullYear() + randomInteger
  }



  private messageService = inject(MessageService);

  termdetails = () => {
    this.billService.loadTermDetail().subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
      } else {
        if (response?.data) {
          this.currentTermDetails = response?.data
          console.log(this.currentTermDetails)
        } else {
          this.message = response?.message
          this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
        }
      }
    })
  }

  load_current_special_levy = () => {
    let data = {
      grade: this.CurrentGrade,
      term: this.currentTerm
    }

    this.billService.load_current_special_levy(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
      } else {
        if (response?.data) {

          this.currentSchoolFee = response?.data[0].currentBill

        } else {

          this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
        }
      }
    })
  }
  Load_special_levy_Arrears = () => {
    let data = {
      admissionNimber: this.AdmissionNumber
    }
    this.billService.Load_special_levy_Arrears(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
      } else {
        if (response?.data) {

          this.arrears = response?.data[0].currentBalance
        } else {
          if (response?.Norecord) {

            this.arrears = 0
          } else {
            this.message = response?.message
            this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
          }
        }
      }
    })
  }
  setAmountDue = () => {
    setTimeout(() => {
      console.log('current fee', this.currentSchoolFee)

      this.amountDue = this.arrears + this.currentSchoolFee
      console.log('this amount due ', this.amountDue, this.arrears, this.currentSchoolFee)
    }, 1000)

  }

  clear(table: Table) {
    table.clear();
    this.searchValue.set('');
  }
  //     setCurrent($event: SelectChangeEvent) {

  // }
  submit_special_levy = () => {
    let data = {
      billID: this.billID,
      academicyear: this.currentTermDetails[0].sessionID,
      term: this.currentTerm,
      grade: this.CurrentGrade,
      Department: this.currentTermDetails[0].Department,
      AdmissionNumber: this.AdmissionNumber,
      currentFee: this.currentSchoolFee,
      arrears: this.arrears,
      amountDue: this.amountDue,
      dateDeposit: new Date(),
      isCurrentBill: this.isCurrentBill
    }
    this.billService.submit_special_levy(data).subscribe((response: any) => {

      if (response?.message) {
        this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
      } else {
        if (response?.success) {
          this.message = response?.success
          this.Load_special_levy_History()
          this.messageService.add({ severity: 'success', summary: 'Messgae', detail: this.message,life:5000 });
        } else {
          this.message = response?.message
          this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
        }
      }
    })
  }

  Load_special_levy_History = () => {
    let data = {
      AdmissionNumber: this.AdmissionNumber,
    }
    this.billService.Load_special_levy_History(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
      } else {
        if (response?.data) {
          console.log(response?.data)
          this.LearnerbillHistory = response?.data
        } else {

          this.message = response?.message
          this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
        }
      }
    })
  }

  first: number = 0;
  rows: number = 10;

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }


  pageChange($event: TablePageEvent) {
    this.first = $event.first;
    this.rows = $event.rows;
  }
  isLastPage(): boolean {
    return this.LearnerbillHistory ? this.first + this.rows >= this.LearnerbillHistory.length : true;
  }

  isFirstPage(): boolean {
    return this.LearnerbillHistory ? this.first === 0 : true;
  }
  Drop_special_levy(_t111: any) {
    let data = {
      AdmissionNumber: this.AdmissionNumber
    }
    this.billService.Drop_special_levy(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
      } else {
        if (response?.success) {
          this.message = response?.success
          this.Load_special_levy_History()
          this.messageService.add({ severity: 'success', summary: 'Messgae', detail: this.message,life:5000 });
        } else {
          this.message = response?.message
          this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message });
        }
      }
    })
  }
}