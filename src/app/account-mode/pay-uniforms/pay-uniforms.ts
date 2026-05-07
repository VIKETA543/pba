import { Component, inject, OnInit, signal } from '@angular/core';
import { LearneraccountServcie } from '../../services/learneraccountservoce';
import { Accountinterface, FeepaymentHistory } from '../../interfaces/accountinterface';
import { MessageService } from 'primeng/api';
import { NgClass, DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ToolbarModule } from 'primeng/toolbar';
import { Learnerservice } from '../../services/learnerservice';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
@Component({
  selector: 'pay-uniforms',
  imports: [ToastModule,
    SelectModule,
    FormsModule,
    ToolbarModule,
    DividerModule,
    InputNumberModule,
    ToggleSwitchModule,
    TagModule,
    ProgressBarModule,
    SliderModule,
    InputIconModule,
    IconFieldModule,
    TableModule,
    ButtonModule,
    DatePipe,
    CurrencyPipe,
    InputTextModule,
    DialogModule,
    MessageModule],
  templateUrl: './pay-uniforms.html',
  styleUrl: './pay-uniforms.css',
   providers: [MessageService]
})
export class PayUniforms {

  learnerData: Accountinterface[] | any
  message: any
  accountHistory: FeepaymentHistory[] = []
  messageservice = inject(MessageService)
  loading = signal(false)
  statuses = signal<any[]>([]);
  searchValue = signal('');
  activityValues = signal<number[]>([0, 100]);
  totalBill: number = 0
  totalPaid: number = 0
  sumBalance: number = 0
  billNumber: any
  parenBillNumber: any
  PaymentNumber: any
  constructor(private learnerAccountservice: LearneraccountServcie, private learnerservice: Learnerservice) {

    this.learnerData = this.learnerservice.learnerData
    // console.log('The Data=>',this.learnerData)
    this.getAccountHistory()
    this.loadFeebalance();
  }
  ngOnInit(): void {

  }



  getAccountHistory = () => {
    let data = {
      adminssionNumber: this.learnerData[0].AdmissionNumber
    }
    this.learnerAccountservice.loadUniformHistory(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageservice.add({ severity: 'error', summary: 'Messgae', detail: this.message });
      } else {
        if (response?.data) {
          this.accountHistory = response?.data
        } else {
          if (response?.noreults) {
            this.message = response?.noreults
            this.messageservice.add({ severity: 'info', summary: 'Messgae', detail: this.message });
          }
        }
      }
    })
  }


  loadFeebalance = () => {
    let data = {
      adminssionNumber: this.learnerData[0].AdmissionNumber,
      sessionID: this.learnerservice.learenracademicData[0].sessionID,
      Tid: this.learnerservice.learenracademicData[0].OpenedTerm
    }
    this.learnerAccountservice.loadUniformbalance(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageservice.add({ severity: 'error', summary: 'Messgae', detail: this.message });
      } else {
        if (response?.totalBill) {

          this.totalBill = response?.totalBill
          this.totalPaid = response?.sumpaid
          this.sumBalance = response?.balance
          this.billNumber = response?.billNumber
          this.parenBillNumber = response?.parenBillNumber
        } else {
          if (response?.noreults) {
            this.message = 'Unknown error has occured'
            this.messageservice.add({ severity: 'info', summary: 'Messgae', detail: this.message });
          }
        }
      }
    })
  }



  clear(table: Table) {
    table.clear();
    this.searchValue.set('');
  }

  dropCanteenBill(arg0: FeepaymentHistory[]) {
    alert('Not yet implemented')
  }
  isPaying = signal(false)
  amountToPay: number = 0;
  newBalance: number = 0;
  payFee = () => {
    this.genranCode();
    this.isPaying.set(true)
  }
  submiPayment = () => {

    let data = {
      billNumber: this.billNumber,
      PaymentNumber: this.PaymentNumber,
      AdmissionNumber: this.learnerData[0].AdmissionNumber,
      sessionID: this.learnerservice.learenracademicData[0].sessionID,
      Tid: this.learnerservice.learenracademicData[0].OpenedTerm,
      parenBillNumber: this.parenBillNumber,
      grade: this.learnerData[0].SerialNumber,
      amountToPay: this.amountToPay,
      balance: this.newBalance,
      date: new Date(),
      isCurrent: true

    }
    this.learnerAccountservice.postUniformPayment(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message });
      } else {
        if (response?.success) {
          this.getAccountHistory()
          this.loadFeebalance();
          this.message = response?.success
          this.messageservice.add({ severity: 'success', summary: 'Success', detail: this.message });
        } else {
          this.message = 'Unknown error has occured'
          this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message });
        }
      }
    })

  }
  calculatePayment = () => {
    if (this.sumBalance > 0) {
      if (this.amountToPay > this.sumBalance) {
        this.message = 'Amount entered cannot be greater that account balance'
        this.messageservice.add({ severity: 'info', summary: 'Messgae', detail: this.message, life: 5000 });
      } else {

        this.newBalance = this.sumBalance - this.amountToPay
      }
    } else {
      this.message = 'Account Balance is 0'
      this.messageservice.add({ severity: 'info', summary: 'Messgae', detail: this.message, life: 5000 });
    }

  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  genranCode = () => {
    let randomInteger: number = this.getRandomInt(1, 1000000); // Generates a random integer between 1 and 10
    this.PaymentNumber = "CNT-BL-" + new Date().getFullYear() + randomInteger
  }

}
