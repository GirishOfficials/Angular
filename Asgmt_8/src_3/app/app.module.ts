import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import for to use ng model
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent  // our object made here
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule   // to make it usable in every component we make entry here
  ],
  providers: [],
  bootstrap: [AppComponent]   // Because of this app modeule render first
})
export class AppModule { }
