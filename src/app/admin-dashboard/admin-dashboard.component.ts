import { Component, inject, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver } from '@angular/cdk/layout';

import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user.service';
import { isPlatformBrowser } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({

  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterOutlet,
    RouterLink
],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
  providers:[MessageService]
})
export class AdminDashboardComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  data:any
  image:any
  credentials:any
  message:any
  messageservice=inject(MessageService)
  constructor(private observer: BreakpointObserver, private userdata:UserService,@Inject(PLATFORM_ID) private platformId: Object) { 
  }

  ngAfterViewInit() {
    setTimeout(() => {

      this.observer.observe(['(max-width:800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over'
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      })



    }, 0);

  }
  ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
    
          try {
            this.credentials = JSON.parse(localStorage.getItem('userData') || '{}');
            this.image=JSON.parse(localStorage.getItem("Photo")  || '{}')
            console.log('The crredentials:', this.image)
          } catch (e) {
            this.message = "Could not parse JSON from storage: " + e
            this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message, life: 5000 });
          }
        }
    // if (typeof localStorage !== undefined) {
    //   this.data=localStorage.getItem('userData');
    //   

    //   // rest of the code ...
    // }
    // this.userdata.userdata=JSON.parse(this.data)
  }
}
