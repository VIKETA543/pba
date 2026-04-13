import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconButton } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';
import { SnackbarService } from '../../services/snackbar.service';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-open-register',
  providers: [provideNativeDateAdapter()],
  imports: [MatToolbarModule, MatDialogModule, MatSelectModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatRippleModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatIconModule, MatSlideToggleModule],
  templateUrl: './open-register.component.html',
  styleUrl: './open-register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenRegisterComponent implements OnInit {

isSelected($event: MatSlideToggleChange) {
this.isCurrent=$event.checked
}
  term: any
  session: any
  week: any
  termEndsDate: any;
  termBeginsDate: any
  numberofWeeks:number=0
  totalDays:number=0
  userData:any

  selectedTerm:any;
  selectedTSession:any;
  selectedWeekbegins:any
  EntryID:any
    isCurrent:boolean=false
  constructor(private snackbar:SnackbarService, public dialogRef:MatDialogRef<OpenRegisterComponent>, private user:UserService, private academicservice: AcademicService) {
    this.loadAcademicObject();
    
  }
  ngOnInit(): void {
      // let user=localStorage.getItem('userData')
      console.log(this.user.userdata)
      this.userData=this.user.userdata;
   let randomInteger: number = this.getRandomInt(1, 10000); // Generates a random integer between 1 and 10

    this.EntryID="BHA-ACTM-"+randomInteger
}
   getRandomInt(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }




  loadAcademicObject = () => {
    this.academicservice.loadacademicDetails().subscribe((response: any) => {
      this.term = response?.term
      this.session = response?.session
      this.week = response?.week
      console.log(response)
    })
  }
  calTotalDays=()=>{
    return this.totalDays=(this.numberofWeeks*5)
  }
  submit=()=>{
    console.log(this.termBeginsDate)
    let data={
      entryID:this.EntryID,
      term:this.selectedTerm,
      year:this.selectedTSession,
      week:this.selectedWeekbegins,
      toalDays:this.totalDays,
      totalWeeks:this.numberofWeeks,
      termbegins:this.termBeginsDate,
      termEnds:this.termEndsDate,
      date:new Date(),
      user:this.userData.userID,
      isCurrent:this.isCurrent
    }
    this.academicservice.openTerm(data).subscribe((response:any)=>{
      this.snackbar.openSnackBar(response?.message,"")
    })
  }
  dismise=()=>{
    this.dialogRef.close()

  }
  selectTermBengins=(event:any)=>{
    this.termBeginsDate=event.value
  }
  selectedTermEnds=(event:any)=>{
 this.termEndsDate=event.value
  }
  setTerm=(event:any)=>{
 
    this.selectedTerm=event.value
    
  }
  setYear=(event:any)=>{
    this.selectedTSession=event.value
  }
  setWeekBegins=(event:any)=>{

    this.selectedWeekbegins=event.value
  }
}
