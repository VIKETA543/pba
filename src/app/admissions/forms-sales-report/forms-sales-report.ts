import { Component, inject, OnInit } from '@angular/core';
import { ApplicationserviceService } from '../../services/applicationservice.service';
import { response } from 'express';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'forms-sales-report',
  imports: [],
  templateUrl: './forms-sales-report.html',
  styleUrl: './forms-sales-report.css',
  providers:[MessageService]
})
export class FormsSalesReport implements OnInit{
  messageservice=inject(MessageService)
  constructor( private applicationservice:ApplicationserviceService){
    this.getPinSummaries()
  }
ngOnInit(): void {
  
}
message:any

getPinSummaries=()=>{
this.applicationservice.formssummary().subscribe((response:any)=>{
  if(response?.message){
    this.message=response?.message
  }else{
    if(response?.data){
      console.log(response?.data)
    }else{

    }
  }
})
}
}
