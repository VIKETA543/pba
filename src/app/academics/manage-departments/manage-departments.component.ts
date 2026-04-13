
import { ChangeDetectionStrategy, Component, OnInit, RESPONSE_INIT, viewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserService } from '../../services/user.service';
import { AcademicService } from '../../services/academic.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { RenameDeptBottomSheetComponent } from '../../actions/rename-dept-bottom-sheet/rename-dept-bottom-sheet.component';
import { departmentList, deptImage } from '../../interfaces/academics';
import { DataObjectsService } from '../../services/data-objects.service';
import { SnackbarService } from '../../services/snackbar.service';
import { ListofHodsComponent } from '../listof-hods/listof-hods.component';
import { OperantionsBottomsheetComponent } from '../../actions/operantions-bottomsheet/operantions-bottomsheet.component';
import { DeptimgBottomsheetComponent } from '../../actions/deptimg-bottomsheet/deptimg-bottomsheet.component';
import { Buffer } from 'buffer';
import { DomSanitizer } from '@angular/platform-browser';
import { ListfacilitatorsComponent } from '../listfacilitators/listfacilitators.component';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone:true,
  selector: 'app-manage-departments',
  imports: [MatToolbarModule, MatDialogModule, 
    ReactiveFormsModule, MatIconModule, FormsModule,
     MatInputModule, MatRippleModule, MatTooltipModule, 
     MatInputModule, MatFormFieldModule, MatBottomSheetModule,
      MatDialogModule,ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './manage-departments.component.html',
  styleUrl: './manage-departments.component.css'
})
export class ManageDepartmentsComponent implements OnInit {
  
handlesFacilitator(data:any) {
  let d={
data:data
  }
  this.academicservice.loadFacilitators(data).subscribe((response:any)=>{
    if(response?.message){
 
      this.snackbar.openSnackBar(response?.message,'')
      if(response?.message==="No Records"){
         this.dataobjservice.facilitatorsData=response?.data
        this.dialog.open(ListfacilitatorsComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90vh',
      width: 'calc(100% - 10%)',
      position: {
        top: '5vh',
        left: 'calc(100% - 86%)',
      },
      panelClass: 'full-screen-modal'
    });
    
      }else{
          this.snackbar.openSnackBar("Unknown error has occured. Try again",'')
      }
    }else{
      this.dataobjservice.facilitatorsData=response?.data
      this.dataobjservice.facilitatorsImages=response?.Photo
      console.log(response?.Photo)
        this.dialog.open(ListfacilitatorsComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90vh',
      width: 'calc(100% - 10%)',
      position: {
        top: '5vh',
        left: 'calc(100% - 86%)',
      },
      panelClass: 'full-screen-modal'
    });
    }
  })

  

}
  handleImageUpload(arg0: any) {

    this.dataobjservice.departmentID = arg0;

    this._bottomSheet.open(DeptimgBottomsheetComponent);

  }
  search: any
  user: any
  data: any
  totalDept: number = 0;
  newDeptName: any
  selectedDept: any
  departmentList: departmentList[] = []
  imageList: deptImage[] = [];
  dataUrl: any;
  private _bottomSheet = inject(MatBottomSheet);
  constructor(private userservice: UserService, public dialogRef: MatDialogRef<ManageDepartmentsComponent>,
    private academicservice: AcademicService, public dataobjservice: DataObjectsService, private snackbar: SnackbarService,
    private dialog: MatDialog, public sanitizer:DomSanitizer,
  ) {
    this.user = this.userservice.userdata
    // console.log(this.user.userID)
  }

  openBottomSheet = (detpId: string, deptName: string) => {
    let data = {
      DeptId: detpId,
      DeptName: deptName
    }
    this.dataobjservice.deptList = [data];

    this._bottomSheet.open(RenameDeptBottomSheetComponent);
  }

  handleOperations = (dpt: string) => {
    let data = {
      DeptId: dpt
    }
    this.dataobjservice.departmentID = dpt;
    this.academicservice.loadOperations(data).subscribe((response: any) => {
      if (response?.message) {
        this.snackbar.openSnackBar(response?.message, '')
      } else {
        if (response?.no_data) {
          // this.dataobjservice.operationInfo=response?.operantions
          this._bottomSheet.open(OperantionsBottomsheetComponent)
        } else {
          this.dataobjservice.operationInfo = response?.operantions
          this._bottomSheet.open(OperantionsBottomsheetComponent)
        }
      }
    })
  }
  imgvalue: any
  ngOnInit() {
   this.LoadData();
  }


async LoadData() {
  try {
await this.academicservice.loadAlldepartments().subscribe((response: any) => {
      if (response?.message) {

      } else {
       
        this.imgvalue = response?.allImages
         this.data = response?.data
        for (let i = 0; i < this.imgvalue.length; i++) {
       
            var buffer = new Buffer( this.imgvalue[i].IMG);
           let base64String= buffer.toString('base64')
          if(typeof this.data[i]==='object'){
            this.data[i]["image"]=base64String
          }
        }
      }
    })



  } catch (error) {
    // Handle errors if the Promise rejects
    console.error(error);
  }
}

  submit = () => {
    this.dialogRef.close({
      click: this.submit
    })
  }
  handleSearch = () => {

  }
  rename = (deptId: string) => {
    this.selectedDept = deptId

  }
  handledel = (deptId: string, dptName: string) => {
    const confirm = window.confirm('This action will permanently delete ' + dptName + '. Click Ok to confirm')
    if (confirm) {
      let data = {
        departmentId: deptId
      }
      this.academicservice.forwarddeldepartment(data).subscribe((response: any) => {
        this.snackbar.openSnackBar(response?.message, '');
      })
    }
  }
  handlesHodList = () => {
    this.dialog.open(ListofHodsComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90vh',
      width: 'calc(100% - 10%)',
      position: {
        top: '5vh',
        left: 'calc(100% - 86%)',
      },
      panelClass: 'full-screen-modal'
    });
  }
}
