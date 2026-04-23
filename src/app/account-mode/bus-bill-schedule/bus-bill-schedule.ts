import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FluidModule } from 'primeng/fluid';
import { InputNumberModule } from 'primeng/inputnumber';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { Table, TableModule, TablePageEvent } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchChangeEvent, ToggleSwitchModule } from 'primeng/toggleswitch';
import { Billservice } from '../../services/billservice';
import { Learnerservice } from '../../services/learnerservice';
import { MessageService } from 'primeng/api';
import { BillsInterface, CanteenBillHistory } from '../../interfaces/bills-interface';

@Component({
  selector: 'bus-bill-schedule',
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
  templateUrl: './bus-bill-schedule.html',
  styleUrl: './bus-bill-schedule.css',
})
export class BusBillSchedule {

  setCurrent($event: ToggleSwitchChangeEvent) {
    this.setCurrentBill = $event.checked
  }

  AdmissionNumber: any;
  CurrentGrade: any
  currentTerm: any
  dailyCanteenFee: number = 0
  currentTermDetails: BillsInterface[] = []
  currentFeeData: any
  fee_In_Arrear_Data: any
  arrears: number = 0;
  amountDue: number = 0;
  message: any
  academicYear: any
  selectedYear:any
  setCurrentBill: boolean = false
  daysInterm:number=0
  constructor(private billService: Billservice, private learnerservcie: Learnerservice) {
  }

