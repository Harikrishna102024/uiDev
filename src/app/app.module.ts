import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PhaseOneComponent } from './phase-one/phase-one.component';
import { UiThingsComponent } from './ui-things/ui-things.component';

@NgModule({
  declarations: [
    AppComponent,
    PhaseOneComponent,
    UiThingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
