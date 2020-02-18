import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserfooterComponent } from './user/userfooter/userfooter.component';
import { Userbodysection1Component } from './user/userbodysection1/userbodysection1.component';
import { CompareSocietiesComponent } from './user/compare-societies/compare-societies.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SliderComponent } from './user/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    UserHeaderComponent,
    UserfooterComponent,
    Userbodysection1Component,
    CompareSocietiesComponent,
    SliderComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
