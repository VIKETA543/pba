import { Component, inject, OnInit, signal } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ForgotpassordComponent } from '../forgotpassord/forgotpassord.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CarouseService } from '../services/carouse-service';
import { Carousel } from '../interfaces/carousel';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-home',
  imports: [ToolbarModule,AvatarModule,ButtonModule,AvatarGroupModule,TagModule,CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
      private carouselservice = inject(CarouseService);
    CarouselImages = signal<Carousel[]>([]);
    responsiveOptions: any[] | undefined;



constructor(private dialog:MatDialog){

}
  signupAction=()=>{

    const diadlogConfig = new MatDialogConfig();
    diadlogConfig.width='550px'
    this.dialog.open(SignupComponent,diadlogConfig);
    
  };

  loginAction=()=>{
    console.log("loging")
 const diadlogConfig = new MatDialogConfig();
 diadlogConfig.width='550px'
 this.dialog.open(LoginComponent,diadlogConfig);
  };


  
    ngOnInit() {
       this.carouselservice.getAllImages().then((data) => {
            this.CarouselImages.set(data.slice(0, 12));
        });
        this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

}
