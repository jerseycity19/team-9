import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
// import {
//   AgmCoreModule
// } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
<<<<<<< HEAD
import { ChartsComponent } from './charts/charts.component';
import { MyPieComponent } from './my-pie/my-pie.component';


=======
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const firebaseConfig = {
  apiKey: "AIzaSyBURqCqrg381QkI10LlmDw18_4NuAYo71w",
  authDomain: "codeforgood9.firebaseapp.com",
  databaseURL: "https://codeforgood9.firebaseio.com",
  projectId: "codeforgood9",
  storageBucket: "",
  messagingSenderId: "483495702605",
  appId: "1:483495702605:web:406deed27356e3277cec04"
};

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';

import { MatButtonModule, MatStepperModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { TestComponent } from './test/test.component';
>>>>>>> b0c696a4c12ed91044b419e39a86572fb3995158

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    MatButtonModule, MatStepperModule, MatFormFieldModule, MatSelectModule,
    RouterModule,
    AppRoutingModule,
    ChartsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    // })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
<<<<<<< HEAD
    ChartsComponent,
    MyPieComponent

=======
    MainLayoutComponent,
    MainComponent,
    FormComponent,
    TestComponent
>>>>>>> b0c696a4c12ed91044b419e39a86572fb3995158
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
