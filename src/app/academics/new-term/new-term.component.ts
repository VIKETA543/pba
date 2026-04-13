
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';
import {MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';
@Component({
  selector: 'app-new-term',
  imports: [MatToolbarModule, MatDialogModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatSlideToggleModule],
  templateUrl: './new-term.component.html',
  styleUrl: './new-term.component.css'
})
export class NewTermComponent implements OnInit {
isCurrent($event: MatSlideToggleChange) {
this.iscurrent=$event.checked
this.currentState=$event.source.ariaLabel
}
  termID:any
  iscurrent:any
  currentState:any="INACTIVE"
  constructor(private matdialogref:MatDialogRef<NewTermComponent>,
    private academicservice:AcademicService,private snackbar:SnackbarService
  ){}
  ngOnInit(): void {
      
  }
geneTermID=()=>{
let randomInteger: number = this.getRandomInt(1, 10000); // Generates a random integer between 1 and 10

    return this.termID="TRM-"+randomInteger
}

getRandomInt(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
dismiss() {
this.matdialogref.close()
}
selectedTerm:any
isChecked:any
  isSelected=(event:MatSlideToggleChange)=>{
    if(event.checked){
      this.isChecked="true"
      this.selectedTerm=event.source.ariaLabel
    }else{
      this.isChecked="false"
      this.selectedTerm=event.source.ariaLabel
    }
    
    if(this.selectedTerm===undefined){
         this.snackbar.openSnackBar("Please select a choice","")
    }else{
      
      let date = new Date()
      let day=date.getDate()
      let month= date.getMonth()
      let year=date.getFullYear();
      let data={
        trmID:this.geneTermID(),
        selectedTerm:this.selectedTerm,
        Status:this.isChecked,
        date:year+"-"+month+"-"+day,
        currentTerm:this.iscurrent,
        currentState:this.currentState
      }
      this.academicservice.createTerm(data).subscribe((response:any)=>{
        if(response?.message){
          this.dismiss()
          this.snackbar.openSnackBar(response?.message,"")
        }else{

        }
      })
    }
  }
}
