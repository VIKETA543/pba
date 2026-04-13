
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { DataObjectsService } from '../../services/data-objects.service';
import { SnackbarService } from '../../services/snackbar.service';
import { AddfacilitatorComponent } from '../../academics/addfacilitator/addfacilitator.component';

@Component({
  selector: 'app-addfac-prompt',
  imports: [MatToolbarModule, MatDialogModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './addfac-prompt.component.html',
  styleUrl: './addfac-prompt.component.css'
})

export class AddfacPromptComponent implements OnInit{
  staffId:any;
  constructor(public dialogRef:MatDialogRef<AddfacPromptComponent>,
    private academicservice:AcademicService,
    private snackBar:SnackbarService,private dialog:MatDialog, private dataobject:DataObjectsService
  ){}
  ngOnInit(): void {
    
  }
submit=()=>{
this.dialogRef.close({
  click:this.submit
})
let data={
  staffId:this.staffId
}
this.academicservice.loadStaff(data).subscribe((response:any)=>{
if(response?.message){
this.snackBar.openSnackBar(response?.message,'')
}else{
  this.dataobject.addFacilitatorStaff=response?.staff;
this.dataobject.deptList=response?.dept
   this.dialog.open(AddfacilitatorComponent, {
      maxWidth: '100%',
      maxHeight: '100vh',
      // height: '90vh',
      width: 'calc(100% - 0%)',
      position: {
        top: '3vh',
        left: 'calc(100% - 86%)',
      },
      panelClass: 'full-screen-modal'
    });
}
})
}
}
