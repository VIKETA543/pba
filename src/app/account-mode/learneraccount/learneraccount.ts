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
import { Accountinterface } from '../../interfaces/accountinterface';
import { Academics } from '../../interfaces/academicInterface';



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
// 

       private messageService = inject(MessageService);
  learnerData: Accountinterface[]=[]
  academicData: Academics[]=[]
  message:any
 
  schoolFee() {
    this.router.navigate(['prepare-schoolfee'], { relativeTo: this.route });

  }
  constructor(private learnceracservcie: LearneraccountServcie, private learnerservice:Learnerservice, public sanitizer: DomSanitizer,private router:Router,private route: ActivatedRoute) {
    this.learnerData = this.learnerservice.learnerData
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
          this.learnerservice.learenracademicData= response?.data
          this.academicData = response?.data

        } else {
  this.message=response?.message
              this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
        }
      }
    })
  }
  specialLevy() {
    this.router.navigate(['pay-speciallevy'], { relativeTo: this.route });
  }
  uniForms() {
     this.router.navigate(['pay-uniforms'], { relativeTo: this.route });
  }
  ptaDues() {
   this.router.navigate(['pay-ptadues'], { relativeTo: this.route });
  }
  bussFee() {
    this.router.navigate(['pay-busfee'], { relativeTo: this.route });

  }
  canteenFee() {
    this.router.navigate(['pay-canteenfee'], { relativeTo: this.route });
  }
  generateBill() {

    this.router.navigate(['generate-termly-bill'], { relativeTo: this.route });
}
PaySchoolFee=()=>{
   this.router.navigate(['pay-schoolfee'], { relativeTo: this.route });
}
}
