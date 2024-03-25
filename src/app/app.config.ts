import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

const firebaseConfig = {
  apiKey: "AIzaSyA2ZRuo69vZSV0GTt2HbZOIA0PRxXfy3_k",
  authDomain: "login-da684.firebaseapp.com",
  databaseURL: "https://login-da684-default-rtdb.firebaseio.com",
  projectId: "login-da684",
  storageBucket: "login-da684.appspot.com",
  messagingSenderId: "752437581642",
  appId: "1:752437581642:web:4d84d64a1f48701297d3b3",
  measurementId: "G-EPS3MBJVYP"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore())
    ])
  ]
};
