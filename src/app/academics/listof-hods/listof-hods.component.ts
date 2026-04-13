import { Component, OnInit } from '@angular/core';
import { AcademicService } from '../../services/academic.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { DomSanitizer } from '@angular/platform-browser';
import { Buffer } from 'buffer';
@Component({
  selector: 'app-listof-hods',
  imports: [MatToolbarModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule],
  templateUrl: './listof-hods.component.html',
  styleUrl: './listof-hods.component.css'
})
export class ListofHodsComponent implements OnInit{
  responseData:any
  search:any
  index:number =0;
constructor(private academicservice:AcademicService,
  public sanitizer:DomSanitizer,private snackbar:SnackbarService){

}
ngOnInit() {
  this.academicservice.loadhods().subscribe((response:any)=>{
    if(response?.message){
      this.snackbar.openSnackBar(response?.message,'')
    }else{
      if(response?.data){
        this.responseData=response?.data
        let photos=response?.images

           for (let i = 0; i < photos.length; i++) {
       
            var buffer = new Buffer( photos[i].Photo);
           let base64String= buffer.toString('base64')
          if(typeof this.responseData[i]==='object'){
            this.responseData[i]["Photo"]=base64String
          }
        }


      }else{
        this.snackbar.openSnackBar("Unknown error occured",'')
      }
    }

  })  
}
handleSearch=()=>{

}
}
