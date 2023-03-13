import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleGridComponent } from './components/simple-grid/simple-grid.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MixedGridComponent } from './components/mixed-grid/mixed-grid.component';
import { RandomGridComponent } from './components/random-grid/random-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleGridComponent,
    HomepageComponent,
    MixedGridComponent,
    RandomGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
