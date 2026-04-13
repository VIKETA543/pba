
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialogActions, MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdmissionSvcService } from '../../services/admission-svc.service';
import { WithdralPropmtComponent } from '../withdral-propmt/withdral-propmt.component';
import { WithdrawalListComponent } from '../../withdrawal-list/withdrawal-list.component';

@Component({
  selector: 'app-withdrawal-list-prompt',
  imports: [
    MatDialogModule,
    MatDialogActions,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule
],
  templateUrl: './withdrawal-list-prompt.component.html',
  styleUrl: './withdrawal-list-prompt.component.css'
})
export class WithdrawalListPromptComponent implements OnInit{
  form:any=FormGroup
  constructor(   private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    public dialogRef: MatDialogRef<WithdrawalListPromptComponent>,
    private admisionservice:AdmissionSvcService,
    private dialog:MatDialog){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
          AdmisionNumber: ['', Validators.required],
        });
  }
  submit() {
      var formData=this.form.value;
      let data={AdmisionNumber:formData.AdmisionNumber};
      this.dialogRef.close({
        clicked: 'submit',
      });
      
      this.admisionservice.findWithdrawnLearner(data)
  
      setTimeout(()=>{
        if(this.admisionservice.WITHDRAWAL_QUERY_DATA){
         // console.log()
          this.dialog.open(WithdrawalListComponent,{
              maxWidth: '100vw',
              // maxHeight: '100vh',
              // height: '98%',
              width: 'calc(100% - 10%)',
              position: {
                top: '11vh',
                left: '14vw',
            },
              panelClass: 'full-screen-modal'
            });
  
        }else{
     
        }
      },1000)
    }
}
