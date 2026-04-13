import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataObjectsService } from '../../services/data-objects.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogActions, MatDialogContent, MatDialogRef } from "@angular/material/dialog";
import { MatIconModule } from '@angular/material/icon';
import { MatRipple, MatRippleModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AcademicService } from '../../services/academic.service';
import { SnackbarService } from '../../services/snackbar.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { response } from 'express';
import { MatCardModule } from '@angular/material/card';
import { DomSanitizer } from '@angular/platform-browser';
import { Buffer } from 'buffer';
import { Table, TableModule } from 'primeng/table';
import { attendance } from '../../interfaces/table-data';


@Component({
  selector: 'app-attendance-register',
  imports: [MatToolbarModule, MatDialogContent, MatDialogActions, MatIconModule, MatRippleModule, FormsModule, ReactiveFormsModule, MatSlideToggleModule, MatMenuModule, MatSelectModule, MatTooltipModule, MatCardModule],
  templateUrl: './attendance-register.component.html',
  styleUrl: './attendance-register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttendanceRegisterComponent implements OnInit {

  attendanceRecrd:any
   attendaceTableData!: attendance[]; 

  event: any;
  prevAttn: any
  close() {
    this.loadedWeeks = undefined
    // this.isNewWeek=!this.isNewWeek
  }

  isSelected = (event: MatSlideToggleChange) => {
  }

  attendanceData: any
  attendanceObjects: any
  activityParam: any
  serialNumber: any

  loadedWeeks: any;
  newWeekObjects: any
  activityList: any
  counter: number = 0;
  isclosing: boolean = false
  isDropping: any
  learnerID: any
  learnerAttendances: any
  headers: any
  image: any
  base64Image: any
  index: number = 0
  constructor(public sanitizer: DomSanitizer, private snackbar: SnackbarService, private academicservice: AcademicService, public dialogRef: MatDialogRef<AttendanceRegisterComponent>, private dataobjects: DataObjectsService) {
    this.initTermObjects();

  }
  ngOnInit(): void {

  }

  initTermObjects() {
    this.attendanceData = this.dataobjects.markregitersInitor
    this.attendanceObjects = this.dataobjects.marlRegisterData
    this.activityParam = {
      staffID: this.attendanceData[0].StaffID,
      AssignedGrade: this.attendanceData[0].AssignedGrade,
      DeptID: this.attendanceData[0].AssignedDepartment,
      AcademicYear: this.attendanceObjects[0].AcademicYear,
      TermID: this.attendanceObjects[0].OpenedTerm

    }
  }
  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  submit = () => {
    this.academicservice.saveWeek(this.newWeekObjects).subscribe((response: any) => {
      if (response?.message) {
        this.snackbar.openSnackBar(response?.message, '')
      } else {
        if (response?.RECORD_FOUND) {
          this.loadedWeeks = undefined
          this.attendanceRecrd = response?.RECORD_FOUND
          this.attendaceTableData=response?.RECORD_FOUND

        } else {
          this.snackbar.openSnackBar("An unknown error occured", '')
        }
      }
    })
  }
  startNewWeek = () => {
    let randomInteger: number = this.getRandomInt(1, 100000); // Generates a random integer between 1 and 10
    this.serialNumber = "BHA-ATTN-" + randomInteger
    this.academicservice.loadActiveWeeks().subscribe((response: any) => {
      if (response?.DATA_FOUND) {
        this.loadedWeeks = response?.DATA_FOUND
      } else {
        this.snackbar.openSnackBar(response?.message, "")
      }
    })
  }
  getWeek($event: MatSelectChange<any>) {

    this.newWeekObjects = {
      staffID: this.attendanceData[0].StaffID,
      AssignedGrade: this.attendanceData[0].AssignedGrade,
      DeptID: this.attendanceData[0].AssignedDepartment,
      AcademicYear: this.attendanceObjects[0].AcademicYear,
      TermID: this.attendanceObjects[0].OpenedTerm,
      weekID: $event.value,
      attendanceID: this.serialNumber

    }

  }
  activity = () => {
    let data = {
      AssignedGrade: this.attendanceData[0].AssignedGrade,
      DeptID: this.attendanceData[0].AssignedDepartment,
      AcademicYear: this.attendanceObjects[0].AcademicYear,
      TermID: this.attendanceObjects[0].OpenedTerm
    }
    this.academicservice.activity(data).subscribe((response: any) => {
      if (response?.message) {
        this.snackbar.openSnackBar("Message: " + response?.message, '')
      } else {
        if (response?.NEW_ACTIVITY) {
          this.attendanceRecrd = response?.NEW_ACTIVITY
        } else {
          if (response?.DATA_FOUND) {
            this.attendanceRecrd = response?.DATA_FOUND
          } else {
            this.snackbar.openSnackBar("An unkwown error occured! Try again", '')
          }
        }
      }
    })
  }
  Monday = ($event: MatSlideToggleChange, activitID: any) => {
    console.log($event)
    let selected: any = false
    if ($event.checked === true) {
      selected = "true"
    } else {
      selected = "false"
    }
    let action = {
      selection: selected,
      learnerID: $event.source.ariaLabel,
      activitID: activitID
    }
    this.academicservice.monday(action).subscribe((response: any) => {
      if (response?.message) {
        this.snackbar.openSnackBar(response?.menssage, '')
      } else {
        if (response?.DATA_FOUND) {
          this.attendanceRecrd = response?.DATA_FOUND
        } else {

        }
      }
    })
  }
  Tuesday = ($event: MatSlideToggleChange, activitID: any) => {
    let selected: any = false
    if ($event.checked === true) {
      selected = "true"
    } else {
      selected = "false"
    }
    let action = {
      selection: selected,
      learnerID: $event.source.ariaLabel,
      activitID: activitID
    }
    this.academicservice.tuesday(action).subscribe((response: any) => {
      if (response?.message) {
        this.snackbar.openSnackBar(response?.menssage, '')
      } else {
        if (response?.DATA_FOUND) {
          this.attendanceRecrd = response?.DATA_FOUND
        } else {

        }
      }
    })
  }
  Wednesday = ($event: MatSlideToggleChange, activitID: any) => {
    let selected: any = false
    if ($event.checked === true) {
      selected = "true"
    } else {
      selected = "false"
    }
    let action = {
      selection: selected,
      learnerID: $event.source.ariaLabel,
      activitID: activitID
    }
    this.academicservice.wednesday(action).subscribe((response: any) => {
      if (response?.message) {
        this.snackbar.openSnackBar(response?.menssage, '')
      } else {
        if (response?.DATA_FOUND) {
          this.attendanceRecrd = response?.DATA_FOUND
        } else {

        }
      }
    })
  }
  Thursday = ($event: MatSlideToggleChange, activitID: any) => {
    let selected: any = false
    if ($event.checked === true) {
      selected = "true"
    } else {
      selected = "false"
    }
    let action = {
      selection: selected,
      learnerID: $event.source.ariaLabel,
      activitID: activitID
    }
    this.academicservice.thursday(action).subscribe((response: any) => {
      if (response?.message) {
        this.snackbar.openSnackBar(response?.menssage, '')
      } else {
        if (response?.DATA_FOUND) {
          this.attendanceRecrd = response?.DATA_FOUND
        } else {

        }
      }
    })
  }
  Friday = ($event: MatSlideToggleChange, activitID: any) => {
    let selected: any = false
    if ($event.checked === true) {
      selected = "true"
    } else {
      selected = "false"
    }
    let action = {
      selection: selected,
      learnerID: $event.source.ariaLabel,
      activitID: activitID
    }
    this.academicservice.friday(action).subscribe((response: any) => {
      if (response?.message) {
        this.snackbar.openSnackBar(response?.menssage, '')
      } else {
        if (response?.DATA_FOUND) {
          this.attendanceRecrd = response?.DATA_FOUND
        } else {

        }
      }
    })
  }
  showClosing = () => {
    this.isclosing = true
  }
  exit = () => {
    this.isclosing = false
  }
  closeWeek = (id: any) => {
    this.isclosing = false
    let idx = {
      activityID: id
    }
    this.academicservice.closeweek(idx).subscribe((response: any) => {
      if (response?.SUCCESS) {
        this.snackbar.openSnackBar(response?.SUCCESS, '')
      } else {
        if (response?.message) {
          this.snackbar.openSnackBar(response?.message, '')
        } else {
          this.snackbar.openSnackBar("An unknown error occured", '')
        }
      }
    })
  }


  ActivateWeek = (id: any) => {
    this.isclosing = false
    let idx = {
      activityID: id
    }
    this.academicservice.closeweek(idx).subscribe((response: any) => {
      if (response?.SUCCESS) {
        this.snackbar.openSnackBar(response?.SUCCESS, '')
      } else {
        if (response?.message) {
          this.snackbar.openSnackBar(response?.message, '')
        } else {
          this.snackbar.openSnackBar("An unknown error occured", '')
        }
      }
    })
  }
  openisDropping = () => {

    this.isDropping = true
  }
  closeDropping = () => {
    return this.isDropping = false
  }
  dropLearner() {

    let data = {
      learnerID: this.learnerID
    }

    return this.academicservice.getlearner(data).subscribe((response: any) => {

      if (response?.error) {
        this.snackbar.openSnackBar(response?.error, '')
      } else {
        this.image = response?.header[0].Image

        var buffer = new Buffer(this.image);
        this.base64Image = buffer.toString('base64')
        this.headers = response?.header
        this.prevAttn = response?.records
        this.isDropping = false
      }
    })
  }
  dropAttendance(id: any, learnerID: any, weekid: any, termid: any, sessionId: any) {
    // const confirm=confirm({message:"This action will drop the attendance for the selected learner and cannot be recovered. Click OK to continnue"})
    // if(confirm){

    // }else{

    // } 
    let data = {
      attnID: id,
      learnerID: learnerID,
      weekId: weekid,
      termid: termid,
      sessionId
    }
    return this.academicservice.dropAttn(data).subscribe((response: any) => {
      this.snackbar.openSnackBar(response?.message, '')
    })
  }
}
