import { Component, signal } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})

export class App {
    toppings = new FormControl([]);
  protected readonly title = signal('SourceView');
    facilities = [
    { label: 'All Facilities', value: 'all' },
    { label: 'Ardent Health - Sports Medicine', value: 'ardent' },
    { label: 'St. Mary Hospital', value: 'stmary' },
    { label: 'General Hospital', value: 'general' }
  ];
  selectedFacility = 'all';
  views = [
    { label: 'Spend Analysis', value: 'spend' },
    { label: 'Savings Opportunities', value: 'savings' },
    { label: 'Vendor Comparison', value: 'vendor' }
  ];
  selectedView = 'spend';
}
