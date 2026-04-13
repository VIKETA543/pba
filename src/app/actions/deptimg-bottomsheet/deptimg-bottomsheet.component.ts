
import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AcademicService } from '../../services/academic.service';
import { SnackbarService } from '../../services/snackbar.service';
import { DataObjectsService } from '../../services/data-objects.service';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { OperantionsBottomsheetComponent } from '../operantions-bottomsheet/operantions-bottomsheet.component';

@Component({
  selector: 'app-deptimg-bottomsheet',
  imports: [MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule, FormsModule, MatToolbarModule, MatButtonModule],
  templateUrl: './deptimg-bottomsheet.component.html',
  styleUrl: './deptimg-bottomsheet.component.css'
})
export class DeptimgBottomsheetComponent {
   private _bottomSheetRef =inject<MatBottomSheetRef<OperantionsBottomsheetComponent>>(MatBottomSheetRef);
  constructor(private ngxservice:NgxUiLoaderService,
    private academicservice:AcademicService,private snackbar:SnackbarService,
    private dataservice:DataObjectsService,
  ){}
  preview:string[]=[]; 
selectedFile?:FileList;
selectedFileNames: any[]=[];
responseMessage:any;
complete:boolean=false;
image:any

uploadFiles() {
  this._bottomSheetRef.dismiss();
  this.ngxservice.start()
  const formData= new FormData();
  formData.append('image',this.image)
  formData.append('DepartmentID',this.dataservice.departmentID)

  this.academicservice.uploadImage(formData).subscribe((response:any)=>{
  this.responseMessage=response?.message;
  this.ngxservice.stop();
  this.snackbar.openSnackBar(this.responseMessage,'')
  },((error)=>{
    if(error){
      this.responseMessage=error.error?.message
    }else{
   
    }
    this.snackbar.openSnackBar(this.responseMessage,'')
  }))
  }


  selectImage(event: any) {
    this.selectedFile=event.target.files;
    if(this.selectedFile && this.selectedFile[0]){
      const numberOfFiles=this.selectedFile.length;
      for(let i=0;i<numberOfFiles; i++){
      const reader=new FileReader();
      reader.onload=(e:any)=>{
     
        this.preview.push(e.target.result)
      }
      reader.readAsDataURL(this.selectedFile[i]);
      this.selectedFileNames.push(this.selectedFile[i].name);
      this.image=this.selectedFile[i];
      }
    }
      }
}
