import { Component, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { AdmissionSvcService } from '../../services/admission-svc.service';
import { MessageService } from 'primeng/api';
import { Toast } from "primeng/toast";
import { CardModule } from 'primeng/card';
import { Divider } from "primeng/divider";
import { SelectModule } from 'primeng/select';
import { FormGrades, PinAcademicyear, SERIALNUMBERS } from '../../interfaces/admission-data';
import { MessageModule } from 'primeng/message';
import { ToolbarModule } from 'primeng/toolbar';
import { Table, TableModule } from 'primeng/table';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DatePipe } from '@angular/common';
import { ApplicationserviceService } from '../../services/applicationservice.service';

import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'serial-numbers',
  imports: [FormsModule,
    DialogModule,
    AvatarModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    InputNumberModule,
    CardModule,
    Toast,
    Divider,
    SelectModule,
    MessageModule,
    ToolbarModule,
    TableModule,
    ToggleSwitchModule,
    DatePipe, RouterOutlet],
  templateUrl: './serial-numbers.html',
  styleUrls: ['./serial-numbers.css'],
  providers: [MessageService]
})
export class SerialNumbers implements OnInit {
gotFormsReport() {
    this.routerLink.navigate(['forms-sales-report'], { relativeTo: this.route });
}

  messageservice = inject(MessageService)
  constructor(private routerLink:Router,private route: ActivatedRoute,private admissionservcie: AdmissionSvcService,private applicationservice:ApplicationserviceService) { }
  ngOnInit(): void {

  }
  
  setFormprice() {
  this.routerLink.navigate(['forms-manager'], { relativeTo: this.route });
  
}
sellForm() {
  this.routerLink.navigate(['sell-forms'], { relativeTo: this.route });
  
}

goTogeneratePins() {
  this.routerLink.navigate(['generate-pins'], { relativeTo: this.route });
  
}

}
