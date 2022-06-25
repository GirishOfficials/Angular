import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRevPipe } from './my-rev.pipe';
import { MyaddPipe } from './myadd.pipe';
import { MymultPipe } from './mymult.pipe';
import { MarvellouschkPipe } from './marvellouschk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyRevPipe,
    MyaddPipe,
    MymultPipe,
    MarvellouschkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
