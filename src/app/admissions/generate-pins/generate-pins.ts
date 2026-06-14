import { DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxChangeEvent, CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { Divider } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { Toast } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ToolbarModule } from 'primeng/toolbar';
import { PinAcademicyear, SERIALNUMBERS } from '../../interfaces/admission-data';
import { MessageService } from 'primeng/api';
import { AdmissionSvcService } from '../../services/admission-svc.service';
import { ApplicationserviceService } from '../../services/applicationservice.service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'generate-pins',
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
  templateUrl: './generate-pins.html',
  styleUrl: './generate-pins.css',
  providers:[MessageService]
})
export class GeneratePins {
  constructor(private routerLink:Router,
    private route: ActivatedRoute,
    private admissionservcie: AdmissionSvcService,
    private applicationservice:ApplicationserviceService){}
  messageservice=inject(MessageService)
isNewpin = signal(false)
  single: boolean = false
  multiple: boolean = false
  totalPins: number = 0
  message: any
  academicYearData: PinAcademicyear[] | any
  selectedYear: PinAcademicyear | any

  serialNumberArray: SERIALNUMBERS[] = []

  pingenerate = signal(false)
  counter: number = 0;
  rawYear:any
  is_new_pin=signal(false)
  ngOnInit(): void {
    this.loadYears()
    this.initPingenerator()
  }

  initPingenerator = () => {
    this.pingenerate.set(false)
    this.isNewpin.set(true)

  }
  loadYears = async () => {
    this.admissionservcie.loadcureentadmissionyear()
    this.academicYearData = this.admissionservcie.PIN_ACADEMIC_YEAR
    console.log(this.academicYearData)

  }
  generatePins = () => {
    while (this.counter < this.totalPins) {
      this.generatePin()
      this.genranCode()
      this.is_new_pin.set(true)
      this.serialNumberArray.push({
        SerialNumber: this.serial,
        SerialPin: this.pin,
        dateGenerated: new Date(),
        academicyear: this.rawYear,
        yearId:this.selectedYear?.sessionID,
        auth: false
      })
      this.counter++
      console.log(this.serialNumberArray)
    
    }
    this.pingenerate.set(true)
  console.log('the pins tatal', this.totalPins)
  }
  randomInteger: number = 0;
  cleanedYear: any
  serial: any
  pin: any
  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  genranCode = () => {




    const randomBytes = CryptoJS.lib.WordArray.random(8);
const hexString = randomBytes.toString(CryptoJS.enc.Hex);
let numericString = BigInt('0x' + hexString).toString();
    this.serial = this.cleanedYear + numericString.padEnd(8, '0').slice(0, 8);
  }

  generatePin(length: number = 12): string {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const code = this.cleanedYear + Array.from({ length }, () => chars[Math.floor(Math.random() * 16)]).join('');
    return this.pin = code.match(/.{1,4}/g)?.join('-') || "";
  }





  isSingle = signal(false);
  isMultiple = signal(false)
  switchTypes($event: CheckboxChangeEvent, type: any) {
    if (this.selectedYear === undefined) {
      this.message = 'Select Academic year'
      this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message,life:5000 });
    } else {
      switch (type) {
        case 'SINGLE':
          this.isSingle.set(true)
          this.isMultiple.set(false)
           this.rawYear = this.selectedYear?.ac_session
          this.cleanedYear = this.rawYear.replace(/^(\d{2})(\d{2})-(\d{2})(\d{2})$/, '$2$4');
          this.totalPins = 1
          break;
        case 'MULTIPLE':

          this.isSingle.set(false)
          this.isMultiple.set(true)
          this.rawYear = this.selectedYear?.ac_session
          this.cleanedYear = this.rawYear.replace(/^(\d{2})(\d{2})-(\d{2})(\d{2})$/, '$2$4');
          
          break;
        default:
          break
      }
    }
  }
is_success=signal(false)
  submitPins=()=>{
    return this.applicationservice.submitPins(this.serialNumberArray).subscribe((response:any)=>{
      if(response?.message){
        this.message=response?.message
          this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message ,life:5000});
      }else{
        if(response?.success){
          this.is_success.set(true)
          this.message=response?.success
          this.serialNumberArray=[]
            this.messageservice.add({ severity: 'success', summary: 'Success', detail: this.message,life:5000 });
        }else{
          this.message='Unknown error has occured'
            this.messageservice.add({ severity: 'error', summary: 'Error', detail: this.message ,life:5000});
        }
      }
    })
  }
}
