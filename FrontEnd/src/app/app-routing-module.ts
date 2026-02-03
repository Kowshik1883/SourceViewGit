import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { EnterPricing } from './enter-pricing/enter-pricing';
import { Dashboard } from './dashboard/dashboard';
import { ItemMatch } from './item-match/item-match';
import { SummaryDashboard } from './summary-dashboard/summary-dashboard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'summary-dashboard',
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
  path: 'item-match',
  component: ItemMatch
  },{
    path: 'summary-dashboard',
    component: SummaryDashboard
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
