import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule, BrowserModule),
    CommonModule, 
    provideHttpClient()
    ]
};
