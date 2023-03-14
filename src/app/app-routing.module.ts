import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MixedColorsComponent } from './components/mixed-colors/mixed-colors.component';
import { MixedGridComponent } from './components/mixed-grid/mixed-grid.component';
import { MixedNumberColorComponent } from './components/mixed-number-color/mixed-number-color.component';
import { RandomGridComponent } from './components/random-grid/random-grid.component';
import { SimpleGridComponent } from './components/simple-grid/simple-grid.component';

const routes: Routes = [
  {
    path: 'simple-grid',
    component: SimpleGridComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'mixed-grid',
    component: MixedGridComponent,
  },
  {
    path: 'random-grid',
    component: RandomGridComponent,
  },
  {
    path: 'mixed-color-grid',
    component: MixedColorsComponent
  },
  {
    path: 'mixed-color-numbers-grid',
    component: MixedNumberColorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
