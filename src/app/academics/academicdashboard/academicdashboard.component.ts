import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdmissionSvcService } from '../../services/admission-svc.service';
import { AcademicdepartmentComponent } from '../academicdepartment/academicdepartment.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentheadpromptComponent } from '../../actions/departmentheadprompt/departmentheadprompt.component';
import { ManagedeptHeadsComponent } from '../managedept-heads/managedept-heads.component';
import { ManageDepartmentsComponent } from '../manage-departments/manage-departments.component';
import { AddfacilitatorComponent } from '../addfacilitator/addfacilitator.component';
import { AddfacPromptComponent } from '../../actions/addfac-prompt/addfac-prompt.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NewGradeComponent } from '../new-grade/new-grade.component';
import { ManageGradesComponent } from '../manage-grades/manage-grades.component';
import { AcademicsessionsComponent } from '../academicsessions/academicsessions.component';
import { ManageAcademicSessionComponent } from '../manage-academic-session/manage-academic-session.component';
import { NewTermComponent } from '../new-term/new-term.component';
import { ManageTermsComponent } from '../manage-terms/manage-terms.component';
import { NewAcademicWeekComponent } from '../new-academic-week/new-academic-week.component';
import { ManageWeeksComponent } from '../manage-weeks/manage-weeks.component';
import { OpenRegisterComponent } from '../open-register/open-register.component';
import { MarkRegisterComponent } from '../mark-register/mark-register.component';
import { MarkRegPromptComponent } from '../../actions/mark-reg-prompt/mark-reg-prompt.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DividerModule } from 'primeng/divider';
import { PopoverModule } from 'primeng/popover';


@Component({
  standalone:true,
  selector: 'app-academicdashboard',
  imports: [MatButtonModule, 
    MatToolbarModule
   , 
    MatRippleModule,
     MatMenuModule,
      MatDialogModule, 
      ReactiveFormsModule, 
      MatTooltipModule,
    ToolbarModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    DividerModule,
    PopoverModule
  ],
  templateUrl: './academicdashboard.component.html',
  styleUrl: './academicdashboard.component.css'
})
export class AcademicdashboardComponent implements OnInit {
openRegister() {
this.dialog.open(OpenRegisterComponent, {
      maxWidth: '100%',
      maxHeight: 'calc(100vh - 2vh)',
      height: 'auto',
      width: 'calc(100% - 40%)',
      position: {
        bottom: '1%',
        left: 'calc(100% - 50%)',
      },
      panelClass: 'full-screen-modal', disableClose: true
    });
}
markRegister=()=>{
  this.dialog.open(MarkRegPromptComponent, {
      maxWidth: '100%',
      maxHeight: 'calc(100vh - 50vh)',
      height: 'auto',
      width: 'calc(100% - 70%)',
      position: {
        top: '30%',
        left: 'calc(100% - 70%)',
      },
      panelClass: 'full-screen-modal', disableClose: true
    });
}

ManageWeeks() {
this.dialog.open(ManageWeeksComponent, {
      maxWidth: '90%',
      maxHeight: 'calc(100vh - 2vh)',
      height: 'auto',
      width: 'calc(100% - 10%)',
      position: {
        bottom: '1vh',
        left: 'calc(100% - 85%)',
      },
      panelClass: 'full-screen-modal', disableClose: true
    });
}
public newWeek() {
this.dialog.open(NewAcademicWeekComponent, {
      maxWidth: '80vw',
     
      height: 'auto',
      width: 'calc(100% - 70%)',
      position: {
     
        left: 'calc(100% - 80%)',
        bottom:'0hv'
      },
      panelClass: 'full-screen-modal', disableClose: true
    });
}
launchNewgrade() {
this.dialog.open(NewGradeComponent, {
      maxWidth: '80vw',
      maxHeight: '65vh',
      height: '65vh',
      width: 'calc(100% - 70%)',
      position: {
        top: '20vh',
        left: 'calc(100% - 86%)',
      },
      panelClass: 'full-screen-modal', disableClose: true
    });
}
ManageGrades() {
this.dialog.open(ManageGradesComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90vh',
      width: 'calc(100% - 10%)',
      position: {
        top: '5%',
        left: 'calc(100% - 86%)',
      },
      panelClass: 'full-screen-modal', disableClose: true
    });
}
  launchDepartmentHead() {
    this.dialog.open(DepartmentheadpromptComponent, {
      maxWidth: '100vw',
      height: 'auto',
      width: 'calc(100% - 70%)',
      position: {
        bottom: '40vh',
        left: 'calc(100% - 80%)',
      },
      panelClass: 'full-screen-modal', disableClose: true
    });
  }
