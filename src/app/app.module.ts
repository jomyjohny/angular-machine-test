import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, PreloadAllModules } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FullComponent } from "./layouts/full/full.component";
import { AppBlankComponent } from "./layouts/blank/blank.component";
import { AppRoutes } from "./app.routing";
import { AuthenticationComponent } from './authentication/authentication.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { ControlMessagesComponent } from "../../src/app/services/formValidation/control-messages/control-messages.component";

@NgModule({
  declarations: [
    FullComponent,
    AppBlankComponent,
    AppComponent,
    AuthenticationComponent,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    AngularMultiSelectModule,
    RouterModule.forRoot(AppRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
