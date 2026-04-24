import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FluidModule } from 'primeng/fluid';
import { InputNumberModule } from 'primeng/inputnumber';
import { PanelModule } from 'primeng/panel';
import { SelectChangeEvent, SelectModule } from 'primeng/select';
import { Table, TableModule, TablePageEvent } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchChangeEvent, ToggleSwitchModule } from 'primeng/toggleswitch';
import { Billservice } from '../../services/billservice';
import { Learnerservice } from '../../services/learnerservice';
import { MessageService } from 'primeng/api';
import { BillsInterface, CanteenBillHistory, LearenrBillHistory } from '../../interfaces/bills-interface';
import { Uniforms } from '../../interfaces/accountinterface';

@Component({
  selector: 'uniform-fee-schedule',
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
  templateUrl: './uniform-fee-schedule.html',
  styleUrl: './uniform-fee-schedule.css',
})
export class UniformFeeSchedule {


setCurrent($event: ToggleSwitchChangeEvent) {
this.isCurrentBill=$event.checked
}

  AdmissionNumber: any;
  CurrentGrade: any
  currentTerm: any
  currentSchoolFee: number = 0
    currentTermDetails: BillsInterface[] = []
  currentFeeData: any
  fee_In_Arrear_Data: any
  arrears: number = 0;
  amountDue:number=0;
  message: any
  academicYear:any
  isCurrentBill:boolean=false
  constructor(private billService: Billservice, private learnerservcie: Learnerservice) {
  }

    statuses = signal<any[]>([]);
    loading = signal(true);
    searchValue = signal('');
    activityValues = signal<number[]>([0, 100]);
    billID:any;
    LearnerbillHistory:LearenrBillHistory[]=[];
  ngOnInit(): void {
   
    this.CurrentGrade = this.learnerservcie.getCurrentGrade()
    this.AdmissionNumber = this.learnerservcie.getAdmisssionNumber()
    this.currentTerm = this.learnerservcie.getCurrentTerm()
    this.academicYear=this.learnerservcie.getAcademicYear()

    this.termdetails();

           this.setAmountDue();
           this.genranCode()
           this.Load_uniform_Dues_History()
           this.loaduniforms()
  }
  selectedUniform:Uniforms|any
  uniformID:any
  uniforms:Uniforms[]=[]

  loaduniforms=()=>{
    this.billService.loaduniforms().subscribe((response:any)=>{
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
          this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message });
          }
        }
      }
    })
  }
selectUniform($event: SelectChangeEvent) {
this.selectedUniform=$event.value
this.uniformID=this.selectedUniform.uniformid

    this.load_current_uniform_bill()
    this.Load_uniform_Arrears()
}
  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  genranCode = () => {
    let randomInteger: number = this.getRandomInt(1, 1000000); // Generates a random integer between 1 and 10
    this.billID = "UNIF-BL-"+new Date().getFullYear() + randomInteger
  }



  private messageService = inject(MessageService);

  termdetails = () => {
    this.billService.loadTermDetail().subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message });
      } else {
        if (response?.data) {
          this.currentTermDetails = response?.data
          console.log(this.currentTermDetails)
        } else {
          this.message = response?.message
          this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message });
        }
      }
    })
  }

  load_current_uniform_bill = () => {
    let data = {
      grade: this.CurrentGrade,
      term: this.currentTerm,
      uniformid:this.uniformID
    }

    this.billService.load_current_uniform_bill(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message });
        this.currentSchoolFee=0
      } else {
        if (response?.data) {
          this.currentSchoolFee =response?.data[0].currentBill
                } else {
          this.currentSchoolFee=0
          this.message='Unknown error has occured'
          this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message });
        }
      }
    })
  }
  Load_uniform_Arrears = () => {
    let data = {
      admissionNimber: this.AdmissionNumber,
      uniformid:this.uniformID
    }
    this.billService.Load_uniform_Arrears(data).subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message });
      } else {
        if (response?.data) {
          this. setAmountDue()
          this.arrears =response?.data[0].currentBalance
        } else {
          if (response?.Norecord) {
    
            this.arrears = 0
            this. setAmountDue()
          } else {
            this.message = response?.message
            this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message });
          }
        }
      }
    })
  }
  setAmountDue=()=>{
    setTimeout(()=>{
             console.log('current fee', this.currentSchoolFee)
       
    this.amountDue=this.arrears+this.currentSchoolFee
    console.log('this amount due ',this.amountDue, this.arrears, this.currentSchoolFee)
    },1000)

  }

  clear(table: Table) {
        table.clear();
        this.searchValue.set('');
    }
//     setCurrent($event: SelectChangeEvent) {

// }
submit_uniform_Bill=()=>{
  let data={
    billID:this.billID,
    academicyear:this.currentTermDetails[0].sessionID,
    term:this.currentTerm,
    grade:this.CurrentGrade,
    Department:this.currentTermDetails[0].Department,
    AdmissionNumber:this.AdmissionNumber,
    currentFee:this.currentSchoolFee,
    arrears:this.arrears,
    amountDue:this.amountDue,
    dateDeposit:new Date(),
    isCurrentBill:this.isCurrentBill,
    uniformid:this.uniformID
  }
  this.billService.submit_uniform_Bill(data).subscribe((response:any)=>{

      if (response?.message) {
        this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
      } else {
        if (response?.success) {
               this.message = response?.success
               this.Load_uniform_Dues_History()
        this.messageService.add({ severity: 'success', summary: 'Messgae', detail: this.message,life:5000 });
        }else{
          this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
        }
      }
  })
}

Load_uniform_Dues_History=()=>{
  let data={
    AdmissionNumber:this.AdmissionNumber,
  }
  this.billService.Load_uniform_Dues_History(data).subscribe((response:any)=>{
    if(response?.message){
      this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
    }else{
      if(response?.data){
        console.log(response?.data)
        this.LearnerbillHistory=response?.data
      }else{

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

    Drop_uniform_Due(_t111: any) {
let data={
  AdmissionNumber:this.AdmissionNumber,
  uniformid:this.uniformID
}
this.billService.Drop_uniform_Due(data).subscribe((response:any)=>{
  if (response?.message) {
        this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
      } else {
        if (response?.success) {
               this.message = response?.success
               this.Load_uniform_Dues_History()
        this.messageService.add({ severity: 'success', summary: 'Messgae', detail: this.message,life:5000 });
        }else{
          this.message = response?.message
        this.messageService.add({ severity: 'error', summary: 'Messgae', detail: this.message,life:5000 });
        }
      }
})
}

}

