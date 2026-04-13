import { Component, inject, OnInit } from '@angular/core';
import { DataObjectsService } from '../../services/data-objects.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Buffer } from 'buffer'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AcademicService } from '../../services/academic.service';
import { SnackbarService } from '../../services/snackbar.service';
@Component({
  selector: 'app-add-learner-toaddgrade',
  imports: [MatToolbarModule, MatDialogModule, ReactiveFormsModule, FormsModule, MatIconModule, MatRippleModule, MatFormFieldModule],
  templateUrl: './add-learner-toaddgrade.component.html',
  styleUrl: './add-learner-toaddgrade.component.css'
})
export class AddLearnerTOAddgradeComponent implements OnInit {
  private bottomsheet = inject<MatBottomSheetRef<AddLearnerTOAddgradeComponent>>(MatBottomSheetRef)

  submit() {
    let data = {
      AdmissionNumber: this.learnerData.AdmissionNumber,
      DepartmentID:this.dataobject.gradeData.DepartmentID,
      gradeId:this.dataobject.gradeData.gradeId,
      Status:"Confirmed"
    }
    this.academicservice.AddlearnerTograde(data).subscribe((response:any)=>{
      this.snackbar.openSnackBar(response?.message,'')
    })
  }
  dismiss() {
    this.bottomsheet.dismiss()
  }
  Photo: any
  learnerData: any
  constructor(private snackbar:SnackbarService, private academicservice:AcademicService, private dataobject: DataObjectsService, public sanitizer: DomSanitizer) {
    this.learnerData = this.dataobject.learernerData
    
    var buffer = new Buffer(this.dataobject.learernerData.Image);
    let base64String = buffer.toString('base64')
    this.Photo = base64String;
  }
  ngOnInit(): void {
  }
}
