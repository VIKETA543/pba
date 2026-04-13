
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-new-academic-week',
  imports: [MatToolbarModule, MatDialogModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatInputModule, MatSlideToggleModule, MatButtonModule],
  templateUrl: './new-academic-week.component.html',
  styleUrl: './new-academic-week.component.css'
})
export class NewAcademicWeekComponent {

WeekValueType:any
EntryID:any
  constructor(private academicservice:AcademicService,private snackbar:SnackbarService, public dialogRef:MatDialogRef<NewAcademicWeekComponent>){

   let randomInteger: number = this.getRandomInt(1, 10000); // Generates a random integer between 1 and 10

    this.EntryID="BHA-WK-"+randomInteger
}
   getRandomInt(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
submit() {
  let data={
    weekID:this.EntryID,
    newWeek:"WEEK "+this.WeekValueType
  }
this.dialogRef.close({
  click:this.submit
})
this.academicservice.newWeek(data).subscribe((response:any)=>[
  this.snackbar.openSnackBar(response?.message,"")
])
}
}
