export interface AdmissionData {
      No: number;
      appNumber: string;
      Surname: string;
      Middlename: string;
      Lastname: string;
      applicationDate: string;
      action: any;
}

export interface AdmissionRegData {

      No: number;
      AdmissionNumber: string;
      Surname: string;
      Middlename: string;
      Lastname: string;
      Admisiondate: string
      ClassAssigned: string
      LearnerStatus: string
      action: any;
}

export interface withsrawnInrterface {
      No: number,
      Admissionnumber: string,
      FullName: string,
      Grade: string,
      DateWithdrawn: string,
      Reasons: string,
      DetailInfo: string,
      Guardian: string,
      Contact: string,
      Confirmed: string,
      ConfirmedBy: string,
      Authorised: string,
      AuthorisedBy: string,
      Message: string
}
export interface withdrawnPartialData {
      No: number,
      Admissionnumber: string,
      SN: string,
      MN: string,
      LN: string,
      Grade: string,
      DateWithdrawn: string
}
export interface detailWithdrawnData {
      No: number,
      Admissionnumber: string,
      SN: string,
      MN: string,
      LN: string,
      Grade: string,
      DateWithdrawn: string
      REASON: string,
      DET_INFO: string,
      GUADIAN: string,
      GUARDIAN_TEL: string,
      CONFIRMED: string,
      OFFICER: string,
      WITHDRAWAL_LETTER: string,
      AUTH: string,
      AUTH_BY: string,
      AUTH_MES: string
}