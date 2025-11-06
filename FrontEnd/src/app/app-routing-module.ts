import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { EnterPricing } from './enter-pricing/enter-pricing';
import { Dashboard } from './dashboard/dashboard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'enter-pricing',
    component: EnterPricing
  },{
  path: 'dashboard',
  component: Dashboard
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
