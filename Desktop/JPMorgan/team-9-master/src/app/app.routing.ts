import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  {
    path: 'main',
    component: MainComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'main',
  //   component: MainLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: './layouts/main-layout/main-layout.module#MainLayoutModule'
  //   }]
  // },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
