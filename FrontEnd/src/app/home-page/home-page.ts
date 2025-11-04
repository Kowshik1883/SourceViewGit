
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
  // Form control for facilities multi-select
  const toppings = new FormControl([]);


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  standalone: false,
})
export class HomePage {
  // Toggle for Spend/Segment view
  isSpendView: boolean = true;

  // Segment Table Data (mock)
  segmentTableData = [
    {
      segmentName: 'Segment A',
      netPrice: '$10,000,000', instrumentSpend: '$100,000', dpsNoEquivalent: '$50,000', proposedSpend: '$8,000,000', savings: 2000000,
      expanded: false,
      vendors: [
        { vendor: 'Vendor 1A', netPrice: '$2,000,000', instrumentSpend: '$20,000', dpsNoEquivalent: '$10,000', proposedSpend: '$1,600,000', savings: 400000 },
        { vendor: 'Vendor 2A', netPrice: '$3,000,000', instrumentSpend: '$30,000', dpsNoEquivalent: '$15,000', proposedSpend: '$2,400,000', savings: 600000 },
        { vendor: 'Vendor 3A', netPrice: '$5,000,000', instrumentSpend: '$50,000', dpsNoEquivalent: '$25,000', proposedSpend: '$4,000,000', savings: 1000000 },
      ]
    },
    {
      segmentName: 'Segment B',
      netPrice: '$8,500,000', instrumentSpend: '$85,000', dpsNoEquivalent: '$42,500', proposedSpend: '$7,000,000', savings: 1500000,
      expanded: false,
      vendors: [
        { vendor: 'Vendor 1B', netPrice: '$2,500,000', instrumentSpend: '$25,000', dpsNoEquivalent: '$12,500', proposedSpend: '$2,000,000', savings: 500000 },
        { vendor: 'Vendor 2B', netPrice: '$3,500,000', instrumentSpend: '$35,000', dpsNoEquivalent: '$17,500', proposedSpend: '$2,800,000', savings: 700000 },
        { vendor: 'Vendor 3B', netPrice: '$2,500,000', instrumentSpend: '$25,000', dpsNoEquivalent: '$12,500', proposedSpend: '$2,200,000', savings: 300000 },
      ]
    },
    {
      segmentName: 'Segment C',
      netPrice: '$6,200,000', instrumentSpend: '$62,000', dpsNoEquivalent: '$31,000', proposedSpend: '$5,000,000', savings: 1200000,
      expanded: false,
      vendors: [
        { vendor: 'Vendor 1C', netPrice: '$2,200,000', instrumentSpend: '$22,000', dpsNoEquivalent: '$11,000', proposedSpend: '$1,800,000', savings: 400000 },
        { vendor: 'Vendor 2C', netPrice: '$2,000,000', instrumentSpend: '$20,000', dpsNoEquivalent: '$10,000', proposedSpend: '$1,600,000', savings: 400000 },
        { vendor: 'Vendor 3C', netPrice: '$2,000,000', instrumentSpend: '$20,000', dpsNoEquivalent: '$10,000', proposedSpend: '$1,600,000', savings: 400000 },
      ]
    },
    {
      segmentName: 'Segment D',
      netPrice: '$5,000,000', instrumentSpend: '$50,000', dpsNoEquivalent: '$25,000', proposedSpend: '$4,000,000', savings: 1000000,
      expanded: false,
      vendors: [
        { vendor: 'Vendor 1D', netPrice: '$1,500,000', instrumentSpend: '$15,000', dpsNoEquivalent: '$7,500', proposedSpend: '$1,200,000', savings: 300000 },
        { vendor: 'Vendor 2D', netPrice: '$2,000,000', instrumentSpend: '$20,000', dpsNoEquivalent: '$10,000', proposedSpend: '$1,600,000', savings: 400000 },
        { vendor: 'Vendor 3D', netPrice: '$1,500,000', instrumentSpend: '$15,000', dpsNoEquivalent: '$7,500', proposedSpend: '$1,200,000', savings: 300000 },
      ]
    },
    {
      segmentName: 'Segment E',
      netPrice: '$4,000,000', instrumentSpend: '$40,000', dpsNoEquivalent: '$20,000', proposedSpend: '$3,200,000', savings: 800000,
      expanded: false,
      vendors: [
        { vendor: 'Vendor 1E', netPrice: '$1,000,000', instrumentSpend: '$10,000', dpsNoEquivalent: '$5,000', proposedSpend: '$800,000', savings: 200000 },
        { vendor: 'Vendor 2E', netPrice: '$2,000,000', instrumentSpend: '$20,000', dpsNoEquivalent: '$10,000', proposedSpend: '$1,600,000', savings: 400000 },
        { vendor: 'Vendor 3E', netPrice: '$1,000,000', instrumentSpend: '$10,000', dpsNoEquivalent: '$5,000', proposedSpend: '$800,000', savings: 200000 },
      ]
    }
  ];
  expandedInstrumentColumns = ['Instruments', 'DePuy Synthes', 'Zimmer Bonnet', 'Smith + Nephew', 'Medacta', 'Exactech', 'TOTAL'];
  // Expanded row data for instrument breakdown (mock)
  expandedInstrumentRowsQuantity = [
    { label: 'Drill Bit', values: [40,80, 80, '', '', '', 80] },
    { label: 'Guide Pin', values: [69,9, 403, 8, '', '', 421] },
    { label: 'Trial', values: [16, '', '', '', 10, 26] },
    { label: 'Other Reusable Instruments', values: [95, 1493, 24, '', 55, 1697] }
  ];
  expandedInstrumentRowsPrice = [
    { label: 'Drill Bit', values: [100, 120, '', '', '', 10] },
    { label: 'Guide Pin', values: [19, 43, 18, '', '', 42] },
    { label: 'Trial', values: [61, '', '', '', 10, 76] },
    { label: 'Other Reusable Instruments', values: [195, 493, 24, '', 55, 1497] }
  ];
  getExpandedInstrumentRows(rowLabel: string) {
    if (rowLabel === 'Avg. Quantity Per Case') {
      return this.expandedInstrumentRowsQuantity;
    } else if (rowLabel === 'Avg. Price Per Case') {
      return this.expandedInstrumentRowsPrice;
    }
    return [];
  }
  getExpandedInstrumentTotal(rowLabel: string) {
    let rows: { label: string; values: (number | string)[] }[] = [];
    if (rowLabel === 'Avg. Quantity Per Case') {
      rows = this.expandedInstrumentRowsQuantity;
    } else if (rowLabel === 'Avg. Price Per Case') {
      rows = this.expandedInstrumentRowsPrice;
    }
    const totals = ['TOTAL'];
    for (let col = 0; col < 6; col++) {
      let sum = 0;
      for (const row of rows) {
        const val = row.values[col];
        if (typeof val === 'number' && !isNaN(val)) {
          sum += val;
        } else if (typeof val === 'string' && val !== '' && !isNaN(Number(val))) {
          sum += Number(val);
        }
      }
      totals.push(sum === 0 ? '' : String(sum));
    }
    return totals;
  }
  // Form control for facilities multi-select
  toppings = new FormControl([]);
  // Data for All Manufacturers: Items for Review table
  manufacturerTableData = [
    {
      instrument: 'Avg. Quantity Per Case',
      depuy: '2.2', depuyDot: '#FFC107',
      zimmer: '2.4', zimmerDot: '#FFC107',
      smith: '0.4', smithDot: '',
      medacta: '2.0', medactaDot: '',
      exactech: '2.0', exactechDot: '',
      total: '2.0'
    },
    {
      instrument: 'Avg. Price Per Case',
      depuy: '$814', depuyDot: '#FFC107',
      zimmer: '$2,014', zimmerDot: '#B71C1C',
      smith: '$583', smithDot: '',
      medacta: '$138', medactaDot: '',
      exactech: '$799', exactechDot: '',
      total: '$799'
    }
  ];
  // Dropdowns
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
  readonly svBlue400 = this.getCssColorValue('--sv-blue-400', '#00B5E2');

