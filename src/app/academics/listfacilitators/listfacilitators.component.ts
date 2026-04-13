
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataObjectsService } from '../../services/data-objects.service';

@Component({
  selector: 'app-listfacilitators',
  imports: [MatToolbarModule, MatDialogModule, ReactiveFormsModule, MatIconModule, FormsModule, MatInputModule, MatRippleModule, MatTooltipModule, MatInputModule, MatFormFieldModule, MatBottomSheetModule, MatDialogModule],
  templateUrl: './listfacilitators.component.html',
  styleUrl: './listfacilitators.component.css'
})
export class ListfacilitatorsComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ListfacilitatorsComponent>,
    private dataservice: DataObjectsService,
  ) { }
  search: any;
  facilitators: any
  facilitatorsImages: any;
  handleSearch() {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.facilitators = this.dataservice.facilitatorsData

    this.facilitatorsImages = this.dataservice.facilitatorsImages

    console.log(this.dataservice.facilitatorsImages.images)
    if (this.facilitators != undefined) {
      if (this.facilitatorsImages != undefined) {
        for (let i = 0; i < this.facilitatorsImages.length; i++) {

          var buffer = new Buffer(this.facilitatorsImages[i].Photo);
          let base64String = buffer.toString('base64')
          if (typeof this.facilitators[i] === 'object') {
            this.facilitators[i]["Photo"] = base64String
          }
        }
      } else {

      }
    } else {

    }

  }
}
