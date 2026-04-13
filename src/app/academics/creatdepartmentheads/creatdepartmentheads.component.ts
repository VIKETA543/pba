
import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { MatDialog, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { DataObjectsService } from '../../services/data-objects.service';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { response } from 'express';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SnackbarService } from '../../services/snackbar.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-creatdepartmentheads',
  imports: [MatToolbarModule, ReactiveFormsModule, FormsModule, MatInputModule, MatSelectModule, MatOptionModule, MatDatepickerModule, MatNativeDateModule, MatTooltipModule, MatDialogContent, MatDialogActions, MatCheckboxModule],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './creatdepartmentheads.component.html',
  styleUrl: './creatdepartmentheads.component.css'
})
export class CreatdepartmentheadsComponent implements OnInit {
staff:any
datalist:any
selectedDept:any
tenureInOffice:any;
startDate:any;
image:any;
endDate:any;
duties:any;
staffId:any;
status:any;
isNew:boolean=false;
isExtended:boolean=false;
storedData:any;
spaddateForm:any=FormGroup;
user:any;
constructor(private academicservice:AcademicService,
  private dialog:MatDialog,
  public dialogRef:MatDialogRef<CreatdepartmentheadsComponent>,
  private dataservice:DataObjectsService,
  private formbuilder:FormBuilder,
  private snackbarservice:SnackbarService,
  private userService:UserService,
   
){}
ngOnInit() {
  setTimeout(()=>{
    this.staff=this.dataservice.deptHead
    this.staffId=this.staff.StaffID;
    this.datalist=this.dataservice.deptList;
    this.image=this.dataservice.image;
    this.user=this.userService.userdata
  },1000)
 this.spaddateForm=this.formbuilder.group({
  startDate:[Validators.required],
  endDate:[Validators.required]

 })
}
selectDept=(d:string)=>{
  // console.log(this.datalist)
// console.log(this.selectedDept)


}
hanldleNewStatus(arg0: string, arg1: boolean) {
  if(arg0==='NEW'){
    this.status=arg0;
    this.isNew=arg1;
    this.isExtended=false;
    
  }else{
    this.status=undefined
  }
  
}
hanldleExtended(arg0: string, arg1: boolean) {
  if(arg0==='EXTENDED PERIOD'){
    this.status=arg0;
    this.isExtended=arg1;
    this.isNew=false
  }else{
    this.status=undefined
  }
  
}
submit=()=>{
  let formdata=this.spaddateForm.value
 
  let data={
    staffId:this.staffId,
    selectedDept:this.selectedDept,
    tenureInOffice:this.tenureInOffice,
    startDate:formdata.startDate,
    endDate:formdata.endDate,
    duties:this.duties,
    status:this.status,
    AssignedBy:this.user.userID,

  }
  this.academicservice.forwardNewDeptHead(data).subscribe((response:any)=>{
    this.snackbarservice.openSnackBar(response?.message,"")
  })
  this.dialogRef.close({
    click:this.submit
  })
}
}
