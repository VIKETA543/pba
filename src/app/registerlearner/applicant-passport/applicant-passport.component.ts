import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ApplicationformComponent } from '../applicationform/applicationform.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { SerialLoginComponent } from '../serial-login/serial-login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { GlobalConstants } from '../../shared/GlobalConstant-component';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApplicationserviceService } from '../../services/applicationservice.service';
import { SnackbarService } from '../../services/snackbar.service';
import { DatapasserService } from '../../services/datapasser.service';

@Component({
  selector: 'app-applicant-passport',
  imports: [MatDialogModule, MatToolbarModule, ReactiveFormsModule, MatFormFieldModule, MatDialogActions, MatInputModule, MatSelectModule, MatToolbarModule, MatIconModule],
  templateUrl: './applicant-passport.component.html',
  styleUrl: './applicant-passport.component.css'
})
export class ApplicantPassportComponent implements OnInit {

uploadFiles() {

this.ngxService.start()
const applicantId=this.applicationForm.value;
this.appSerial.sendAppId(applicantId.applicationNumber);
const formData= new FormData();
formData.append('image',this.image)
formData.append('applicationNumber',applicantId.applicationNumber)
formData.append('progress','ApplicantPassportComponent')


this.applicationService.submitPassportRequest(formData).subscribe((response:any)=>{
this.responseMessage=response?.message;
this.ngxService.stop();
this.dialogRef.close();
this.dialog.closeAll()
    const dialogConfig=new MatDialogConfig()
  this.dialog.open(ApplicationformComponent,dialogConfig);
this.snarckbarService.openSnackBar(this.responseMessage,'')


},((error)=>{
  if(error){
    this.responseMessage=error.error?.message
  }else{
    this.responseMessage=GlobalConstants.generateError;
  }
  this.snarckbarService.openSnackBar(this.responseMessage,'')
}))
}
 selectedFile?:FileList;
selectedFileNames: any[]=[];
preview:string[]=[]; 
responseMessage:any;
complete:boolean=false;
image:any
applicationserialNumber:any
  constructor(private dialog:MatDialog,
    private formBuilder:FormBuilder,
    private ngxService:NgxUiLoaderService,
    private applicationService:ApplicationserviceService,
    private snarckbarService:SnackbarService,
    private dialogRef:MatDialogRef<ApplicantPassportComponent>,
    private appSerial:DatapasserService,
  ){
    this.applicationserialNumber=this.appSerial.getAppId();
  }
  ngOnInit(): void {

   this.applicationForm=this.formBuilder.group({
    applicationNumber:[this.applicationserialNumber,[Validators.required,Validators.pattern(GlobalConstants.textFieldRegex)]],
  
    passportImage:this.selectedFileNames[0],
   })
  }


  selectImage(event: any) {
  this.selectedFile=event.target.files;
  if(this.selectedFile && this.selectedFile[0]){
    const numberOfFiles=this.selectedFile.length;
    for(let i=0;i<numberOfFiles; i++){
    const reader=new FileReader();
    reader.onload=(e:any)=>{
     // console.log(e.target.result);
      this.preview.push(e.target.result)
    }
    reader.readAsDataURL(this.selectedFile[i]);
    this.selectedFileNames.push(this.selectedFile[i].name);
    this.image=this.selectedFile[i];
    }
  }
    }
    applicationForm: any=FormGroup;
    previous() {
      this.dialog.closeAll()
      const dialogConfig=new MatDialogConfig()
    
    this.dialog.open(SerialLoginComponent,dialogConfig);
    }
  handleSubmit=()=> {
  
  }
}
