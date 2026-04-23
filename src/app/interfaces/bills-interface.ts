
export interface BillsInterface {

   billNumberm: string,
   AdmissionNumber: string,
   ac_session: string,
   TermlyObject: string,
   Academicgrade: string,
   arrears: string,
   currentBill: string,
   totalBill: string,
   dateposted: string,
   isCurrentbill: string,
   DeptName: string,
   Department: string,
   Tid: string,
   sessionID: string,
}

export interface LearenrBillHistory {

   billNumberm: string,
   AdmissionNumber: string,
   sessionID: string,
   Tid: string,
   Academicgrade: string,
   arrears: string,
   currentBill: string,
   totalBill: string,
   dateposted: string,
   isCurrentbill: string,
   Department: string,
}
export interface CanteenBillHistory {
   billNumber: string,
   AdmissionNumber: string,
   sessionID: string,
   Tid: string,
   Academicgrade: string,
   arrears: string,
   dailyBill_payment: string,
   weeklyBill_payment: string,
   MonthlyBill_payment: string,
   TermlyBalance: string,
   dateposted: string,
   isCurrentbill: string,
   Department: string,
}