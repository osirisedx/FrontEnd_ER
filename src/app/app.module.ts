import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { BannerComponent } from './component/banner/banner.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { SkillsComponent } from './component/skills/skills.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcercaDeComponent,
    BannerComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ProyectosComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
