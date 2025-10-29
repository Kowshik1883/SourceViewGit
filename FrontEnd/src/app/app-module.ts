import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { CardModule, Card } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DropdownModule } from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomePage } from './home-page/home-page';
import { PrimeIcons } from 'primeng/api';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { EnterPricing } from './enter-pricing/enter-pricing';

@NgModule({
  declarations: [
    App,
    HomePage,
    EnterPricing
  ],
  imports: [
    CardModule,
    BrowserModule,
    MatInputModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    TableModule,
    ChartModule,
    SelectModule,
    ButtonModule,
    DrawerModule,
    DrawerModule,
    InputTextModule,
    MenubarModule,
    DividerModule,
    TagModule,
    AvatarModule,
    RippleModule,
    TooltipModule,
    MatIconModule,
    // DropdownModule,
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
