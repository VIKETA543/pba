import { Component, inject, OnInit } from '@angular/core';
import { LearneraccountServcie } from '../../services/learneraccountservoce';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLinkWithHref,Router, ActivatedRoute  } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DomSanitizer } from '@angular/platform-browser';
import { PopoverModule } from 'primeng/popover';
import { MessageService } from 'primeng/api';
import { Learnerservice } from '../../services/learnerservice';



@Component({
  selector: 'learneraccount',
  imports: [ToolbarModule,
    ButtonModule,
    DividerModule,
    PopoverModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    MessageModule,
    ToastModule, RouterOutlet],
  templateUrl: './learneraccount.html',
  styleUrl: './learneraccount.css',
  providers: [MessageService]
})
export class Learneraccount implements OnInit {

       private messageService = inject(MessageService);
  learnerData: any
  academicData: any
  message:any
 
  schoolFee() {
    this.router.navigate(['prepare-schoolfee'], { relativeTo: this.route });

  }
  constructor(private learnceracservcie: LearneraccountServcie, private learnerservice:Learnerservice, public sanitizer: DomSanitizer,private router:Router,private route: ActivatedRoute) {
    this.learnerData = this.learnceracservcie.learnerData
  
      this.learnerservice.setAdmissionNumber(this.learnerData[0].AdmissionNumber)
       this.learnerservice.setCurrentGrade(this.learnerData[0].SerialNumber)

       this.learnerservice.setAcademicYear
       

  
  }
ngOnInit(): void {
this.loadAcademicDetails()
 
     
}
  loadAcademicDetails = () => {
    return this.learnceracservcie.loadAcademicDetails().subscribe((response: any) => {
      if (response?.message) {
          this.message=response?.message
              this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
      } else {
        if (response?.data) {

          this.academicData = response?.data
         
    this.learnerservice.setCurrentTerm(this.academicData[0].OpenedTerm)
    this.learnerservice.setAcademicYear(this.academicData[0].AcademicYear)
               console.log('the data '+ this.academicData)

        } else {
  this.message=response?.message
              this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
        }
      }
    })
  }
  specialLevy() {
    throw new Error('Method not implemented.');
  }
  uniForms() {
    throw new Error('Method not implemented.');
  }
  ptaDues() {
   this.router.navigate(['pta-payment-schedule'], { relativeTo: this.route });
  }
  bussFee() {
    this.router.navigate(['bus-bill-schedule'], { relativeTo: this.route });

  }
  canteenFee() {
    this.router.navigate(['cateen-fee-structure'], { relativeTo: this.route });
  }
}
