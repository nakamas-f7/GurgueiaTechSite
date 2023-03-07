import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjustesRoutingModule } from './pages/ajustes/ajustes-routing.module';
import { AjustesModule } from './pages/ajustes/ajustes.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesModule } from './pages/pages.module';
import { FilterPipe } from './util/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    AjustesRoutingModule,
    PagesRoutingModule,

    PagesModule,
    AjustesModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
