import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LAPComponent } from './component/l-ap/l-ap.component';
import { RedessocialesComponent } from './component/redessociales/redessociales.component';
import { BadderComponent } from './component/badder/badder.component';
import { SobremiComponent } from './component/sobremi/sobremi.component';
import { ExperienciasComponent } from './component/experiencias/experiencias.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { HardySolffSkillsComponent } from './component/hardy-solff-skills/hardy-solff-skills.component';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LAPComponent,
    RedessocialesComponent,
    BadderComponent,
    SobremiComponent,
    ExperienciasComponent,
    EducacionComponent,
    HardySolffSkillsComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
