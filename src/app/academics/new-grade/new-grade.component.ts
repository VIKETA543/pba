
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../../services/snackbar.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RenameGradeBottomsheetComponent } from '../../actions/rename-grade-bottomsheet/rename-grade-bottomsheet.component';
import { DataObjectsService } from '../../services/data-objects.service';

@Component({
  selector: 'app-new-grade',
  imports: [ReactiveFormsModule, MatToolbarModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule],
  templateUrl: './new-grade.component.html',
  styleUrl: './new-grade.component.css'
})
export class NewGradeComponent {
NewGrade: any;
serialNumber:any;
private  bottomSheet=inject(MatBottomSheet)
constructor(public dialogRef:MatDialogRef<NewGradeComponent>,
  private dataOobjectservice:DataObjectsService, private academicservice:AcademicService,private snackbar:SnackbarService){

  
    let randomInteger: number = this.getRandomInt(1, 10000); // Generates a random integer between 1 and 10

    this.serialNumber="BHAGRD-"+randomInteger
}
   getRandomInt(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
submit=()=>{
  this.dialogRef.close({click:this.submit})
  let date = new Date();
  let day=date.getDay();
  let month=date.getMonth();
  let year=date.getFullYear();
  let data={
    serialNumber:this.serialNumber,
    grade:this.NewGrade,
    date:year+"-"+month+"-"+day
  }
this.academicservice.newGrade(data).subscribe((response:any)=>{
  this.snackbar.openSnackBar(response?.message,'')
})
}
}