  // Chart Legends
  chartLegends = [
    { label: 'DePuy Synthes', color: this.svBlue400 },
    { label: 'DPS No Equivalent', color: '#A7A9AC' },
    { label: 'Zimmer Biomet', color: '#B085C9' },
    { label: 'Smith + Nephew', color: '#E6A1C5' },
    { label: 'Medacta', color: '#F7CAC9' },
    { label: 'Stryker', color: '#B565A7' },
    { label: 'Exactech', color: '#6C3483' },
    { label: 'Others', color: '#34495E' }
  ];

  // Chart Data (mock)
  barChartOptions = {
    plugins: { legend: { display: false } },
    scales: {
      x: {
        stacked: true,
        display: true,
        grid: { display: false },
      },
      y: {
        stacked: true,
        display: true,
        grid: { display: false },
      }
    },
    responsive: true,
    maintainAspectRatio: false
  };
  currentSpendChartData = {
    labels: [''],
    datasets: [
      { label: 'DePuy Synthes', backgroundColor: this.svBlue400, data: [10] },
      { label: 'Zimmer Biomet', backgroundColor: '#B085C9', data: [20] },
      { label: 'Smith + Nephew', backgroundColor: '#E6A1C5', data: [15] },
      { label: 'Medacta', backgroundColor: '#F7CAC9', data: [5] },
      { label: 'Stryker', backgroundColor: '#B565A7', data: [8] },
      { label: 'Exactech', backgroundColor: '#6C3483', data: [7] },
      { label: 'Others', backgroundColor: '#34495E', data: [6] }
    ]
  };
  proposedSpendChartData = {
    labels: [''],
    datasets: [
      { label: 'DePuy Synthes', backgroundColor: this.svBlue400, data: [30] },
      { label: 'DPS No Equivalent', backgroundColor: '#A7A9AC', data: [10] }
    ]
  };
  savingsChartData = {
    labels: [''],
    datasets: [
      { label: 'Savings', backgroundColor: '#B085C9', data: [21] }
    ]
  };
  pieChartOptions = {
    plugins: {
      legend: { display: false },
      datalabels: {
        display: true,
        color: '#222',
        font: { weight: 'bold', size: 14 },
        formatter: (value: number, context: any) => {
          const data = context.chart.data.datasets[0].data;
          const total = data.reduce((acc: number, val: number) => acc + val, 0);
          const percent = total ? Math.round((value / total) * 100) : 0;
          return percent + '%';
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false
  };
  // Make sure datalabels plugin is loaded globally (if not already)
  // import ChartDataLabels from 'chartjs-plugin-datalabels';
  // Chart.register(ChartDataLabels);
  vendorSharePieData = {
    labels: ['DePuy Synthes', 'Zimmer Biomet', 'Smith + Nephew', 'Medacta', 'Stryker', 'Exactech', 'Others'],
    datasets: [
      {
        data: [30, 20, 20, 10, 10, 5, 5],
        backgroundColor: [
          this.svBlue400, '#B085C9', '#E6A1C5', '#F7CAC9', '#B565A7', '#6C3483', '#34495E'
        ]
      }
    ]
  };

  // Vendor Table Data (mock)
  vendorTableData = [
    { vendor: 'DePuy Synthes', isLink: true, netPrice: '$4,978,482', instrumentSpend: '$102,722', dpsNoEquivalent: '$0', proposedSpend: '$2,503,740', savings: 2474742 },
    { vendor: 'Zimmer Biomet', netPrice: '$25,460,031', instrumentSpend: '$724,439', dpsNoEquivalent: '$844,722', proposedSpend: '$17,315,610', savings: 8144421 },
    { vendor: 'Smith + Nephew', netPrice: '$14,147,452', instrumentSpend: '$51,303', dpsNoEquivalent: '$215,840', proposedSpend: '$5,873,863', savings: 8273589 },
    { vendor: 'Medacta', netPrice: '$3,781,683', instrumentSpend: '$0', dpsNoEquivalent: '$7,874', proposedSpend: '$3,325,622', savings: 456061 },
    { vendor: 'Stryker', netPrice: '$2,458,314', instrumentSpend: '$0', dpsNoEquivalent: '$55,724', proposedSpend: '$2,565,588', savings: -107274 },
    { vendor: 'Others', netPrice: '$1,102,219', instrumentSpend: '$0', dpsNoEquivalent: '$17,321', proposedSpend: '$155,624', savings: 946595 },
    { vendor: 'TOTAL', netPrice: '$53,111,093', instrumentSpend: '$883,074', dpsNoEquivalent: '$1,227,757', proposedSpend: '$31,963,266', savings: 21147827 }
  ];

  // Items for Review Table Data (mock)
  reviewColumns = ['DePuy Synthes', 'Zimmer Bonnet', 'Smith + Nephew', 'Medacta', 'Exactech'];
  itemsReviewTableData = [
    {
      instrument: 'Avg. Quantity Per Case',
      'DePuy Synthes': { value: 2.2, color: '#FFC107' },
      'Zimmer Bonnet': { value: 2.4, color: '#FFC107' },
      'Smith + Nephew': { value: 0.4, color: '' },
      'Medacta': { value: 2.0, color: '' },
      'Exactech': { value: 2.0, color: '' },
      total: 2.0
    },
    {
      instrument: 'Avg. Price Per Case',
      'DePuy Synthes': { value: 814, color: '#FFC107' },
      'Zimmer Bonnet': { value: 2014, color: '#B71C1C' },
      'Smith + Nephew': { value: 583, color: '' },
      'Medacta': { value: 138, color: '' },
      'Exactech': { value: 799, color: '' },
      total: 799
    }
  ];

  private getCssColorValue(variableName: string, fallback: string): string {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return fallback;
    }
    const value = getComputedStyle(document.documentElement).getPropertyValue(variableName);
    return value ? value.trim() || fallback : fallback;
  }
}
