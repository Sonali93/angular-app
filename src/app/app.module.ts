import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WarningAlert } from './warningalert/warningalert.component';
import { SuccessalertComponent } from './successalert/successalert.component';
@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    SuccessalertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
