import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
