import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {
  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {

  }

  forwardDept = (data: any) => {
    return this.httpClient.post(this.url + "/academics/forwardDept", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }

  findStaff = (data: any) => {
    return this.httpClient.post(this.url + "/academics/findStaff", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }
  forwardNewDeptHead = (data: any) => {
    return this.httpClient.post(this.url + "/academics/forwardNewDeptHead", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }
  loadallDeptHeads = () => {
    return this.httpClient.post(this.url + "/academics/loadallDeptHeads", { headers: new HttpHeaders().set('contentType', "application/json") })
  }

  findSelecteddeptHead = (data: any) => {
    return this.httpClient.post(this.url + "/academics/findSelecteddeptHead", data, { headers: new HttpHeaders().set('contentType', "application/json") })

  }
  authDepartment = (data: any) => {
    return this.httpClient.post(this.url + "/academics/authDepartment", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }

  loadAlldepartments = () => {
    return this.httpClient.post(this.url + "/academics/loadAlldepartments", { headers: new HttpHeaders().set('contentType', "application/json") })
  }

  forwardPosition = (data: any) => {
    return this.httpClient.post(this.url + "/academics/forwardPosition", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }
  forwardrenamdepartment = (data: any) => {
    return this.httpClient.post(this.url + "/academics/forwardrenamdepartment", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }

  forwarddeldepartment = (data: any) => {
    return this.httpClient.post(this.url + "/academics/forwarddeldepartment", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }
  loadhods = () => {
    return this.httpClient.post(this.url + "/academics/loadhods", { headers: new HttpHeaders().set('contentType', "application/json") })
  }


  loadOperations = (data: any) => {
    return this.httpClient.post(this.url + "/academics/loadOperations", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }
  updateOPerations = (data: any) => {
    return this.httpClient.post(this.url + "/academics/updateOPerations", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }

  uploadImage = (data: any) => {
    return this.httpClient.post(this.url + "/academics/uploadImage", data, { headers: new HttpHeaders().set('contentType', "multipart/form-data") })
  }

  loadFacilitators = (data: any) => {
    return this.httpClient.post(this.url + "/academics/loadFacilitators", data, { headers: new HttpHeaders().set('contentType', "application/json") })

  }
  loadStaff = (data: any) => {
    return this.httpClient.post(this.url + "/academics/loadStaff", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }

  addnewFacilitator = (data: any) => {
    return this.httpClient.post(this.url + "/academics/addnewFacilitator", data, { headers: new HttpHeaders().set('contentType', "application/json") })

  }
  newGrade = (data: any) => {
    return this.httpClient.post(this.url + "/academics/newGrade", data, { headers: new HttpHeaders().set('contentType', "application/json") })
  }

  loadAllgrades = () => {
    return this.httpClient.post(this.url + "/academics/loadAllgrades", { headers: new HttpHeaders().set('contentType', "application/json") })

  }
  renamegrade = (data: any) => {
    return this.httpClient.post(this.url + "/academics/renamegrade", data, { headers: new HttpHeaders().set('contentType', "application/json") })

  }
  findFacilitator = (data: any) => {
    return this.httpClient.post(this.url + "/academics/findFacilitator", data, { headers: new HttpHeaders().set('contentType', "application/json") })

  }

  assignedgradefacilitator = (data: any) => {
    return this.httpClient.post(this.url + "/academics/assignedgradefacilitator", data, { headers: new HttpHeaders().set('contentType', "application/json") })

  }

  findstafftodel = (data: any) => {
    return this.httpClient.post(this.url + "/academics/findstafftodel", data, { headers: new HttpHeaders().set('contentType', "application/json") })

  }
  dropfacilitator = (data: any) => {
    return this.httpClient.post(this.url + "/academics/dropfacilitator", data, { headers: new HttpHeaders().set('contentType', "application/json") })

  }
  findLearner = (data: any) => {
    return this.httpClient.post(this.url + "/academics/findLearner", data, { headers: new HttpHeaders().set('contentType', "application/json") })

  }
  AddlearnerTograde=(data:any)=>{
    return this.httpClient.post(this.url + "/academics/AddlearnerTograde", data, { headers: new HttpHeaders().set('contentType', "application/json") }) 
  }
  learnerTodrop=(data:any)=>{
        return this.httpClient.post(this.url + "/academics/learnerTodrop", data, { headers: new HttpHeaders().set('contentType', "application/json") }) 

  }
droplearneraction=(data:any)=>{
    return this.httpClient.post(this.url + "/academics/droplearneraction", data, { headers: new HttpHeaders().set('contentType', "application/json") }) 

}
newacademicsession=(data:any)=>{
    return this.httpClient.post(this.url + "/academics/newacademicsession", data, { headers: new HttpHeaders().set('contentType', "application/json") }) 

}

loadacademicsession=()=>{
      return this.httpClient.post(this.url + "/academics/loadacademicsession", { headers: new HttpHeaders().set('contentType', "application/json") }) 
}
delSession=(data:any)=>{
    return this.httpClient.post(this.url + "/academics/delSession", data, { headers: new HttpHeaders().set('contentType', "application/json") }) 

}

loadSelectedsession=(data:any)=>{
    return this.httpClient.post(this.url + "/academics/loadSelectedsession", data, { headers: new HttpHeaders().set('contentType', "application/json") }) 

}
updatesession=(data:any)=>{
  return this.httpClient.post(this.url + "/academics/updatesession", data, { headers: new HttpHeaders().set('contentType', "application/json") })
}
updateDates=(data:any)=>{
    return this.httpClient.post(this.url + "/academics/updateDates", data, { headers: new HttpHeaders().set('contentType', "application/json") })
}
searchsession=(data:any)=>{
    return this.httpClient.post(this.url + "/academics/searchsession", data, { headers: new HttpHeaders().set('contentType', "application/json") })

}
createTerm=(data:any)=>{
  return this.httpClient.post(this.url + "/academics/createTerm", data, { headers: new HttpHeaders().set('contentType', "application/json") })

}
listTerms=()=>{
    return this.httpClient.post(this.url + "/academics/listTerms", { headers: new HttpHeaders().set('contentType', "application/json") })
}
updateTerm=(data:any)=>{
    return this.httpClient.post(this.url + "/academics/updateTerm",data, { headers: new HttpHeaders().set('contentType', "application/json") })
}
newWeek=(data:any)=>{
      return this.httpClient.post(this.url + "/academics/newWeek",data, { headers: new HttpHeaders().set('contentType', "application/json") })
}
getweeks=()=>{
  return this.httpClient.post(this.url + "/academics/getweeks", { headers: new HttpHeaders().set('contentType', "application/json") })

}
delweek=(data:any)=>{
  return this.httpClient.post(this.url + "/academics/delweek",data, { headers: new HttpHeaders().set('contentType', "application/json") })

}
loadacademicDetails=()=>{
  return this.httpClient.post(this.url + "/academics/loadacademicDetails", { headers: new HttpHeaders().set('contentType', "application/json") })

}
openTerm=(data:any)=>{
  return this.httpClient.post(this.url + "/academics/openTerm",data, { headers: new HttpHeaders().set('contentType', "application/json") })
 
}
startRegister=(data:any)=>{
    return this.httpClient.post(this.url + "/academics/startRegister",data, { headers: new HttpHeaders().set('contentType', "application/json") })
}

loadActiveWeeks=()=>{
   return this.httpClient.post(this.url + "/academics/loadActiveWeeks", { headers: new HttpHeaders().set('contentType', "application/json") })
}
saveWeek=(data:any)=>{
   return this.httpClient.post(this.url + "/academics/saveWeek", data,{ headers: new HttpHeaders().set('contentType', "application/json") })

}
activity=(data:any)=>{
return this.httpClient.post(this.url + "/academics/activity",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}
monday=(data:any)=>{
  return this.httpClient.post(this.url + "/academics/monday",data,{ headers: new HttpHeaders().set('contentType', "application/json") })

}
tuesday=(data:any)=>{
  return this.httpClient.post(this.url + "/academics/tuesday",data,{ headers: new HttpHeaders().set('contentType', "application/json") })

}
wednesday=(data:any)=>{
  return this.httpClient.post(this.url + "/academics/wednesday",data,{ headers: new HttpHeaders().set('contentType', "application/json") })

}
thursday=(data:any)=>{
  return this.httpClient.post(this.url + "/academics/thursday",data,{ headers: new HttpHeaders().set('contentType', "application/json") })

}
friday=(data:any)=>{
  return this.httpClient.post(this.url + "/academics/friday",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}
closeweek=(data:any)=>{
  return this.httpClient.post(this.url + "/academics/closeweek",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}

getlearner=(data:any)=>{
    return this.httpClient.post(this.url + "/academics/getlearner",data,{ headers: new HttpHeaders().set('contentType', "application/json") })

}
dropAttn=(data:any)=>{
  return this.httpClient.post(this.url + "/academics/dropAttn",data,{ headers: new HttpHeaders().set('contentType', "application/json") })
}
}

