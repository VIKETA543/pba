import { Component } from '@angular/core';
import { MatToolbar, MatToolbarModule } from "@angular/material/toolbar";
import { MatDialog, MatDialogContent, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { AcademicService } from '../../services/academic.service';
import { SnackbarService } from '../../services/snackbar.service';
import { AttendanceRegisterComponent } from '../../academics/attendance-register/attendance-register.component';
import { DatapasserService } from '../../services/datapasser.service';
import { DataObjectsService } from '../../services/data-objects.service';

@Component({
  selector: 'app-mark-reg-prompt',
  imports: [MatToolbarModule, MatDialogContent, MatFormFieldModule, MatTooltipModule, FormsModule, ReactiveFormsModule, MatInputModule, MatDialogModule, MatButtonModule],
  templateUrl: './mark-reg-prompt.component.html',
  styleUrl: './mark-reg-prompt.component.css'
})
export class MarkRegPromptComponent {
staffId:any

constructor(private dataobjects:DataObjectsService, private dialog:MatDialog, private snarkbar:SnackbarService, private academicservice:AcademicService, public dialogRef:MatDialogRef<MarkRegPromptComponent>,){

}
submit=()=>{
  this.dialogRef.close({
    click:this.submit
  })
  let query={
  staffId:this.staffId
  }
  this.academicservice.startRegister(query).subscribe((response:any)=>{
    if(response?.menssage){
      this.snarkbar.openSnackBar(response?.menssage,"")
    }else{
      if(response?.USER_FOUND){
        this.dataobjects.markregitersInitor=response?.USER_FOUND
        this.dataobjects.marlRegisterData=response?.data
        this.dialog.open(AttendanceRegisterComponent, {
      maxWidth: '100%',
      maxHeight: 'calc(100% - 0%)',
      height: 'calc(100vh - 10vh)',
      width: 'calc(100% - 0%)',
      position: {
        top: '5%',
        left: 'calc(100% - 85%)',
      },
      panelClass: 'full-screen-modal'
    });
      }else{
        this.snarkbar.openSnackBar("Unknown error occured",'')
      }
    }
  })
}
}