  statuses = signal<any[]>([]);
  loading = signal(true);
  searchValue = signal('');
  activityValues = signal<number[]>([0, 100]);
  billID: any;
  LearnerbillHistory: CanteenBillHistory[] = [];
  ngOnInit(): void {

    this.CurrentGrade = this.learnerservcie.getCurrentGrade()
    this.AdmissionNumber = this.learnerservcie.getAdmisssionNumber()
    this.currentTerm = this.learnerservcie.getCurrentTerm()
    this.academicYear = this.learnerservcie.getAcademicYear()



    this.load_Current_Bus_bill_schedule()
    this.getFeeinArrears()
    this.setAmountDue();
    this.genranCode()
    this.load_bus_fee_history_schedule()
        this.termdetails();
  
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  genranCode = () => {
    let randomInteger: number = this.getRandomInt(1, 1000000); // Generates a random integer between 1 and 10
    this.billID = "BS-BL-" + new Date().getFullYear() + randomInteger
  }



  private messageService = inject(MessageService);

  termdetails = () => {
    this.billService.loadTermDetail().subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({ severity: 'success', summary: 'Messgae', detail: this.message, life: 3000 });
      } else {
        if (response?.data) {
          this.currentTermDetails = response?.data
          //  this.selectedYear=response?.data
 
            this.getDaysinTerm()
        } else {
          this.message = response?.message
          this.messageService.add({
            severity: 'success', summary: 'Messgae', detail: this.message, key: 'br',
            life: 3000
          });
        }
      }
    })
  }

  load_Current_Bus_bill_schedule = () => {
    let data = {
      grade: this.CurrentGrade,
      term: this.currentTerm
    }
    console.log('current bill',data)
    this.billService.load_Current_Bus_bill_schedule(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({
          severity: 'success', summary: 'Messgae', detail: this.message, key: 'br',
          life: 3000
        });
      } else {
        if (response?.data) {
          // canteenbills.cbillNumber,canteenbills.currentBill,canteenbills.isCurrentbill
          this.dailyCanteenFee = response?.data[0].currentBill

        } else {

          this.messageService.add({
            severity: 'success', summary: 'Messgae', detail: this.message, key: 'br',
            life: 3000
          });
        }
      }
    })
  }
  getFeeinArrears = () => {
    let data = {
      admissionNimber: this.AdmissionNumber
    }
    this.billService.Load_bus_fee_arears(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({
          severity: 'success', summary: 'Messgae', detail: this.message, life: 3000});
      } else {
        if (response?.data) {
          this.arrears = response?.data[0].TermlyBalance
        } else {
          if (response?.Norecord) {
            this.arrears =0
          } else {
            this.message = response?.message
            this.messageService.add({
              severity: 'success', summary: 'Messgae', detail: this.message,life: 3000
            });
          }
        }
      }
    })
  }
  getDaysinTerm = () => {

    let data = {
      term: this.currentTerm,
      academicYear: this.currentTermDetails[0].sessionID
    }

    this.billService.termBegins(data).subscribe((response: any) => {
      if (response?.message) {
          this.messageService.add({
              severity: 'success', summary: 'Messgae', detail: this.message,life: 3000
            });
      } else {
        if (response?.data) {
          this.daysInterm=response?.data[0].DaysinTerm
          console.log('Days in term',this.daysInterm)
        } else {

        }
      }
    })
  }
  totalAmountInWeeka:number=0;
  monthlyAmount:number=0
  termilyAmount:number=0;

  setAmountDue = () => {
    setTimeout(() => {
      this.totalAmountInWeeka=this.dailyCanteenFee*5
      this.monthlyAmount=this.dailyCanteenFee*21
      this.termilyAmount=this.dailyCanteenFee*this.daysInterm

      this.amountDue = this.arrears + this.termilyAmount
      console.log('this amount due ', this.amountDue, this.arrears, this.dailyCanteenFee)
    }, 1000)

  }

  clear(table: Table) {
    table.clear();
    this.searchValue.set('');
  }
  //     setCurrent($event: SelectChangeEvent) {

  // }
  submit_current_fee_schedule = () => {
    let data = {
      billID: this.billID,
      academicyear: this.currentTermDetails[0].sessionID,
      term: this.currentTerm,
      grade: this.CurrentGrade,
      Department: this.currentTermDetails[0].Department,
      AdmissionNumber: this.AdmissionNumber,
      currentFee: this.dailyCanteenFee,
      weeklyAmount:this.totalAmountInWeeka,
      monthlyAmount:this.monthlyAmount,
      termlyAmount:this.termilyAmount,
      arrears: this.arrears,
      amountDue: this.amountDue,
      dateDeposit: new Date(),
      isCurrentBill: this.setCurrentBill
    }
    console.log('Submitting Data', data)
    this.billService.submit_current_fee_schedule(data).subscribe((response: any) => {

      if (response?.message) {
        this.message = response?.message
        this.messageService.add({
          severity: 'danger', summary: 'Messgae', detail: this.message,life: 3000
        });
      } else {
        if (response?.success) {
          this.message = response?.success
          this.load_bus_fee_history_schedule()
          this.messageService.add({
            severity: 'success', summary: 'Messgae', detail: this.message,life: 3000
          });
        } else {
          this.message = response?.message
          this.messageService.add({
            severity: 'danger', summary: 'Messgae', detail: this.message, life: 3000
          });
        }
      }
    })
  }

  load_bus_fee_history_schedule = () => {
    let data = {
      AdmissionNumber: this.AdmissionNumber,
    }
    this.billService.load_bus_fee_history_schedule(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({
          severity: 'danger', summary: 'Messgae', detail: this.message,life: 3000
        });
      } else {
        if (response?.data) {

          this.LearnerbillHistory = response?.data
        } else {

          this.message = response?.message
          this.messageService.add({
            severity: 'danger', summary: 'Messgae', detail: this.message,life: 3000
          });
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

  drop_bus_fee_schedule(_t111: any) {
    let data = {
      AdmissionNumber: this.AdmissionNumber
    }
    this.billService.drop_bus_fee_schedule(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({
          severity: 'danger', summary: 'Messgae', detail: this.message, 
          life: 3000
        });
      } else {
        if (response?.success) {
          this.message = response?.success
          this.load_bus_fee_history_schedule()
          this.messageService.add({
            severity: 'success', summary: 'Messgae', detail: this.message, 
            life: 3000
          });
        } else {
          this.message = response?.message
          this.messageService.add({
            severity: 'danger', summary: 'Messgae', detail: this.message,   life: 3000
          });
        }
      }
    })
  }
}

