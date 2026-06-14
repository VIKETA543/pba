import { CurrencyPipe, DatePipe, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { Divider } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { Table, TableModule } from 'primeng/table';
import { Toast } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ToolbarModule } from 'primeng/toolbar';
import { AccountService } from '../../services/account-service';
import { MessageService } from 'primeng/api';
import { FormGrades, PinAcademicyear } from '../../interfaces/admission-data';
import { AdmissionSvcService } from '../../services/admission-svc.service';
import { FluidModule } from 'primeng/fluid';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormPrices, SoldForms } from '../../interfaces/accountinterface';
@Component({
  selector: 'sell-forms',
  imports: [FormsModule,
    DialogModule,
    AvatarModule,
    ButtonModule,
    FluidModule,
    InputIconModule,
    IconFieldModule,
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
    DatePipe, CurrencyPipe],
  templateUrl: './sell-forms.html',
  styleUrl: './sell-forms.css',
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SellForms implements OnInit {

  messageservice = inject(MessageService)
  nextFormData: any
  message: any
  gradesData: FormGrades[] | any
  selectedGrde: FormGrades | any
  academicYearData: PinAcademicyear[] | any
  selectedYear: PinAcademicyear | any
  is_selling_form = signal(false)
  date: Date = new Date()
  soldForms: SoldForms[] | any
  searchValue = signal('');
  credentials: any
  activityValues = signal<number[]>([0, 100]);
  constructor(private cdr: ChangeDetectorRef, private accountservice: AccountService, private admissionservcie: AdmissionSvcService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.loadGrades();
    this.loadYears()
    this.soldforms();
    if (isPlatformBrowser(this.platformId)) {

      try {
        this.credentials = JSON.parse(localStorage.getItem('userData') || '{}');
        console.log('The crredentials:', this.credentials?.userID)
      } catch (e) {
        this.message = "Could not parse JSON from storage: " + e
        this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message, life: 5000 });
      }
    }
    // 
  }
  ngOnInit(): void {

  }
  clear(table: Table) {
    table.clear();
    this.searchValue.set('');
  }

  loadGrades = async () => {
    this.admissionservcie.loadGrades()
    this.gradesData = this.admissionservcie.FORM_PRICE_GRADES
    setTimeout(()=>{
          this.cdr.markForCheck()
    this.cdr.detectChanges()
    },250)

    // console.log('The Grades: ', this.gradesData)

  }

  loadYears = async () => {
    this.admissionservcie.loadcureentadmissionyear()
    this.academicYearData = this.admissionservcie.PIN_ACADEMIC_YEAR
    setTimeout(()=>{
        this.cdr.markForCheck()
    this.cdr.detectChanges()
    },250)
  
    // console.log(this.academicYearData)

  }

  getForm() {
    let data = {
      grade: this.selectedGrde?.SerialNumber,
      acdemicyear: this.selectedYear?.sessionID
    }
    this.accountservice.getForm(data).subscribe((response: any) => {
      if (response?.data) {
        this.nextFormData = response?.data
        console.log(response?.data)
        this.is_selling_form.set(true)
      } else {
        if (response?.message) {
          this.message = response?.message
          this.is_selling_form.set(false)
          this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message, life: 5000 });
        } else {
          this.message = 'Unknown Error has occured'
          this.is_selling_form.set(false)
          this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message, life: 5000 });
        }
      }
    })
  }
  payForm = () => {
    let data = {
      serial: this.nextFormData[0]?.SerialNumber,
      pin: this.nextFormData[0]?.SerialPin,
      user: this.credentials?.userID,
      price:this.nextFormData[0]?.price_value,
      academic_year:this.selectedYear?.sessionID
    }
    this.accountservice.payForm(data).subscribe((response: any) => {
      if (response?.success) {
        this.message = response?.success
        this.soldforms();
        this.messageservice.add({ severity: 'success', summary: 'Success', detail: this.message, life: 5000 });
        this.is_selling_form.set(false)
      } else {
        if (response?.message) {
          this.message = response?.message
          this.is_selling_form.set(false)
          this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message, life: 5000 });
        } else {
          this.message = 'Unknown Error has occured'
          this.is_selling_form.set(false)
          this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message, life: 5000 });
        }
      }
    })
  }
  soldforms = () => {
    this.accountservice.soldforms().subscribe((response: any) => {
      if (response?.message) {
        this.message = response?.message
        this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message, life: 5000 });
      } else {
        if (response?.data) {
          this.soldForms = response?.data
          this.messageservice.add({ severity: 'success', summary: 'Success', detail: this.message, life: 5000 });
        }
      }
    })
  }


}
