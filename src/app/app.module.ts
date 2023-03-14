import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleGridComponent } from './components/simple-grid/simple-grid.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MixedGridComponent } from './components/mixed-grid/mixed-grid.component';
import { RandomGridComponent } from './components/random-grid/random-grid.component';

import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { MixedColorsComponent } from './components/mixed-colors/mixed-colors.component';
import { MixedNumberColorComponent } from './components/mixed-number-color/mixed-number-color.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleGridComponent,
    HomepageComponent,
    MixedGridComponent,
    RandomGridComponent,
    MixedColorsComponent,
    MixedNumberColorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
