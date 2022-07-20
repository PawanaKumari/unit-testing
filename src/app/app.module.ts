import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PatchFormGroupValuesDirective } from './patch-form-group-values.directive';
import { SetValuesDirective } from './set-values.directive';

@NgModule({
  declarations: [
    AppComponent,
 
    PatchFormGroupValuesDirective,
    SetValuesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