newAcademicSession=()=>{
this.dialog.open(AcademicsessionsComponent, {
      maxWidth: '100vw',
     
      height: 'auto',
      width: 'calc(100% - 50%)',
      position: {
        top: '5%',
        left: 'calc(100% - 80%)',
      },
      panelClass: 'full-screen-modal', disableClose: true
    });
}

 ManageSession=()=>{

  this.dialog.open(ManageAcademicSessionComponent, {
      maxWidth: 'calc(100% - 0%)',
     minWidth: 'calc(100% - 40%)',
      height: 'auto',
      width: 'calc(100% - 0%)',
      position: {
        bottom:'1vh',
        left: 'calc(100% - 85%)',
        right: 'calc(100% - 90%)',
      },
      panelClass: 'full-screen-modal',
         disableClose: true
    });
    
 } 
  constructor(
    private admisionservice: AdmissionSvcService,
    private dialog: MatDialog,

  ) { }
  ngOnInit() {

  }
  launchDepartment = () => {
    this.dialog.open(AcademicdepartmentComponent, {
      maxWidth: '100vw',

      height: 'auto',
      width: 'calc(100% - 50%)',
      position: {
        bottom: '1vh',
        left: 'calc(100% - 80%)',
      },
      panelClass: 'full-screen-modal', disableClose: true
    });

  }
  launchDeptHeadManager = () => {
    this.dialog.open(ManagedeptHeadsComponent, {
      maxWidth: '100%',
      maxHeight: '100vh',
      // height: '90vh',
      width: 'calc(100% - 0%)',
      position: {
        bottom: '1vh',
        left: 'calc(100% - 84%)',
      },
      panelClass: 'full-screen-modal', disableClose: true
    });
  }
  launchDeptManager = () => {
    this.dialog.open(ManageDepartmentsComponent, {
      maxWidth: '100%',
      maxHeight: '100vh',
      // height: '90vh',
      width: 'calc(100% - 0%)',
      position: {
        bottom: '3vh',
        left: 'calc(100% - 84%)',
      },
      panelClass: 'full-screen-modal', disableClose: true
    });
  }



 launchNewFacitlitator=()=>{
    this.dialog.open(AddfacPromptComponent, {
      maxWidth: '100vw',
      maxHeight: '50vh',
      height: 'auto',
      width: 'calc(100% - 70%)',
      position: {
        bottom: '2vh',
        left: 'calc(100% - 80%)',
      },
      panelClass: 'full-screen-modal', disableClose: true
    });
  }

  NewTerm=()=>{
      this.dialog.open(NewTermComponent, {
      maxWidth: '100vw',
     
      height: 'auto',
      width: 'calc(100% - 50%)',
      position: {
        bottom: '1vh',
        left: 'calc(100% - 80%)',
      },
      panelClass: 'full-screen-modal', disableClose: true
    });
  }
  ManageTerm=()=>{
    this.dialog.open(ManageTermsComponent, {
      maxWidth: '100vw',
     
      height: 'auto',
      width: 'calc(100% - 30%)',
      position: {
        top: '15%',
        left: 'calc(100% - 80%)',
      },
      panelClass: 'full-screen-modal', disableClose: true
    });
  }
}
