
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DataObjectsService } from '../../services/data-objects.service';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-academicsessions',
  imports: [MatToolbarModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDialogModule, FormsModule, MatDatepickerModule],
   providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './academicsessions.component.html',
  styleUrl: './academicsessions.component.css'
})
export class AcademicsessionsComponent {
Startdate: any;
Enddate: any;
academicsession: any;
 EntryID:any
  constructor(public dialogRef:MatDialogRef<AcademicsessionsComponent>,
    private academicservice:AcademicService,private snackbar:SnackbarService,
  ){
 
   let randomInteger: number = this.getRandomInt(1, 10000); // Generates a random integer between 1 and 10

    this.EntryID="BHA-ACY-"+randomInteger
}
   getRandomInt(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }


dismiss() {
this.dialogRef.close();
}
submit() {

this.dialogRef.close({
  click:this.submit
})
let date=new Date();
let day=date.getDay()
let month=date.getMonth();
let year=date.getFullYear();
let data={
  EntryID:this.EntryID,
  academicsession:this.academicsession+" ACADEMIC YEAR",
  description:"The period within describes, the academic year between "+this.Startdate+" "+this.Enddate,
  Startdate:this.Startdate,
  Enddate:this.Enddate,
  date:year+"-"+month+"-"+day
}
this.academicservice.newacademicsession(data).subscribe((response:any)=>{
  if(response?.message){
    this.snackbar.openSnackBar(response?.message,'')
  }else{ 
        this.snackbar.openSnackBar(response?.error,'')
  }
})
}

}
