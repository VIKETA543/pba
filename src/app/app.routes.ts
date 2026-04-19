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
                    { path: 'learneraccount', component: Learneraccount },
                    {path:'schoolfeebills',component:Schoolfeebills},
                    {path:'canteenbill',component:Canteenbill},
                    {path:'bussbilling',component:Bussbilling},
                    {path:'ptadues-billing',component:PtaduesBilling},
                    {path:'speciallevy-billing',component:SpeciallevyBilling}
                ]
            },
            { path: 'app-admissions', component: AdmissionsComponent },
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
