import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LAPComponent } from './component/l-ap/l-ap.component';
import { RedessocialesComponent } from './component/redessociales/redessociales.component';
import { BadderComponent } from './component/badder/badder.component';
import { SobremiComponent } from './component/sobremi/sobremi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LAPComponent,
    RedessocialesComponent,
    BadderComponent,
    SobremiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
