import { Component, OnInit, ViewChild } from '@angular/core';
import { AdmissionSvcService } from '../services/admission-svc.service';
import { MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-withdrawn-list',
  imports: [MatDialogModule, MatFormFieldModule, MatTableModule, ReactiveFormsModule, MatToolbarModule, MatIconModule, MatDialogContent, MatInputModule, MatRippleModule, FormsModule, MatSidenavModule, MatTooltipModule],
  templateUrl: './withdrawn-list.component.html',
  styleUrl: './withdrawn-list.component.css'
})

export class WithdrawnListComponent implements OnInit {
  deleteRow(id:number){
    console.log("ID: ",id)
  }
searchAll() {
  this.admissionservice.loadDetailedRecords();

  setTimeout(()=>{
    this.detailedDataSource= [this.admissionservice.WITHDRAWN_FULL_DETAIL]
    console.log(this.detailedDataSource)
  },1000)
}
searchLeaner() {
let data={
  AdmisionNumber:this.adminNumber
}
this.admissionservice.loadWithdrawnpartialdataSearch(data);

}
  displayedColumns: string[] = ['No.', 'Admission Number', 'Full Name', 'Grade', 'Date Withdrawn', 'Actions'];
search: any;
admin: any;
adminNumber: any;
detailedDataColumns: string[] = ['No.', 'Admission Number', 'Full Name', 'Grade', 'Date Withdrawn','Reasons','Details','Guardian Tel','Confirmed','Confirmed By',
  'Authorised','Administrator','Comments','Actions'];
  showRegDetails(arg0: any) {
 
    let data={
      AdmisionNumber:arg0
    }
    this.admissionservice.loadWithdrawnPrintableData(data);
    setTimeout(()=>{
      this.detailedDataSource= [this.admissionservice.WITHDRAWN_FULL_DETAIL]
    },1000)
  }
  patialdataDatasource: any
  detailedDataSource:any
  constructor(private admissionservice: AdmissionSvcService,
    private observer:BreakpointObserver
  ) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.patialdataDatasource = [this.admissionservice.WITHDRAWN_PARTIAL_DATA]
    }, 1000)

  }

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  sidenavAll!:MatSidenav;

  ngAfterViewInit() {

    setTimeout(() => {
      this.observer.observe(['(max-width:800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode='over'
            this.sidenav.close()
        } else {
          this.sidenav.mode='over'
          // this.sidenavDetails.open()
        }
      })
    }, 0);
     this.sidenav.close()

}
}
