
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { SnackbarService } from '../../services/snackbar.service';
import {MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-manage-terms',
  imports: [MatToolbarModule, MatDialogModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatSlideToggleModule],
  templateUrl: './manage-terms.component.html',
  styleUrl: './manage-terms.component.css'
})
export class ManageTermsComponent implements OnInit {
// test($event: MatSlideToggleChange) {
// console.log($event)
// }
  list:any
  isChecked:any;
  selectedValue:any
  currentState:any
  constructor(private snackbar:SnackbarService, private academicService:AcademicService, private dialog:MatDialogRef<ManageTermsComponent>){
    this.academicService.listTerms().subscribe((response:any)=>{
 
      if(response?.message){
        this.snackbar.openSnackBar(response?.message,'')
      }else{
        this.list=response?.data
  
      }
    })
  }
  ngOnInit(): void {
      
  }
refreshData=()=>{
  this.list=undefined

     this.academicService.listTerms().subscribe((response:any)=>{
 
      if(response?.message){
        this.snackbar.openSnackBar(response?.message,'')
      }else{
        this.list=response?.data
  
      }
    })
}

isSelected($event: MatSlideToggleChange) {
  console.log($event);
  if($event.checked){
    this.isChecked="true"
    this.selectedValue=$event.source.ariaLabel
    this.currentState="CURRENT"

  }else{
    this.isChecked="false"
    this.selectedValue=$event.source.ariaLabel
    this.currentState="INACTIVE"
  }
let data={
  isChecked:this.isChecked,
  selectedValue:this.selectedValue,
  currentState:this.currentState
}
this.academicService.updateTerm(data).subscribe((response:any)=>{
  this.snackbar.openSnackBar(response?.message,'')
  this.refreshData()
})
}
dismiss() {
this.dialog.close()
}

}
