import { BreakpointObserver } from '@angular/cdk/layout';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdmissionSvcService } from '../services/admission-svc.service';
import { GlobalConstants } from '../shared/GlobalConstant-component';
import { MatDatepickerControl, MatDatepickerModule, MatDatepickerPanel } from '@angular/material/datepicker';
import { MatRippleModule } from '@angular/material/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-admission-register',
  imports: [MatToolbarModule, MatDialogModule, FormsModule, MatIconModule, MatSidenavModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatPaginatorModule, MatMenuModule, MatTableModule, MatDatepickerModule, MatDialogContent, MatDialogActions, MatRippleModule],
  templateUrl: './admission-register.component.html',
  styleUrl: './admission-register.component.css'
})
export class AdmissionRegisterComponent implements OnInit {
searchRegistry() {
  let data={
    admissionnumber:this.findByAdm_No
  }
  this.admissionsService.searchRegistry(data)
  this.dataSource = [this.admissionsService.ADMISION_REG_DATA];
  
}
addRegistry() {
  let formData=this.AddRegForm.value;

  let data={
    AdmissionNumber:this.admNumber,
    Guardian:formData.Guardian,
      GuardianAddress:formData.GuardianAddress,
      PhoneNumber:formData.PhoneNumber,
      LastSchool: formData.LastSchool,
      LastAttendanceDate:formData.LastAttendanceDate,
      causeofLeaving:formData.causeofLeaving,
      remarks: formData.remarks
  }
  this.ngxservice.start();
  this.admissionsService.addRegistry(data);
  setTimeout(()=>{
    if(this.admissionsService.status_flag){
      this.sidenav.close();
    }else{

    }
  },1000)

}
  dateoflastAttendance: any
  viewDetails(arg0: any) {
    this.admNumber = arg0
 
  }
  handleSubmit() {}
  showRegDetails = (data: any) => {
    let d={
      admissionnumber:data
    }
    this.admissionsService.showRegDetails(d)
    setTimeout(()=>{
      this.Registry=this.admissionsService.ADMISSION_DETAILS
    },1000)
   
  }
  handleWithdrawLearner = (data: any) => {}
  admNumber: any;
  dataSource: any;
  confirmed: any;
  AddRegForm: any = FormGroup;
  admissionnumber: any
  findByAdm_No:any
  Registry:any
  displayedColumns: string[] = ['No.', 'Admission Number', 'Surname', 'Middle Name', 'Last Name', 'Admission Date', 'Grade', 'Status', 'Actions'];
  constructor(private observer: BreakpointObserver, private admissionsService: AdmissionSvcService,
    private formBuilder: FormBuilder,private ngxservice:NgxUiLoaderService,public dialogRef:MatDialogRef<AdmissionRegisterComponent>
  ) {}
  ngOnInit(): void {
    this.admissionsService.loadAdmissionRegister()
    setTimeout(() => {
      this.dataSource = [this.admissionsService.ADMISION_REG_DATA];
    }, 255)

    this.AddRegForm = this.formBuilder.group({
      addmissionNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      Guardian: [null, [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      GuardianAddress: [null, [Validators.required, Validators.pattern(GlobalConstants.addressRegex)]],
      PhoneNumber:[null, [Validators.required, Validators.pattern(GlobalConstants.ContactNumberRegex)]],
      LastSchool: [null, [Validators.required, Validators.pattern(GlobalConstants.addressRegex)]],
      LastAttendanceDate: [null, [Validators.required, Validators.pattern(GlobalConstants.DATE_REGEX)]],
      causeofLeaving: [null, [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
      remarks: [null, [Validators.required, Validators.pattern(GlobalConstants.textFieldRegex)]],
    })

  }
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  sidenavDetails!:MatSidenav;

  ngAfterViewInit() {

    setTimeout(() => {
      this.observer.observe(['(max-width:800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenavDetails.mode='over'
               this.sidenavDetails.close()
        } else {
          this.sidenavDetails.mode='over'
          this.sidenavDetails.open()
        }
      })
    }, 0);
     this.sidenavDetails.close()

    setTimeout(() => {

      this.observer.observe(['(max-width:800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over'
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'over';
          this.sidenav.open();
        
        }
      })
      this.sidenav.close();
    }, 0);

    
   
   
  }

}
