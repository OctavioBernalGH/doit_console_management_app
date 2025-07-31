import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app/app.routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ),
    provideRouter(routes)
  ]
});
