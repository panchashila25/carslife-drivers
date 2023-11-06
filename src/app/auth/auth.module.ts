import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    AuthPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AuthPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthPageModule {}
