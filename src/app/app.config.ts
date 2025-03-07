import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
import localePtExtra from '@angular/common/locales/extra/pt';
import localeEnExtra from '@angular/common/locales/extra/en';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'PT', localePtExtra); // registrando o sufixo 'PT' como português
registerLocaleData(localeEn, 'En', localeEnExtra); // registrando o sufixo 'En' como inglês

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'PT' }, // Adicionando o LOCALE_ID como PT
    { provide: LOCALE_ID, useValue: 'En' } // Adicionando o LOCALE_ID como En
  ]
};
