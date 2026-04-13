
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../../services/snackbar.service';
import { departmentList, DeptHead } from '../../interfaces/academics';
import { CreatdepartmentheadsComponent } from '../../academics/creatdepartmentheads/creatdepartmentheads.component';
import { DataObjectsService } from '../../services/data-objects.service';

@Component({
  selector: 'app-departmentheadprompt',
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule, MatDialogActions, MatFormFieldModule, MatIconModule, MatToolbarModule, MatDialogContent],
  templateUrl: './departmentheadprompt.component.html',
  styleUrl: './departmentheadprompt.component.css'
})
export class DepartmentheadpromptComponent implements OnInit {
  staffId: any;
staffIdform:any= FormGroup;

  constructor(public dialogRef:MatDialogRef<DepartmentheadpromptComponent>,
    private formbuilder:FormBuilder,
    private academicservice:AcademicService,
    private ngxservice:NgxUiLoaderService,
    private snackbarservice:SnackbarService,
    private dialog:MatDialog,
    private dataservice:DataObjectsService
   
  ){}
  ngOnInit(): void {
  this.staffIdform=this.formbuilder.group({
    staffId:['',Validators.required],
  })
  }

submit() {
  this.ngxservice.start()
let formdata=this.staffIdform.value;
  let data={
    staffId:formdata.staffId
  }
  this.dialogRef.close({
    click:this.submit
  })

  this.academicservice.findStaff(data).subscribe((response:any)=>{
    if(response?.message){
      this.snackbarservice.openSnackBar(response?.message,'')
    }else{
      this.dataservice.deptHead=response?.staff
      this.dataservice.deptList=response?.departments
      this.dataservice.image=response?.image
      // console.log(response?.image)

      this.dialog.open(CreatdepartmentheadsComponent,{
                      maxWidth: '100vw',
                      maxHeight: '100vh',
                      height: '90vh',
                      width: 'calc(100% - 20%)',
                      position: {
                        top: '10vh',
                        left: 'calc(100% - 86%)',
                    },
                      panelClass: 'full-screen-modal'
                    });
          
        }
    

  
    this.ngxservice.stop()
})

}
}
