import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"fir-start-7a069","appId":"1:68614792935:web:df1e9c6bbabea57c8fa442","storageBucket":"fir-start-7a069.appspot.com","apiKey":"AIzaSyCAtdNniWIvcrBZnQ357Cqo-F0d0O43-mQ","authDomain":"fir-start-7a069.firebaseapp.com","messagingSenderId":"68614792935","measurementId":"G-Y1GWQEQL78"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
