import { Component, OnInit } from '@angular/core';
import { AdmissionSvcService } from '../services/admission-svc.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { UserService } from '../services/user.service';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-withdrawal-list',
  imports: [MatToolbarModule, MatDialogModule, MatFormFieldModule, MatDialogModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatRippleModule, MatToolbarModule, MatInputModule, FormsModule, MatCheckboxModule],
  templateUrl: './withdrawal-list.component.html',
  styleUrl: './withdrawal-list.component.css'
})
export class WithdrawalListComponent implements OnInit {

  handleAuth(arg0: string) {
    if (arg0 === "YES") {
      this.auth_status = "ACCEPT"
      this.isDenied = false
    } else {
      if (arg0 === "NO") {

        this.auth_status = "DENIED"
        this.isAuthourised = false
      } else {

      }
    }
  }

  image: any;
  data: any;
  userId: any
  message: any;
  isAuthourised: any;
  isDenied: any;
  auth_status: any;
  ngOnInit(): void {
    this.admisionservice.WITHDRAWAL_QUERY_DATA
    this.image = new Image()
    this.data = this.admisionservice.WITHDRAWAL_QUERY_DATA.data
    this.image.src = `data:image/jpeg;base64,${this.admisionservice.WITHDRAWAL_QUERY_DATA.image}`;
    this.userId = this.userservice.userdata
  }

  constructor(private admisionservice: AdmissionSvcService,
    private userservice: UserService,public dialogRef: MatDialogRef<WithdrawalListComponent>
  ) { }

  submit() {
    this.dialogRef.close({
      clicked: 'submit',
    });
    if (!this.message) {
      alert("Authority notice is required")
    } else {
      if (!this.auth_status) {
        alert("Select Authourisation option")
      } else {
        let data = {
          authBy: this.userId.userID,
          admissionnumber: this.data.ADNO,
          message: this.message,
          authstate: this.auth_status
        }
        this.admisionservice.authoriseWithdrwal(data);
      }
    }
  }
}
