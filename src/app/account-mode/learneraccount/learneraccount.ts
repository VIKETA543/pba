import { Component, inject, OnInit } from '@angular/core';
import { LearneraccountServcie } from '../../services/learneraccountservoce';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
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
    ToastModule,],
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
    throw new Error('Method not implemented.');
  }
  constructor(private learnceracservcie: LearneraccountServcie, public sanitizer: DomSanitizer) {
    this.learnerData = this.learnceracservcie.learnerData

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
                    console.log(this.academicData)
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
    throw new Error('Method not implemented.');
  }
  bussFee() {
    throw new Error('Method not implemented.');
  }
  canteenFee() {
    throw new Error('Method not implemented.');
  }
}
