import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { CardModule, Card } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressBarModule } from 'primeng/progressbar';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomePage } from './home-page/home-page';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnterPricing } from './enter-pricing/enter-pricing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Dashboard } from './dashboard/dashboard';
import { ItemMatch } from './item-match/item-match';
import { SummaryDashboard } from './summary-dashboard/summary-dashboard';

@NgModule({
  declarations: [
    App,
    HomePage,
    EnterPricing,
    SidebarComponent,
    Dashboard,
    ItemMatch,
    SummaryDashboard
  ],
  imports: [
    CardModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    ChartModule,
    MultiSelectModule,
    SelectModule,
    ButtonModule,
    DrawerModule,
    DrawerModule,
    InputTextModule,
    DialogModule,
    MenubarModule,
    DividerModule,
    TagModule,
    AvatarModule,
    RippleModule,
    TooltipModule,
    MatIconModule,
    ProgressBarModule,
    PanelModule,
    Card
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
