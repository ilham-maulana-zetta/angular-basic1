import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Module } from './component1/component1.module';
import { Component2Module } from './component2/component2.module';
import { Component3Module } from './component3/component3.module';
import { Component4Module } from './component4/component4.module';
import { Component5Module } from './component5/component5.module';
import { Component6Module } from './component6/component6.module';
import { Component7Module } from './component7/component7.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Component1Module,
    Component2Module,
    Component3Module,
    Component4Module,
    Component5Module,
    Component6Module,
    Component7Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
