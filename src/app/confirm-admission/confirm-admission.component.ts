import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { AdmissionSvcService } from '../services/admission-svc.service';
import { AdmissionData } from '../interfaces/admission-data';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DatapasserService } from '../services/datapasser.service';
import { ReviewAdmissionComponent } from './review-admission/review-admission.component';
import {MatMenuModule} from '@angular/material/menu';
import { ConfirmComponent } from './confirm/confirm.component';

@Component({
  selector: 'app-confirm-admission',
  imports: [MatToolbarModule,
    MatDialogContent,
    MatTableModule,
    MatIconModule,
    MatRippleModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  templateUrl: './confirm-admission.component.html',
  styleUrl: './confirm-admission.component.css'
})
export class ConfirmAdmissionComponent implements OnInit{
printAdmission(arg0: any) {

}
  dataSource:any;
  displayedColumns: string[] = ['No.','Application Number','Surname', 'Middle Name', 'Last Name','Date Applied','Actions'];

   

  
  constructor(private admissionsService: AdmissionSvcService,
    private ngxService:NgxUiLoaderService,
    private dialog:MatDialog,
    private dialogRef:MatDialogRef<ConfirmAdmissionComponent>,
    private datapasserservice:DatapasserService,
    private admisionService:AdmissionSvcService,
  ){};
  ngOnInit(): void {
    this.admissionsService.loadAdmissionData()
  
    setTimeout(()=>{
  
      this.dataSource = [this.admissionsService.ELEMENT_DATA];
    },255)
  }
  reviewApplication=(data:string)=>{
    this.datapasserservice.sendAppId(data)
    // const diadlogConfig = new MatDialogConfig();
    this.dialogRef.close()
       this.dialog.open(ReviewAdmissionComponent,{
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '85%',
        width: 'calc(100% - 40%)',
        position: {
          top: '13vh',
          left: '30vw'
      },
        panelClass: 'full-screen-modal'
      });
  }
  confirmApplication=(data:string)=>{
    this.datapasserservice.sendAppId(data)
    this.ngxService.start();
   
       this.admisionService.loadAdmissionIndex()
       this.dialogRef.close()
          this.dialog.open(ConfirmComponent,{
           maxWidth: '100vw',
           maxHeight: '100vh',
           height: '80%',
           width: 'calc(100% - 40%)',
           position: {
             top: '15vh',
             left: '30vw'
         },
           panelClass: 'full-screen-modal'
         });
       this.ngxService.stop();

  }
  deleteApplication=(data:string)=>{
    console.log(data)
  }
}
