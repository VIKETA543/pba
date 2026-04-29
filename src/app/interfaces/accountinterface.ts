export interface Accountinterface {
    AdmissionNumber:string,
IndexNumber:string,
applicantSurname:string,
applicantMiddlename:string,
applicantLastname:string,
Image:string,
SerialNumber:string,
GradeDescription:string,
}
export interface Department{
    DeptId:string,
    DeptName:string
}
export interface Grades{
    SerialNumber:string,
    GradeDescription:string
}

export interface academicTerm{
    Tid:string,
    TermlyObject:string
}

export interface academicYear{
    sessionID:string,
    ac_session:string 
}
export interface Bills{
    sn:string,
    billNumber:string,
    sessionID:string,
    ac_session:string,
    Tid:string,
    TermlyObject:string,
    currentBill:number,
    dateposted:string,
    isCurrentbill:boolean,
    Department:string,
    DeptName:string,
    GradeID:string, 
    GradeDescription:string
}

export interface Canteen{
    sn:string,
    billNumber:string,
    sessionID:string,
    ac_session:string,
    Tid:string,
    TermlyObject:string,
    currentBill:number,
    dateposted:string,
    isCurrentbill:boolean,
    Department:string,
    DeptName:string,
    GradeID:string, 
    GradeDescription:string
}
export interface Destination{
    destId:string,
    destname:string,
    destdetails:string,
    destdate:string

}

export interface Uniforms{
    destId:string,
    destname:string,
    destdetails:string,
    destdate:string

}
export interface Fee{
    currentBill: number, arrears: number, totalBill: number 
}
export interface PTA{
    currentBill: number, arrears: number, totalBill: number 
}
export interface Speciallevy{
    currentBill: number, arrears: number, totalBill: number 
}
export interface PTA{
    currentBill: number, arrears: number, totalBill: number 
}
export interface UniformInt{
    currentBill: number, arrears: number, totalBill: number 
}
export interface Bus{
    currentBill: number, arrears: number, totalBill: number 
}
export interface Canteen{
    dailyBill: number,number_of_days:number, arrears: number, TotalCanteenFee: number 
}
