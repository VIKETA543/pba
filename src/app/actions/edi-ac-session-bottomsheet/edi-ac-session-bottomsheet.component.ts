import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DataObjectsService } from '../../services/data-objects.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { AcademicService } from '../../services/academic.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-edi-ac-session-bottomsheet',
  imports: [MatToolbarModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatDialogModule, MatButtonModule, MatTooltipModule, MatDatepickerModule, MatCardModule],
  providers:  [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './edi-ac-session-bottomsheet.component.html',
  styleUrl: './edi-ac-session-bottomsheet.component.css'
})
export class EdiAcSessionBottomsheetComponent implements OnInit {
dismiss() {
this.bottomsheetRef.dismiss()
}
  private bottomsheetRef=inject<MatBottomSheetRef<EdiAcSessionBottomsheetComponent>>(MatBottomSheetRef)
qryResult:any
newSession:any
editSelected:boolean=false
StartDate:any;
EndDate:any;
  constructor(private snackbar:SnackbarService, private dataservice:DataObjectsService,private academicservice:AcademicService){}
ngOnInit(): void {
this.qryResult=this.dataservice.resultFromEditAcSession
console.log(this.qryResult.ac_session)
}
isEditable=(selected:boolean)=>{
  this.editSelected=selected
}
changeSession=(data:any)=>{
  this.bottomsheetRef.dismiss()
let qry={
  oldsession:data,
  newsession:this.newSession
}
this.academicservice.updatesession(qry).subscribe((response:any)=>{
this.snackbar.openSnackBar(response?.message,"")
})
}
changeDates=(data:any)=>{
  this.bottomsheetRef.dismiss();
let qry={
  description:"The period within describes, the academic year between "+this.StartDate+" "+this.EndDate,
  Startdate:this.StartDate,
  Enddate:this.EndDate,
  session:data
}

this.academicservice.updateDates(qry).subscribe((response:any)=>{
this.snackbar.openSnackBar(response?.message,"")
})
}
}
