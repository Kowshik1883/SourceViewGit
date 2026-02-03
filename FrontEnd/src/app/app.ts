import { Component, signal } from '@angular/core';

interface DropdownOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('SourceView');
  readonly customerName = 'Ardent Health - Sports Medicine';

  readonly facilities: DropdownOption[] = [
    { label: 'All Facilities', value: 'all' },
    { label: 'Ardent Health - Sports Medicine', value: 'ardent' },
    { label: 'St. Mary Hospital', value: 'stmary' },
    { label: 'General Hospital', value: 'general' }
  ];

  readonly views: DropdownOption[] = [
    { label: 'Spend Analysis', value: 'spend' },
    { label: 'Savings Opportunities', value: 'savings' },
    { label: 'Vendor Comparison', value: 'vendor' }
  ];

  selectedFacilities = [this.facilities[0].value];
  selectedView = this.views[0].value;
  isSidebarCollapsed = true;

  onSidebarCollapsed(collapsed: boolean): void {
    this.isSidebarCollapsed = collapsed;
  }
}
