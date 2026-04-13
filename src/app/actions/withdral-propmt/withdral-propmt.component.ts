
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdmissionSvcService } from '../../services/admission-svc.service';
import { AdmissionWithdrawalComponent } from '../../admission-withdrawal/admission-withdrawal.component';

@Component({
  selector: 'app-withdral-propmt',
  imports: [
    MatDialogModule,
    MatDialogActions,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule
],
  templateUrl: './withdral-propmt.component.html',
  styleUrl: './withdral-propmt.component.css'
})
export class WithdralPropmtComponent {

  form: FormGroup;
  formData: any;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    public dialogRef: MatDialogRef<WithdralPropmtComponent>,
    private admisionservice:AdmissionSvcService,
    private dialog:MatDialog
  ) {
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
    
    this.admisionservice.finddrawal(data)

    setTimeout(()=>{
      if(this.admisionservice.WITHDRAWAL_QUERY_DATA){
   
        this.dialog.open(AdmissionWithdrawalComponent,{
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '98%',
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
