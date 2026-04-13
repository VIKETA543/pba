import { Component } from '@angular/core';
import { inject} from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import { departmentList } from '../../interfaces/academics';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { DataObjectsService } from '../../services/data-objects.service';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { SnackbarService } from '../../services/snackbar.service';
@Component({
  selector: 'app-rename-dept-bottom-sheet',
  imports: [MatButtonModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatDialogModule, MatToolbarModule],
  templateUrl: './rename-dept-bottom-sheet.component.html',
  styleUrl: './rename-dept-bottom-sheet.component.css'
})
export class RenameDeptBottomSheetComponent {
  departmentId:any;
  departmentName:any
  newName:any;
dataObjects:any;
  constructor(public dataobjservice:DataObjectsService,private academicservice:AcademicService,
    private snackbar:SnackbarService
  ){
    this.dataObjects=this.dataobjservice.deptList;
    // console.log(this.dataObjects)
  }
  private _bottomSheetRef =inject<MatBottomSheetRef<RenameDeptBottomSheetComponent>>(MatBottomSheetRef);

  // openLink(event: MouseEvent): void {
   
  //   event.preventDefault();
  // }
  submit=()=>{
    this._bottomSheetRef.dismiss();
    let data ={
      departmentID:this.dataObjects[0].DeptId,
      name:this.newName
    }
    this.academicservice.forwardrenamdepartment(data).subscribe((response:any)=>{
      this.snackbar.openSnackBar(response?.message,'');
    })
  }
}
