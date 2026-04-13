
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { EdiAcSessionBottomsheetComponent } from '../../actions/edi-ac-session-bottomsheet/edi-ac-session-bottomsheet.component';
import { DataObjectsService } from '../../services/data-objects.service';
import { AcademicsessionsComponent } from '../academicsessions/academicsessions.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-manage-academic-session',
  imports: [MatToolbarModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatDialogModule, MatButtonModule, MatRippleModule, MatTooltipModule, MatSelectModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './manage-academic-session.component.html',
  styleUrl: './manage-academic-session.component.css',

})
export class ManageAcademicSessionComponent implements OnInit{
sessions: any;
list:any=[];
selected: any;
private bottomSheet=inject(MatBottomSheet)
constructor(private dialog:MatDialog, private dataservice:DataObjectsService, private dialogRef:MatDialogRef<ManageAcademicSessionComponent>, private academicservice:AcademicService,private snackbar:SnackbarService){
    this.academicservice.loadacademicsession().subscribe((response:any)=>{
      if(response?.message){
this.snackbar.openSnackBar(response?.message,"")
      }else{
      
        this.list=response?.list
          console.log( this.list)
        this.sessions=response?.data;
      }
    })
}
ngOnInit(): void {
    
}
isSelected=(event:any)=>{
  this.selected=event.value
  let data={
  selected:this.selected
  }
this.academicservice.searchsession(data).subscribe((response:any)=>{
  if(response?.message){

  }else{
    this.sessions=undefined
       this.sessions =response?.list
    console.log(    this.sessions)
  }
})
}
delSession=(data:any)=>{
let qrydata={
  session:data
}
const confirm=window.confirm("This action will permanently delete the selected year")
this.academicservice.delSession(qrydata).subscribe((response:any)=>{
  if(confirm){
  this.snackbar.openSnackBar(response?.message,"")
  this.dialogRef.close()
  }else{

  }

})
}
dismiss=()=>{
this.dialogRef.close();
}
launchEdith=(data:any)=>{
  let qry={
    session:data
  }
  this.academicservice.loadSelectedsession(qry).subscribe((response:any)=>{
    if(response?.message){
        this.snackbar.openSnackBar(response?.message,"")
    }else{
      this.dataservice.resultFromEditAcSession=response.result
        this.bottomSheet.open(EdiAcSessionBottomsheetComponent)
    }
  })

}
addNewAcademicyear=()=>{
  this.dialog.open(AcademicsessionsComponent, {
        maxWidth: '100vw',
       
        height: 'auto',
        width: 'calc(100% - 60%)',
        position: {
          top: '5%',
          left: 'calc(100% - 80%)',
          bottom:'0%'
        },
        panelClass: 'full-screen-modal'
      });

}
}
