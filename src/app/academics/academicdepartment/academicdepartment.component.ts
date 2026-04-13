
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-academicdepartment',
  imports: [MatToolbarModule, MatDialogModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSelectModule, MatSelectModule, MatDialogActions],
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './academicdepartment.component.html',
  styleUrl: './academicdepartment.component.css'
})

export class AcademicdepartmentComponent implements OnInit {


fromGrade: any;
toGrade: any;
operations:any;
  constructor(private fb:FormBuilder,
    public dialogRef: MatDialogRef<AcademicdepartmentComponent>,
    private academicservice:AcademicService,
    private snackbarservice:SnackbarService
  ){

  }
  ngOnInit(): void {
  this.deptForm=this.fb.group({
    departmentID:['',Validators.required],
    departmentName:['',Validators.required],
    fromGrade:['',Validators.required],
    toGrade:['',Validators.required],
    totalLeaners:['',Validators.required]
  })
  }
  deptForm:any=FormGroup;

  submit() {
    var formData=this.deptForm.value;
    let data={
      departmentID:formData.departmentID,
      departmentName:formData.departmentName,
      fromGrade:formData.fromGrade,
      toGrade:formData.toGrade,
      totalLeaners:formData.totalLeaners,
      operations:this.operations
    };
    this.dialogRef.close({
      clicked: 'submit',
    })
    
    this.academicservice.forwardDept(data).subscribe((response:any)=>{
      if(response?.message){
        this.snackbarservice.openSnackBar(response?.message,"")
      }else{

      }
    })
  }
}
