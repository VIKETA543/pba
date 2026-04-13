
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AcademicService } from '../../services/academic.service';
import { response } from 'express';
import { SnackbarService } from '../../services/snackbar.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { AcademicdashboardComponent } from '../academicdashboard/academicdashboard.component';
import { NewAcademicWeekComponent } from '../new-academic-week/new-academic-week.component';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-manage-weeks',
  imports: [
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatRippleModule,
    ButtonModule
],
  templateUrl: './manage-weeks.component.html',
  styleUrl: './manage-weeks.component.css'
})
export class ManageWeeksComponent {
  loadedweeks:any
  acdatboard:any=AcademicdashboardComponent
  constructor(private dialog:MatDialog, private snackbar:SnackbarService, private academicservice:AcademicService, public dialogRef:MatDialogRef<ManageWeeksComponent>){
    this.registerweeks()
  } 
  registerweeks(){
    this.academicservice.getweeks().subscribe((response:any)=>{
  if(response?.message){
    this.snackbar.openSnackBar(response?.message,'')
  }else{
    this.loadedweeks=response?.results
  }
})
  }
del(no:number,week:string){
  let data={
    sn:no
  }
this.academicservice.delweek(data).subscribe((response:any)=>{
  this.registerweeks()
  this.snackbar.openSnackBar(response?.message,'')
})
}
addWeek=()=>{
  this.dialogRef.close()
  this.dialog.open(NewAcademicWeekComponent, {
        maxWidth: '80vw',
        maxHeight: '50vh',
        height: 'auto',
        width: 'calc(100% - 70%)',
        position: {
          bottom: '0vh',
          left: 'calc(100% - 80%)',
        },
        panelClass: 'full-screen-modal'
      });
}
}
