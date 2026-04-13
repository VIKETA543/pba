import { Component, OnInit } from '@angular/core';
import { DataObjectsService } from '../../services/data-objects.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { inject} from '@angular/core';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';
@Component({
  selector: 'app-operantions-bottomsheet',
  imports: [MatToolbarModule, MatDialogModule, FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule, MatInputModule],
  templateUrl: './operantions-bottomsheet.component.html',
  styleUrl: './operantions-bottomsheet.component.css'
})
export class OperantionsBottomsheetComponent implements OnInit{
  operationsData:any;
  currentOperation:any;
  newOperations:any;
  private _bottomSheetRef =inject<MatBottomSheetRef<OperantionsBottomsheetComponent>>(MatBottomSheetRef);
  constructor(private dataservice:DataObjectsService,
    private academicservice:AcademicService,private snackbar:SnackbarService
    
  ){}
ngOnInit() {
    
this.operationsData=this.dataservice.operationInfo
alert(this.operationsData)
    
}
handsubmit=()=>{
  this._bottomSheetRef.dismiss();
  let data ={
    departmentID:this.dataservice.departmentID,
    newOperations:this.newOperations
  }
  this.academicservice.updateOPerations(data).subscribe((response:any)=>{
    this.snackbar.openSnackBar(response?.message,'')
  })
}
handleUpdate=()=>{
  this._bottomSheetRef.dismiss();

  let data ={
    departmentID:this.dataservice.departmentID,
 
    newOperations:this.operationsData+" "+this.newOperations
  }
  this.academicservice.updateOPerations(data).subscribe((response:any)=>{
    this.snackbar.openSnackBar(response?.message,'')
  })
}
}
