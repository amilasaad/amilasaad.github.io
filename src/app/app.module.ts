import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidesComponent } from './components/slides/slides.component';
import { InfoIntroComponent } from './components/info-intro/info-intro.component';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    InfoIntroComponent,
    ServiceComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
