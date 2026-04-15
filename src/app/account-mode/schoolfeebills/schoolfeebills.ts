import { Component, inject, OnInit, signal } from '@angular/core';
import { LearneraccountServcie } from '../../services/learneraccountservoce';
import { response } from 'express';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { academicTerm, academicYear, Accountinterface, Bills, Grades } from '../../interfaces/accountinterface';
import { ToolbarModule } from 'primeng/toolbar';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToggleSwitchChangeEvent, ToggleSwitchModule } from 'primeng/toggleswitch';
import { NgClass } from '@angular/common'; // Or CommonModule

import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common'; // 1. Import DatePipe
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'schoolfeebills',
  imports: [ToastModule,
    SelectModule,
    FormsModule,
    ToolbarModule,
    DividerModule,
  InputNumberModule,
  ToggleSwitchModule,
  NgClass,
  TagModule,
  ProgressBarModule,
  SliderModule,
  InputIconModule,
  IconFieldModule,
  TableModule,
  ButtonModule,
  DatePipe,
  CurrencyPipe,
  
],
  templateUrl: './schoolfeebills.html',
  styleUrl: './schoolfeebills.css',
  providers: [MessageService]
})
export class Schoolfeebills implements OnInit {
submitBiil() {
throw new Error('Method not implemented.');
}
setCurrentBill($event: ToggleSwitchChangeEvent) {
throw new Error('Method not implemented.');
}
setasCurrentBill($event: ToggleSwitchChangeEvent) {
throw new Error('Method not implemented.');
}
Arrears: any;
CurrentBill: any;
isCurrent:boolean=false
  getSelecteGrades($event: SelectChangeEvent) {
    console.log($event.value)
  }
  getSelecteDepartment($event: SelectChangeEvent) {
    console.log($event.value)
  }

  constructor(private accountservice: LearneraccountServcie) { }
  private messageService = inject(MessageService);
  message: any
  departmentData: Accountinterface[] = []
  selectedDepartemnt: Accountinterface | undefined;
  gradesData: Grades[] = []
  selectedGrades: Grades | undefined
  academicTerm: academicTerm[] = []
  selectedTerm: academicTerm | undefined
  academicyear: academicYear[] = []
  selectedAcademicyear: academicYear | undefined
  billID:any
billHistory:Bills[]=[]
    // representatives = signal<Representative[]>([]);
    statuses = signal<any[]>([]);
    loading = signal(true);
    searchValue = signal('');
    activityValues = signal<number[]>([0, 100]);

  ngOnInit(): void {
    this.department()
    this.grades()
    this.getTerm()
    this.getAcademicYears()
    this.genranCode()
    this.getBillhistory()
  }
getBillhistory=()=>{
 return this.accountservice.getBillhistory().subscribe((response: any) => {
      if (response?.data) {
        this.billHistory = response?.data
      this.loading.set(false)
      } else {
        if (response?.message) {
          this.message = response?.message
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
                this.loading.set(false)
        }else{
                this.loading.set(false)
        }
      }
    })
}

  department = () => {
    return this.accountservice.department().subscribe((response: any) => {
      if (response?.data) {
        this.departmentData = response?.data
        //  console.log(this.departmentData)
        // this.routerLink.navigate(['learneraccount'], { relativeTo: this.route });
        // this.isLearnerAccountvisible.set(false)
      } else {
        if (response?.message) {
          this.message = response?.message
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
        }
      }
    })


  }


  grades = () => {
    return this.accountservice.grades().subscribe((response: any) => {
      if (response?.data) {
        this.gradesData = response?.data
        //  console.log(this.departmentData)
        // this.routerLink.navigate(['learneraccount'], { relativeTo: this.route });
        // this.isLearnerAccountvisible.set(false)
      } else {
        if (response?.message) {
          this.message = response?.message
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
        }
      }
    })


  }


  getTerm = () => {
    return this.accountservice.academicTerm().subscribe((response: any) => {
      if (response?.data) {
        this.academicTerm = response?.data
        //  console.log(this.departmentData)
        // this.routerLink.navigate(['learneraccount'], { relativeTo: this.route });
        // this.isLearnerAccountvisible.set(false)
      } else {
        if (response?.message) {
          this.message = response?.message
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
        }
      }
    })


  }

  getAcademicYears = () => {
    return this.accountservice.academicYear().subscribe((response: any) => {
      if (response?.data) {
        this.academicyear = response?.data
         console.log(this.academicyear)
        // this.routerLink.navigate(['learneraccount'], { relativeTo: this.route });
        // this.isLearnerAccountvisible.set(false)
      } else {
        if (response?.message) {
          this.message = response?.message
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
        }
      }
    })


  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  genranCode = () => {
    let randomInteger: number = this.getRandomInt(1, 1000000); // Generates a random integer between 1 and 10
    this.billID = "SF-ID-"+new Date().getFullYear() + randomInteger
  }




  clear(table: Table) {
        table.clear();
        this.searchValue.set('');
    }

    // getSeverity(status: string) {
    //     switch (status) {
    //         case 'unqualified':
    //             return 'danger';
        
    //         case 'qualified':
    //             return 'success';
        
    //         case 'new':
    //             return 'info';
        
    //         case 'negotiation':
    //             return 'warn';
        
    //         case 'renewal':
    //             return null;
    //     }
    //   }
}
