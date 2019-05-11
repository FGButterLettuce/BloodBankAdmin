import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import * as moment from 'moment';


import Amplify, { Analytics } from 'aws-amplify';
import aws_exports from '../aws-exports.js';

Amplify.configure(aws_exports);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AngularFireModule.initializeApp(environment.firebase),AngularFirestoreModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule, AmplifyAngularModule],
  providers: [
    StatusBar,
    AmplifyService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
