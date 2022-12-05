import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { DropdownModule } from 'primeng/dropdown';
import { AppComponent } from './app.component';
import { NumeComponent } from './nume/nume.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DropdownModule,
    RadioButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/