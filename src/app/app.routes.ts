import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotpassordComponent } from './forgotpassord/forgotpassord.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AccountModeComponent } from './account-mode/account-mode.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ExaminationsComponent } from './examinations/examinations.component';

import { RegisterlearnerComponent } from './registerlearner/registerlearner.component';
import { ApplicationformComponent } from './registerlearner/applicationform/applicationform.component';
import { FathersDetailsComponent } from './registerlearner/fathers-details/fathers-details.component';
import { PaymentofCommitmentsComponent } from './registerlearner/paymentof-commitments/paymentof-commitments.component';
import { ApplicantHealthComponent } from './registerlearner/applicant-health/applicant-health.component';
import { ReviewApplicantionComponent } from './registerlearner/review-applicantion/review-applicantion.component';
import { ReviewAdmissionComponent } from './confirm-admission/review-admission/review-admission.component';
import { ConfirmAdmissionComponent } from './confirm-admission/confirm-admission.component';
import { AcademicdashboardComponent } from './academics/academicdashboard/academicdashboard.component';
import { Learneraccount } from './account-mode/learneraccount/learneraccount';
import { Schoolfeebills } from './account-mode/schoolfeebills/schoolfeebills';
import { Canteenbill } from './account-mode/canteenbill/canteenbill';
import { Bussbilling } from './account-mode/bussbilling/bussbilling';
import { PtaduesBilling } from './account-mode/ptadues-billing/ptadues-billing';
import { SpeciallevyBilling } from './account-mode/speciallevy-billing/speciallevy-billing';
import { Uniformbill } from './account-mode/uniformbill/uniformbill';
import { PrepareSchoolfee } from './account-mode/prepare-schoolfee/prepare-schoolfee';
import { CateenFeeStructure } from './account-mode/cateen-fee-structure/cateen-fee-structure';
import { BusBillSchedule } from './account-mode/bus-bill-schedule/bus-bill-schedule';
import { PtaPaymentSchedule } from './account-mode/pta-payment-schedule/pta-payment-schedule';
import { UniformFeeSchedule } from './account-mode/uniform-fee-schedule/uniform-fee-schedule';
import { SepecialLevySchedule } from './account-mode/sepecial-levy-schedule/sepecial-levy-schedule';
import { GenerateTermlyBill } from './account-mode/generate-termly-bill/generate-termly-bill';
import { PaySchoolfee } from './account-mode/pay-schoolfee/pay-schoolfee';
import { PayCanteenfee } from './account-mode/pay-canteenfee/pay-canteenfee';
import { PaySpeciallevy } from './account-mode/pay-speciallevy/pay-speciallevy';
import { PayBusfee } from './account-mode/pay-busfee/pay-busfee';
import { PayPTADues } from './account-mode/pay-ptadues/pay-ptadues';
import { PayUniforms } from './account-mode/pay-uniforms/pay-uniforms';
import { SerialNumbers } from './admissions/serial-numbers/serial-numbers';
import { FormsManager } from './admissions/forms-manager/forms-manager';
import { SellForms } from './admissions/sell-forms/sell-forms';
import { GeneratePins } from './admissions/generate-pins/generate-pins';
import { FormsSalesReport } from './admissions/forms-sales-report/forms-sales-report';


export const routes: Routes = [
    {
        path: 'app-signup',
        component: SignupComponent,
    },
    { path: 'app-login', component: LoginComponent },
    { path: 'app-forgotPassword', component: ForgotpassordComponent },
    {
        path: 'app-admin-dashboard', component: AdminDashboardComponent, children: [
            {
                path: 'app-account-mode', component: AccountModeComponent, children: [
                    {
                        path: 'learneraccount', component: Learneraccount, children:
                            [
                                { path: 'prepare-schoolfee', component: PrepareSchoolfee },
                                { path: 'cateen-fee-structure', component: CateenFeeStructure },
                                { path: 'bus-bill-schedule', component: BusBillSchedule },
                                { path: 'pta-payment-schedule', component: PtaPaymentSchedule },
                                { path: 'uniform-fee-schedule', component: UniformFeeSchedule },
                                { path: 'sepecial-levy-schedule', component: SepecialLevySchedule },
                                { path: 'generate-termly-bill', component: GenerateTermlyBill },
                                { path: 'pay-schoolfee', component: PaySchoolfee },
                                { path: 'pay-canteenfee', component: PayCanteenfee },
                                { path: 'pay-speciallevy', component: PaySpeciallevy },
                                { path: 'pay-busfee', component: PayBusfee },
                                { path: 'pay-ptadues', component: PayPTADues },
                                { path: 'pay-uniforms', component: PayUniforms },

                            ]
                    },

                    { path: 'schoolfeebills', component: Schoolfeebills },
                    { path: 'canteenbill', component: Canteenbill },
                    { path: 'bussbilling', component: Bussbilling },
                    { path: 'ptadues-billing', component: PtaduesBilling },
                    { path: 'speciallevy-billing', component: SpeciallevyBilling },
                    { path: 'uniformbill', component: Uniformbill },
                    { path: 'forms-manager', component: FormsManager },
                    { path: 'sell-forms', component: SellForms }

                ]
            },
            {
                path: 'app-admissions', component: AdmissionsComponent,
                children: [
                    {
                        path: 'serial-numbers', component: SerialNumbers, children: [
                            { path: 'forms-manager', component: FormsManager },
                            { path: 'sell-forms', component: SellForms },
                            { path: 'generate-pins', component: GeneratePins },
                            { path: 'forms-sales-report', component: FormsSalesReport },
                        ]
                    },

                ]
            },
            { path: 'app-examinations', component: ExaminationsComponent },
            { path: 'app-academicdashboard', component: AcademicdashboardComponent },

        ]
    },
    { path: 'app-fathers-details', component: FathersDetailsComponent },
    { path: 'app-applicationform', component: ApplicationformComponent },
    { path: 'app-registerlearner', component: RegisterlearnerComponent },
    { path: 'app-applicant-health', component: ApplicantHealthComponent },
    { path: 'app-paymentof-commitments', component: PaymentofCommitmentsComponent },
    { path: 'app-paymentof-commitments', component: PaymentofCommitmentsComponent },
    { path: 'app-review-applicantion', component: ReviewApplicantionComponent },
    { path: 'app-review-admission', component: ReviewAdmissionComponent },
    { path: 'app-confirm-admission', component: ConfirmAdmissionComponent },
    { path: 'app-home', component: HomeComponent },
    { path: '', redirectTo: '/app-home', pathMatch: 'full' },
];
