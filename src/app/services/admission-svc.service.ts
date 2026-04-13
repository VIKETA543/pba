import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ApplicationserviceService } from './applicationservice.service';
import { AdmissionData,AdmissionRegData, detailWithdrawnData, withdrawnPartialData } from '../interfaces/admission-data';
import { SnackbarService } from './snackbar.service';
import { response } from 'express';
import { Console } from 'console';


@Injectable({
  providedIn: 'root'
})
export class AdmissionSvcService{
 ELEMENT_DATA: AdmissionData[] = [];
 ADMISION_REG_DATA:AdmissionRegData[]=[];
 WITHDRAWN_PARTIAL_DATA:withdrawnPartialData[]=[];
 WITHDRAWN_FULL_DETAIL:detailWithdrawnData[]=[];
 ADMISSION_DETAILS:any
 WITHDRAWAL_QUERY_DATA:any
 nextIndex:number=0;
 status_flag:boolean=false;
  constructor(private applicationServices:ApplicationserviceService,
    private snackBarService:SnackbarService,private ngxService:NgxUiLoaderService,
  ) { }
  loadAdmissionData=()=>{
    return this.applicationServices.loadAdmissionData().subscribe((response:any)=>{
    
      this.ELEMENT_DATA=response

    })
  }

loadAdmissionIndex=()=>{
  return this.applicationServices.loadAdmissionIndex().subscribe((response:any)=>{
    this.nextIndex=response?.index;
  })
}
confirmAdmission=(data:any)=>{
  this.ngxService.start();
  return this.applicationServices.confirmAdmission(data).subscribe((response:any)=>{
    this.snackBarService.openSnackBar(response?.message,"")
    this.ngxService.stop();
  })
}
loadAdmissionRegister=()=>{
  return this.applicationServices.admissionRegister().subscribe((response:any)=>{
    this.ADMISION_REG_DATA=response
  })
}
searchRegistry=(data:any)=>{
  return this.applicationServices.searchRegistry(data).subscribe((response:any)=>{
    if(response?.error){
      this.status_flag=false
      this.snackBarService.openSnackBar(response?.error,"")
    }else{
      this.ADMISION_REG_DATA=response
      this.status_flag=true
      // this.snackBarService.openSnackBar('Results found',"")
    }

  this.ngxService.stop();
  })
}

addRegistry=(data:any)=>{
  return this.applicationServices.addRegistry(data).subscribe((response:any)=>{
    if(response?.error){
      this.status_flag=false
      this.snackBarService.openSnackBar(response?.error,"")
    }else{
      this.snackBarService.openSnackBar(response?.message,"")
      this.status_flag=true
    }
    this.ngxService.stop()
  })
}
showRegDetails=(data:any)=>{
 
return this.applicationServices.showRegDetails(data).subscribe((response:any)=>{
  if(response?.error){
    this.snackBarService.openSnackBar(response?.error,"")
  }else{
    this.ADMISSION_DETAILS=response;
  }
  // console.log()
})
}
finddrawal=(data:any)=>{
 
return this.applicationServices.finddrawal(data).subscribe((response:any)=>{
if(response?.message){
  this.snackBarService.openSnackBar(response?.message,"")
}else{
  this.WITHDRAWAL_QUERY_DATA=response
}
})
}
withdrawLearner=(data:any)=>{
return this.applicationServices.withdrawLearner(data).subscribe((response:any)=>{
  this.snackBarService.openSnackBar(response?.message,"")
})
}
findWithdrawnLearner=(data:any)=>{
return this.applicationServices.findWithdrawnLearner(data).subscribe((response:any)=>{
  if(response.message){
    this.snackBarService.openSnackBar(response?.message,"")
  }else{
  this.WITHDRAWAL_QUERY_DATA=response;
  }
  
})
}
authoriseWithdrwal=(data:any)=>{
  return this.applicationServices.authoriseWithdrwal(data).subscribe((response:any)=>{
    this.snackBarService.openSnackBar(response?.message,"")
  })
}

loadWithdrawnpartialdata=()=>{
  return this.applicationServices.loadWithdrawnpartialdata().subscribe((response:any)=>{
   if(response?.message){
    this.snackBarService.openSnackBar(response?.message,"")
   }else{


    this.WITHDRAWN_PARTIAL_DATA=response;
  // console.log(this.WITHDRAWN_PARTIAL_DATA)
   }  
  })
}

loadWithdrawnpartialdataSearch=(data:any)=>{
  return this.applicationServices.loadWithdrawnpartialdataSearch(data).subscribe((response:any)=>{
   if(response?.message){
    this.snackBarService.openSnackBar(response?.message,"")
   }else{ 
    this.WITHDRAWN_PARTIAL_DATA=response;
   }  
  })
}

loadWithdrawnPrintableData=(data:any)=>{
  return this.applicationServices.loadWithdrawnPrintableData(data).subscribe((response:any)=>{
   if(response?.message){
    this.snackBarService.openSnackBar(response?.message,"")
   }else{
    this.WITHDRAWN_FULL_DETAIL=response;
   }  
  })
}
loadDetailedRecords=()=>{
this.applicationServices.loadDetailedRecords().subscribe((response:any)=>{
  if(response.message){
    this.snackBarService.openSnackBar(response?.message,"")
  }else{
 this.WITHDRAWN_FULL_DETAIL=response;

  }
})
}
}
