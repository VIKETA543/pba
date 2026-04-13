
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule, } from '@angular/material/core';
import { MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataObjectsService } from '../../services/data-objects.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Buffer } from 'buffer';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SourceTextModule } from 'vm';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';
@Component({
  selector: 'app-addfacilitator',
  imports: [MatToolbarModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatSelectModule, MatOptionModule, MatDialogModule, FormsModule, MatInputModule, MatSelectModule, MatOptionModule, MatTooltipModule, MatDialogContent, MatDialogActions, MatCheckboxModule],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './addfacilitator.component.html',
  styleUrl: './addfacilitator.component.css'
})
export class AddfacilitatorComponent implements OnInit {

  submit() {
    let date=new Date();
    const day=date.getDay();
    const month=date.getMonth();
    const year=date.getFullYear()
  let data={
    deptID:this.selectedDepartment,
    staffID:this.staff.ID,
    status:'Current',
    date:year+"-"+month+"-"+day
  }
  console.log(data)
this.dialogRef.close({
  click:this.submit
})
this.academicservice.addnewFacilitator(data).subscribe((response:any)=>{
  if(response?.message){
    this.snackbar.openSnackBar(response?.message,'')
  }else{

  }
})
}
  dept:any
  staff:any
  staffImageData:any
  image:any
  selectedDepartment:any
constructor(private dataservice:DataObjectsService,
  public sanitizer:DomSanitizer,
  private academicservice:AcademicService, private snackbar:SnackbarService, public dialogRef:MatDialogRef<AddfacilitatorComponent>,
){}
  ngOnInit() {
      this.dept=this.dataservice.deptList
      this.staff=this.dataservice.addFacilitatorStaff;
      this.staffImageData=this.staff.IMAGE

          // for (let i = 0; i < this.staffImageData.length; i++) {
             
                  var buffer = new Buffer( this.staffImageData);
                 let base64String= buffer.toString('base64')
                 this.image=base64String
                // if(typeof this.data[i]==='object'){
                //   this.data[i]["image"]=base64String
                // }
              // }
  }
  selectDept=(data:any)=>{

  }
}
