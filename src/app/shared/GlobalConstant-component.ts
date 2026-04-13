import { AbstractControl } from '@angular/forms';
import {NgxUiLoaderConfig,SPINNER,PB_DIRECTION} from 'ngx-ui-loader';
import { User } from '../interfaces/user';
export class GlobalConstants {
    //message
    public static generateError: String = "Something Went Wrong. Please try again later!";
    //regex Name:  [a-zA-Z0-9]
    //email: [A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}
    //Contact ^[e0-9]{10,10}$
    public static nameRegex: string = "[a-zA-Z0-9 ]*";
    public static numberFieldRegex:string="[2-9]";
    public static textFieldRegex:string="[a-zA-z ]*";
    public static addressRegex:string="[a-zA-z0-9._#, -]*";
    public static EmailRegex: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}"
    public static ContactNumberRegex: string = "^[e0-9]{10,10}$"
    public static DATE_REGEX:string="(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])\/(19|20)\d{2}";
    //varialble
    public static error: string = "error"


}



export const ngxUiLoaderConfig:NgxUiLoaderConfig={
   text:'Loading...',
   textColor:'#FFFFFF',
   textPosition:'center-center',
   pbColor:'red',
   bgsColor:'red',
   fgsColor:'red',
   fgsType:SPINNER.ballSpinClockwise,
   fgsSize:100,
   pbDirection:PB_DIRECTION.leftToRight,
   pbThickness:5, 
}