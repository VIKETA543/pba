
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatDialogContent, MatDialogActions, MatDialogRef, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';
import { UserService } from '../../services/user.service';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListofHodsComponent } from '../listof-hods/listof-hods.component';

@Component({
  selector: 'app-managedept-heads',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatRippleModule, MatInputModule, ReactiveFormsModule, MatDialogContent, MatDialogActions, MatCardModule, MatFormFieldModule, FormsModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatMenuModule, MatCheckboxModule, MatDialogModule],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './managedept-heads.component.html',
  styleUrl: './managedept-heads.component.css'
})
export class ManagedeptHeadsComponent implements OnInit{
  data:any;
  search:any
  image:any;
  notAuthorised:string="NOT AUTHORISED"
  authorised:string="Authorised"
  user:any
  selectedPosition:any;
  substantivePosition:any
  actingPosition:any
  staff:any;
  department:any
  access:any
constructor(public dialogRef:MatDialogRef<ManagedeptHeadsComponent>,
  private academicservice:AcademicService,
  private snackbar:SnackbarService,
  private userservice:UserService,
  private dialog:MatDialog
){}
ngOnInit() {
     this.academicservice.loadallDeptHeads().subscribe((response:any)=>{
      this.data=response?.data
      this.user=this.userservice.userdata;
      // var buffer = new Buffer(this.data.Photo);
      // var BufferedBase64 = buffer.toString('base64')
    
  
    }) 
}
handleSearch=()=>{
 
  let data={
    search:this.search
  }
  this.academicservice.findSelecteddeptHead(data).subscribe((response:any)=>{
    if(response?.message){
      this.snackbar.openSnackBar(response?.message,'')
    }else{
      this.data=response?.data
      this.image=response?.Photo
    }
  })
}
submit=()=>{
this.dialogRef.close({
  click:this.submit
})
}
handleAccessControl=(id:string,dept:string,access:boolean)=>{
// console.log(id," ", dept," ", access)
  this.search=id
let data={
staffId:id,
DeptId:dept,
access:access,
authby:this.user.userID
}
this.academicservice.authDepartment(data).subscribe((response:any)=>{
  if(response?.success){
  
    this.snackbar.openSnackBar(response?.success,'')
    this.handleSearch();
  }else{
  this.snackbar.openSnackBar(response?.message,'')
  }
})
}
setPosition=(option:string,action:boolean,staff:string,department:string,access:boolean)=>{
this.staff=staff;
this.department=department
this.access=access;
console.log(this.access)
if(option==="Acting"){
  this.selectedPosition=option;
  this.substantivePosition=false
}else{
  if(option==="Substantive"){
    this.actingPosition=false
    this.selectedPosition=option
    
  }else{
    this.selectedPosition=undefined
  }
}

}
handlePosition=()=>{
let data={
  staff:this.staff,
  department:this.department,
  posistion:this.selectedPosition,
  access:this.access
}
this.academicservice.forwardPosition(data).subscribe((response:any)=>{
  this.snackbar.openSnackBar(response?.message,'')
})
}

}
