import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import {  NgxUiLoaderService } from 'ngx-ui-loader';
import { provideNativeDateAdapter } from '@angular/material/core';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()), 
    NgxUiLoaderService,
    provideNativeDateAdapter(),
        providePrimeNG({
      theme: {
        preset: Aura, 
        // preset: Lara,
        // preset: Nora,
        // preset: Material,
        options: {
          prefix: 'p',
          darkModeSelector: 'none',
          cssLayer: false
        }
      }
    }),
    providePrimeNG({
      ripple: true
    }),
    providePrimeNG({
    zIndex: {
        modal: 1100,    // dialog, sidebar
        overlay: 1000,  // dropdown, overlaypanel
        menu: 1000,     // overlay menus
        tooltip: 1100   // tooltip
    }
}),
providePrimeNG({
    overlayAppendTo: 'self'
}),
providePrimeNG({
    inputVariant: 'filled' 
})
  ]
};
