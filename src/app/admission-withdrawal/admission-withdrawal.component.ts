import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AdmissionSvcService } from '../services/admission-svc.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admission-withdrawal',
  imports: [MatDialogModule, MatCardModule, MatDialogActions, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatRippleModule, MatToolbarModule, MatSelectModule, FormsModule, MatCheckboxModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './admission-withdrawal.component.html',
  styleUrl: './admission-withdrawal.component.css'
})
export class AdmissionWithdrawalComponent implements OnInit {

admissionnumber: any;
promptData:any
  form:any=FormGroup;
  isconfirm:boolean=false;
  withDrawn:string='NO'
  withdrawnDate:any;
  confirmApplicant: any;
  data:any
  userDetails:any;
confirm(arg0: string) {
  if(this.isconfirm){
   
    this.withDrawn=arg0;
  }else{
    this.withDrawn='NO'
  }

}




constructor(private admissionservice:AdmissionSvcService,
  private formBuilder:FormBuilder,private userdata:UserService
){}
  ngOnInit(): void {
 this.userDetails=this.userdata.userdata

      this.admissionnumber=this.admissionservice.WITHDRAWAL_QUERY_DATA.admNo
      this.promptData=this.admissionservice.WITHDRAWAL_QUERY_DATA
this.form=this.formBuilder.group({
    reasonforwithdrwal:['',Validators.required],
  details:['',Validators.required],
  guardianName:['',Validators.required],
  GuardianContact:['',Validators.required],
})
  }

  hangleWithdrawal() {
    
    let date = new Date();
    const day=date.getDate();
    const month=date.getUTCMonth()+1;
    const year=date.getFullYear();
     this.withdrawnDate=year + "-"+month+"-"+day
    const formData=this.form.value
    let data={
      admissionnumber:this.admissionnumber,
      withdrawnDate:this.withdrawnDate,
      reasonforwithdrwal:formData.reasonforwithdrwal,
      details:formData.details,
      guardianName:formData.guardianName,
      GuardianContact:formData.GuardianContact,
      confirmed:this.withDrawn,
       confirmBy:this.userDetails.userID
    }
    this.admissionservice.withdrawLearner(data);
  }
}
