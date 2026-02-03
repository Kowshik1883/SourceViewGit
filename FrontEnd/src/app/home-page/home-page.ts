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
  getVendorPercent(ds: any): number {
    if (!this.currentSpendChartData || !this.currentSpendChartData.datasets) return 0;
    const total = this.currentSpendChartData.datasets.reduce((sum: number, d: any) => sum + (d.data[0] || 0), 0);
    if (!total) return 0;
    return Math.round(((ds.data[0] || 0) / total) * 100);
  }
    getCurrentSpendTotal(): string {
    // Sum all values in currentSpendChartData.datasets
    if (!this.currentSpendChartData || !this.currentSpendChartData.datasets) return '$0';
    const total = this.currentSpendChartData.datasets.reduce((sum: number, ds: any) => sum + (ds.data[0] || 0), 0);
    // Format as $xx.xM
    return `$${total.toFixed(1)}M`;
  }

  getTopVendorName(): string {
    if (!this.currentSpendChartData || !this.currentSpendChartData.datasets) return '';
    let topVendor = '';
    let topValue = -Infinity;
    for (const ds of this.currentSpendChartData.datasets) {
      if (ds.data[0] > topValue) {
        topValue = ds.data[0];
        topVendor = ds.label;
      }
    }
    return topVendor;
  }

  getVendorCount(): number {
    if (!this.currentSpendChartData || !this.currentSpendChartData.datasets) return 0;
    return this.currentSpendChartData.datasets.length;
  }
  openChartDialog(title: string, subtitle: string, value: string, type: string, data: any, options: any, subvalue: string, valueColor: string) {
    // You can expand this logic to set dynamic modal content if needed
    this.showChartDialog = true;
  }
  // Toggle for Spend/Segment view
  isSpendView: boolean = true;
  showSpendPopup: boolean = false;
    showChartDialog = false;
  
    spendContributionChartData = {
      labels: ['VendorCorp Inc.', 'Acme Global', 'SupplierZ', 'Innovate LLC', 'Services Co.', 'Other'],
      datasets: [{
        data: [437500, 312500, 250000, 125000, 62500, 62500],
        backgroundColor: ['#4285F4', '#2ED9C3', '#FFA726', '#B620E0', '#8CD211', '#E5E7EB'],
        borderWidth: 0
      }]
    };
  
    spendContributionChartOptions = {
      cutout: '70%',
      plugins: {
        legend: { display: false }
      }
    };
  
    spendByVendor = [
      { name: 'VendorCorp Inc.', percent: 35, value: '$437.5k', color: '#4285F4' },
      { name: 'Acme Global', percent: 25, value: '$312.5k', color: '#2ED9C3' },
      { name: 'SupplierZ', percent: 20, value: '$250.0k', color: '#FFA726' },
      { name: 'Innovate LLC', percent: 10, value: '$125.0k', color: '#B620E0' },
      { name: 'Services Co.', percent: 5, value: '$62.5k', color: '#8CD211' },
      { name: 'Other', percent: 5, value: '$62.5k', color: '#E5E7EB' }
    ];
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
      { label: 'Zimmer Biomet', backgroundColor: '#B085C9', data: [21] }
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
    { vendor: 'DePuy Synthes', isJnJ:false, isLink: true, netPrice: '$4,978,482', instrumentSpend: '$102,722', dpsNoEquivalent: '$0', proposedSpend: '$2,503,740', savings: 2474742 },
    { vendor: 'Zimmer Biomet', isJnJ: false, isLink: true, netPrice: '$25,460,031', instrumentSpend: '$724,439', dpsNoEquivalent: '$844,722', proposedSpend: '$17,315,610', savings: 8144421 },
    { vendor: 'Smith + Nephew', isJnJ: true, isLink: true, netPrice: '$14,147,452', instrumentSpend: '$51,303', dpsNoEquivalent: '$215,840', proposedSpend: '$5,873,863', savings: 8273589 },
    { vendor: 'Medacta', isJnJ: false, isLink: true, netPrice: '$3,781,683', instrumentSpend: '$0', dpsNoEquivalent: '$7,874', proposedSpend: '$3,325,622', savings: 456061 },
    { vendor: 'Stryker', isJnJ: false, isLink: true, netPrice: '$2,458,314', instrumentSpend: '$0', dpsNoEquivalent: '$55,724', proposedSpend: '$2,565,588', savings: -107274 },
    { vendor: 'Others', isJnJ: false, isLink: true, netPrice: '$1,102,219', instrumentSpend: '$0', dpsNoEquivalent: '$17,321', proposedSpend: '$155,624', savings: 946595 },
    { vendor: 'TOTAL', isJnJ: false, isLink: true, netPrice: '$53,111,093', instrumentSpend: '$883,074', dpsNoEquivalent: '$1,227,757', proposedSpend: '$31,963,266', savings: 21147827 }
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

  dialogOpened = false;

  // Proposed Spend dialog
  showProposedSpendDialog = false;
  getProposedSpendTotal(): string {
    if (!this.proposedSpendChartData || !this.proposedSpendChartData.datasets) return '$0';
    const total = this.proposedSpendChartData.datasets.reduce((sum: number, ds: any) => sum + (ds.data[0] || 0), 0);
    return `$${total.toFixed(1)}M`;
  }
  getTopProposedVendorName(): string {
    if (!this.proposedSpendChartData || !this.proposedSpendChartData.datasets) return '';
    let topVendor = '';
    let topValue = -Infinity;
    for (const ds of this.proposedSpendChartData.datasets) {
      if (ds.data[0] > topValue) {
        topValue = ds.data[0];
        topVendor = ds.label;
      }
    }
    return topVendor;
  }
  getProposedVendorCount(): number {
    if (!this.proposedSpendChartData || !this.proposedSpendChartData.datasets) return 0;
    return this.proposedSpendChartData.datasets.length;
  }
  getProposedVendorPercent(ds: any): number {
    if (!this.proposedSpendChartData || !this.proposedSpendChartData.datasets) return 0;
    const total = this.proposedSpendChartData.datasets.reduce((sum: number, d: any) => sum + (d.data[0] || 0), 0);
    if (!total) return 0;
    return Math.round(((ds.data[0] || 0) / total) * 100);
  }

  // Estimated Savings dialog
  showSavingsDialog = false;
  getSavingsTotal(): string {
    if (!this.savingsChartData || !this.savingsChartData.datasets) return '$0';
    const total = this.savingsChartData.datasets.reduce((sum: number, ds: any) => sum + (ds.data[0] || 0), 0);
    return `$${total.toFixed(1)}M`;
  }
  getTopSavingsVendorName(): string {
    if (!this.savingsChartData || !this.savingsChartData.datasets) return '';
    let topVendor = '';
    let topValue = -Infinity;
    for (const ds of this.savingsChartData.datasets) {
      if (ds.data[0] > topValue) {
        topValue = ds.data[0];
        topVendor = ds.label;
      }
    }
    return topVendor;
  }
  getSavingsVendorCount(): number {
    if (!this.savingsChartData || !this.savingsChartData.datasets) return 0;
    return this.savingsChartData.datasets.length;
  }
  getSavingsVendorPercent(ds: any): number {
    if (!this.savingsChartData || !this.savingsChartData.datasets) return 0;
    const total = this.savingsChartData.datasets.reduce((sum: number, d: any) => sum + (d.data[0] || 0), 0);
    if (!total) return 0;
    return Math.round(((ds.data[0] || 0) / total) * 100);
  }

  // Vendor Share dialog
  showVendorShareDialog = false;
  getTopVendorShareName(): string {
    if (!this.vendorSharePieData || !this.vendorSharePieData.datasets) return '';
    let topVendor = '';
    let topValue = -Infinity;
    for (const ds of this.vendorSharePieData.datasets) {
      if (ds.data[0] > topValue) {
        topValue = ds.data[0];
        topVendor = this.vendorSharePieData.labels[0];
      }
    }
    return topVendor;
  }
  getVendorShareCount(): number {
    if (!this.vendorSharePieData || !this.vendorSharePieData.datasets) return 0;
    return this.vendorSharePieData.datasets.length;
  }
  getVendorSharePercent(ds: any): number {
    if (!this.vendorSharePieData || !this.vendorSharePieData.datasets) return 0;
    const total = this.vendorSharePieData.datasets.reduce((sum: number, d: any) => sum + (d.data[0] || 0), 0);
    if (!total) return 0;
    return Math.round(((ds.data[0] || 0) / total) * 100);
  }

  getVendorShareVendors() {
    if (!this.vendorSharePieData || !this.vendorSharePieData.labels || !this.vendorSharePieData.datasets || !this.vendorSharePieData.datasets[0]) return [];
    const data = this.vendorSharePieData.datasets[0].data;
    const colors = this.vendorSharePieData.datasets[0].backgroundColor;
    return this.vendorSharePieData.labels.map((name: string, i: number) => {
      const value = data[i] || 0;
      const total = data.reduce((sum: number, v: number) => sum + v, 0);
      const percent = total ? Math.round((value / total) * 100) : 0;
      return {
        name,
        percent,
        value: `$${value.toFixed(1)}M`,
        color: colors[i] || '#ccc'
      };
    });
  }

  vendorShareVendors = [
    { name: 'DePuy Synthes', percent: 100, value: '$30.0M', color: '#00bcd4' },
    // Add more vendors here as needed, matching your pie chart data
  ];
}
