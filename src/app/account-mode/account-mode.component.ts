import { Component, inject, signal, Signal } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RouterOutlet, RouterLinkWithHref, Router, ActivatedRoute } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

import { LearneraccountServcie } from '../services/learneraccountservoce';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { PopoverModule } from 'primeng/popover';

@Component({
  standalone:true,
  selector: 'app-account-mode',
  imports: [ToolbarModule,
    ButtonModule,
    DividerModule,
    RouterOutlet,
    FormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    MessageModule,
    ToastModule,
     PopoverModule],
  templateUrl: './account-mode.component.html',
  styleUrl: './account-mode.component.scss',
  providers: [MessageService]

})

export class AccountModeComponent {
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
schoolFee() {
this.isSchoolfeeTpggle.set(true)

    this.routerLink.navigate(['schoolfeebills'], { relativeTo: this.route });
}
specialLevy() {
throw new Error('Method not implemented.');
}
     private messageService = inject(MessageService);
     message:any
  constructor(private routerLink:Router,private route: ActivatedRoute,private accountservice:LearneraccountServcie){}
getLearnerDetails() {
  let data={
    learnerID:this.learnerID
  }
  return this.accountservice.getLeaner(data).subscribe((response:any)=>{
    if(response?.data){
      this.accountservice.learnerData=response?.data
      this.routerLink.navigate(['learneraccount'], { relativeTo: this.route });
      this.isLearnerAccountvisible.set(false)
    }else{
      if(response?.message){
        this.message=response?.message
              this.messageService.add({ severity: 'info', summary: 'Messgae', detail: this.message });
      }
    }
  })

}
    isLearnerAccountvisible= signal(false);
    isSchoolfeeTpggle=signal(false)
learnerID: any;

Payments() {
  this.isLearnerAccountvisible.set(true)
}

}
