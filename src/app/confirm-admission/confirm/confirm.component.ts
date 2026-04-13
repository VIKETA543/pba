import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DatapasserService } from '../../services/datapasser.service';
import { AdmissionSvcService } from '../../services/admission-svc.service';
import { MatRippleModule } from '@angular/material/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-confirm',
  imports: [MatToolbarModule,MatDialogModule,MatFormFieldModule,MatSelectModule, FormsModule,
    MatIconModule,MatRippleModule,MatCheckboxModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent implements OnInit {
  admissionNumber:any;
  currentIndexNumberFromDB:any
  admisionDate:any
  confirmed:any
  constructor(private datapasserservice:DatapasserService,
    private admisionService:AdmissionSvcService,
    private dialog:MatDialog,
    private dialogRef:MatDialogRef<ConfirmComponent>,
    private ngxService:NgxUiLoaderService,
  ){}
ngOnInit(): void {
  this.ApplicationNumber=this.datapasserservice.getAppId()

  setTimeout(()=>{
  this.currentIndexNumberFromDB=this.admisionService.nextIndex
    let date=new Date();

    let currYear=date.getFullYear()%100
    let beforeYear=(date.getFullYear()-1)%100
    let i=beforeYear+""+currYear

    
    this.admissionNumber='BHA'+i+""+String(this.currentIndexNumberFromDB).padStart(4,"0")
    this.admisionDate=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDay().toPrecision()
  },1000)
}
selectedClass: any;
ApplicationNumber:any;
confirmApplicant:any;
confirm=()=>{

if(this.selectedClass===undefined){
alert('Assign a class to applicant')
}else{
  if(this.confirmApplicant===true){
       let data={
         applicationNumber:this.ApplicationNumber,
         AdmissionNumber:this.admissionNumber,
         AdmissionDate:this.admisionDate,
         RowIndex:this.currentIndexNumberFromDB,
         AssignedClass:this.selectedClass,
         AdmisionConfirmed:this.confirmed
       }
this.admisionService.confirmAdmission(data)
  this.dialogRef.close()
      }else{
        alert('Confirm Applicant')
      }
  // console.log()
}
}
confirmedApp=(data:any)=>{
  if(this.confirmApplicant===true){
this.confirmed=data;
  }else{
    this.confirmed=undefined;
  }
}
}
