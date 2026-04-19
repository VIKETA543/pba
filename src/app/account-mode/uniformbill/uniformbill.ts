import { Component, inject, signal } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { ToggleSwitchChangeEvent, ToggleSwitchModule } from 'primeng/toggleswitch';
import { Destination, Accountinterface, Grades, academicTerm, academicYear, Canteen, Uniforms } from '../../interfaces/accountinterface';
import { Billservice } from '../../services/billservice';
import { LearneraccountServcie } from '../../services/learneraccountservoce';
import { NgClass, DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { CdkNoDataRow } from "@angular/cdk/table";
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'uniformbill',
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
    DialogModule,
    InputTextModule, TextareaModule],
  templateUrl: './uniformbill.html',
  styleUrl: './uniformbill.css',
})
export class Uniformbill {

selectDestination($event: SelectChangeEvent) {
this.selectedUniform=$event.value

}
uniformName: any;
createNew_uniform() {
  let data={
    uniformID:this.uniformID,
    uniformName:this.uniformName,
    uniformDetails:this.uniformDetails,
    date:new Date()
  }
  this.billservice.createNew_uniform(data).subscribe((response:any)=>{
    if (response?.message) {
        this.message = response?.message
                  this.messageService.add({ severity: 'danger', summary: 'Messgae', detail: this.message });
      } else {
        if (response?.success) {
          this.message = response?.success
          this.isNewUniform.set(false)
          this.loaduniforms()
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });

        }else{
                  this.message = response?.message
                  this.messageService.add({ severity: 'danger', summary: 'Messgae', detail: this.message });
        }
      }
    
  })
}
  isNewUniform = signal(false)
uniformDetails: any;
  createDesination() {

     let randomInteger: number = this.getRandomInt(1, 1000000); // Generates a random integer between 1 and 10
    this.uniformID = "UFID-" + new Date().getFullYear() + randomInteger
    this.loaduniforms()
    this.isNewUniform.set(true);
  }

  loaduniforms=()=>{
    this.billservice.loaduniforms().subscribe((response:any)=>{
 if (response?.message) {
        this.message = response?.message
      } else {
        if (response?.success) {
          this.message = response?.success
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });

        }else{
          if(response?.data){
            console.log(response?.data)
            this.uniforms=response?.data
          }else{
              this.message = response?.success
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
          }
        }
      }
    })
  }
  constructor(private accountservice: LearneraccountServcie, private billservice: Billservice) { }
  private messageService = inject(MessageService);
  uniforms:Uniforms[]=[]
selectedUniform:Uniforms|any
  uniformID:any

  message: any
  departmentData: Accountinterface[] = []
  selectedDepartemnt: any
  gradesData: Grades[] = []
  selectedGrades: any
  academicTerm: academicTerm[] = []
  selectedTerm: any
  academicyear: academicYear[] = []
  selectedAcademicyear: any
  billID: any
  billHistory: Canteen[] = []
  // representatives = signal<Representative[]>([]);
  statuses = signal<any[]>([]);
  loading = signal(true);
  searchValue = signal('');
  activityValues = signal<number[]>([0, 100]);
uniformdetails:any
  ngOnInit(): void {
    this.department()
    this.grades()
    this.getTerm()
    this.getAcademicYears()
    this.genranCode()
    this.loaduniforms()
    this.uniformsHistory()
  }

  uniformscurrentbill() {
    return this.billservice.uniformscurrentbill().subscribe((response: any) => {
      if (response?.data) {
        this.billHistory = response?.data
        this.loading.set(false)
      } else {
        if (response?.message) {
          this.message = response?.message
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
          this.loading.set(false)
        } else {
          this.loading.set(false)
           this.message = response?.message
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
        }
      }
    })
  }
  dropuniformBill(_t163: any) {
    let data = {
      billID: _t163.uniformbillnumber
    }
    this.billservice.dropuniformBill(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
           this.messageService.add({ severity: 'danger', summary: 'Messgae', detail: this.message });
      } else {
        if (response?.success) {
          this.message = response?.success
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
          this.uniformsHistory()
        }else{
 this.message = response?.message
           this.messageService.add({ severity: 'danger', summary: 'Messgae', detail: this.message });
        }
      }
    })
  }
  getSelectedAcademicyear($event: SelectChangeEvent) {
    this.selectedAcademicyear = $event.value?.sessionID
    console.log(this.selectedAcademicyear)
  }
  getSelectedTerms($event: SelectChangeEvent) {
    this.selectedTerm = $event.value.Tid
  }
  submitUniformBill() {
    let data = {
      billID: this.billID,
      department: this.selectedDepartemnt,
      term: this.selectedTerm,
      academicyear: this.selectedAcademicyear,
      grade: this.selectedGrades,
      currentBill: this.CurrentBill,
      uniformid:this.selectedUniform.uniformid,
      isCurrentBill: this.isCurrentBill,
      datePosted: new Date(),
      uniformdetails:this.uniformdetails
    }
    this.billservice.submitUniformBill(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
         this.messageService.add({ severity: 'danger', summary: 'Messgae', detail: this.message });
      } else {
        if (response?.success) {
          this.message = response?.success
          this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
          this.uniformsHistory()
          this.genranCode();
        }else{
              this.message = response?.message
         this.messageService.add({ severity: 'danger', summary: 'Messgae', detail: this.message });
        }
      }
    })
  }
  setCurrentBill($event: ToggleSwitchChangeEvent) {
    this.isCurrentBill = $event.checked
  }
  setasCurrentBill($event: ToggleSwitchChangeEvent) {
    console.log($event.checked)
  }
  Arrears: any;
  CurrentBill: any;
  isCurrentBill: boolean = false

  getSelecteGrades($event: SelectChangeEvent) {
    console.log($event.value)
    this.selectedGrades = $event.value.SerialNumber
  }
  getSelecteDepartment($event: SelectChangeEvent) {
    this.selectedDepartemnt = $event.value.DeptId
  }






  uniformsHistory = () => {
    return this.billservice.uniformsHistory().subscribe((response: any) => {
      if (response?.data) {
        this.billHistory = response?.data
        this.loading.set(false)
      } else {
        if (response?.message) {
          this.message = response?.message
          this.messageService.add({ severity: 'danger', summary: 'Messgae', detail: this.message });
          this.loading.set(false)
        } else {
           this.messageService.add({ severity: 'danger', summary: 'Messgae', detail: this.message });
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
    this.billID = "UNF-BL-" + new Date().getFullYear() + randomInteger
  }




  clear(table: Table) {
    table.clear();
    this.searchValue.set('');
  }

}
