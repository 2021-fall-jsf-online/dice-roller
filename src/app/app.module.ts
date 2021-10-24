import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RollADieComponent } from './roll-a-die/roll-a-die.component';
import { RollHistoryComponent } from './roll-history/roll-history.component';

@NgModule({
  declarations: [
    AppComponent,
    RollADieComponent,
    RollHistoryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
