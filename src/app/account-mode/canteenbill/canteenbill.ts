import { Component, inject, signal } from '@angular/core';
import { LearneraccountServcie } from '../../services/learneraccountservoce';
import { Billservice } from '../../services/billservice';
import { MessageService } from 'primeng/api';
import { academicTerm, academicYear, Accountinterface, Canteen, Grades } from '../../interfaces/accountinterface';
import { Table, TableModule } from 'primeng/table';
import { NgClass, DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchChangeEvent, ToggleSwitchModule } from 'primeng/toggleswitch';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  standalone:true,
  selector: 'canteenbill',
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
  CurrencyPipe,InputTextModule],
  templateUrl: './canteenbill.html',
  styleUrl: './canteenbill.css',
})
export class Canteenbill {

  constructor(private accountservice: LearneraccountServcie, private billservice:Billservice) { }
  private messageService = inject(MessageService);
  message: any
  departmentData: Accountinterface[] = []
  selectedDepartemnt:any
  gradesData: Grades[] = []
  selectedGrades: any
  academicTerm: academicTerm[] = []
  selectedTerm: any
  academicyear: academicYear[] = []
  selectedAcademicyear: any
  billID:any
billHistory:Canteen[]=[]
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
    this.getCanteenBillhistory()
  }

  getCanteenCurrentBills() {
return this.billservice.getCanteenCurrentBills().subscribe((response: any) => {
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
dropCanteenBill(_t163: any) {
let data={
  billID:_t163.cbillNumber
}
console.log(data)
this.billservice.dropCanteenBill(data).subscribe((response:any)=>{
 if(response?.message){
    this.message=response?.message
  }else{
    if(response?.success){
      this.message=response?.success
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
          this.getCanteenBillhistory()
    }
  }
})
}
getSelectedAcademicyear($event: SelectChangeEvent) {
this.selectedAcademicyear=$event.value?.sessionID
console.log(this.selectedAcademicyear)
}
getSelectedTerms($event: SelectChangeEvent) {
this.selectedTerm=$event.value.Tid
}
submitCanteenBiil() {
  let data={
    billID:this.billID,
    department:this.selectedDepartemnt,
    term:this.selectedTerm,
    academicyear:this.selectedAcademicyear,
    grade:this.selectedGrades,
    currentBill:this.CurrentBill,
    isCurrentBill:this.isCurrentBill,
    datePosted:new Date()
  }
this.billservice.submitCanteenBiil(data).subscribe((response:any)=>{
  if(response?.message){
    this.message=response?.message
  }else{
    if(response?.success){
      this.message=response?.success
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
          this.getCanteenBillhistory()
          this.genranCode();
    }
  }
})
}
setCurrentBill($event: ToggleSwitchChangeEvent) {
this.isCurrentBill=$event.checked
}
setasCurrentBill($event: ToggleSwitchChangeEvent) {
console.log($event.checked)
}
Arrears: any;
CurrentBill: any;
isCurrentBill:boolean=false

  getSelecteGrades($event: SelectChangeEvent) {
    console.log($event.value)
    this.selectedGrades=$event.value.SerialNumber
  }
  getSelecteDepartment($event: SelectChangeEvent) {
    this.selectedDepartemnt=$event.value.DeptId
  }






getCanteenBillhistory=()=>{
 return this.billservice.getCanteenBillhistory().subscribe((response: any) => {
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
    this.billID = "CTN-BL-"+new Date().getFullYear() + randomInteger
  }




  clear(table: Table) {
        table.clear();
        this.searchValue.set('');
    }

}
