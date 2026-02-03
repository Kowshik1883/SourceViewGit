import { Component } from '@angular/core';

@Component({
  selector: 'app-summary-dashboard',
  standalone: false,
  templateUrl: './summary-dashboard.html',
  styleUrl: './summary-dashboard.scss',
})
export class SummaryDashboard {
  companies = [
    { label: 'Company A', value: 'A' },
    { label: 'Company B', value: 'B' },
    { label: 'Company C', value: 'C' }
  ];
  selectedCompany = this.companies[0];

  spendBars = [
    { label: 'Current Spend', display: '$4.0M', height: 100, type: 'current' },
    { label: 'Price Savings', display: '-$400K', height: 10, type: 'savings' },
    { label: 'Utilization Savings', display: '-$400K', height: 10, type: 'savings' },
    { label: 'Proposed Spend', display: '$3.2M', height: 80, type: 'proposed' }
  ];

  totalSavings = { amount: 800000, lineHeight: 80 }; // bottom offset percent corresponding to proposed spend height

  // Chart.js config for spend progression (mirrors bars above)
  spendChartData = {
    labels: ['Current Spend','Proposed Spend'],
    datasets: [
      {
        type: 'bar',
        label: 'Spend / Savings',
        data: [4000000, 3200000],
        backgroundColor: (ctx: any) => {
          const i = ctx.index;
          // Mapping new theme palette: current -> cerulean, savings -> eastern-blue / scooter, proposed -> teal-blue
          const palette = ['#0fb2e0', '#05375a'];
          return palette[i];
        },
        borderRadius: 6,
        barPercentage: 0.55,
        categoryPercentage: 0.6
      }
    ]
  };

  spendChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: any) => {
            const v = ctx.raw;
            const isNeg = v < 0;
            const abs = Math.abs(v);
            const fmt = abs >= 1000000 ? `$${(abs/1000000).toFixed(1)}M` : `$${(abs/1000).toFixed(0)}K`;
            return isNeg ? `Savings: -${fmt}` : `Spend: ${fmt}`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: { font: { size: 11, family: 'Roboto, sans-serif', weight: '500' }, color: '#0d354e' },
        grid: { display: false }
      },
      y: {
        ticks: {
          font: { size: 11, family: 'Roboto, sans-serif' },
          color: '#0d354e',
          callback: (val: number) => {
            const abs = Math.abs(val);
            if (abs >= 1000000) return `$${(val/1000000).toFixed(1)}M`;
            return `$${(val/1000).toFixed(0)}K`;
          }
        },
        border: { display: false },
        grid: { color: 'rgba(15,178,224,.25)', drawBorder: false }
      }
    }
  };

  kpis = [
    { title: 'Total Savings ($)', value: '$800,000', delta: '20%', accentClass: 'accent-green', deltaClass: 'accent-green' },
    { title: 'Net Price', value: '$4.1M', delta: '-5%', accentClass: 'accent-dark', deltaClass: 'accent-red' },
    { title: 'Instrument Spend', value: '$1.2M', delta: '+2%', accentClass: 'accent-dark', deltaClass: 'accent-muted' },
    { title: 'Aggregate Discount', value: '18.75%', delta: 'Company A', accentClass: 'accent-blue', deltaClass: 'accent-muted' }
  ];

  // View mode state for Spend Progression card: 'chart' or 'table'
  viewMode: 'chart' | 'table' = 'chart';

  // Table view data (single illustrative row)
  aggregateDiscount = 66; // percent for header display
  progressionData = [
    {
      platform: 'Topical Skin Adhesives',
      netPrice: 9611,
      instrumentSpend: 0,
      noEquivalent: 0,
      proposedSpend: 9803,
      totalSavingsAmount: 0, // Placeholder; replace with computed difference
      totalSavingsPercent: 0
    }
  ];

  get progressionTotals() {
    // For now with one row mirrors first; expand later
    return this.progressionData.reduce((acc, r) => {
      acc.netPrice += r.netPrice;
      acc.instrumentSpend += r.instrumentSpend;
      acc.noEquivalent += r.noEquivalent;
      acc.proposedSpend += r.proposedSpend;
      acc.totalSavingsAmount += r.totalSavingsAmount;
      acc.totalSavingsPercent += r.totalSavingsPercent; // simplistic; normally weighted or recomputed
      return acc;
    }, { netPrice:0, instrumentSpend:0, noEquivalent:0, proposedSpend:0, totalSavingsAmount:0, totalSavingsPercent:0 });
  }

  specialtySavings = [
    { name: 'Cardiology', amount: 250000, percent: 25 },
    { name: 'Orthopedics', amount: 180000, percent: 18 },
    { name: 'General Surgery', amount: 150000, percent: 22 },
    { name: 'Neurology', amount: 120000, percent: 15 },
    { name: 'Radiology', amount: 60000, percent: 12 },
    { name: 'Oncology', amount: 40000, percent: 10 },
    { name: 'Urology', amount: 35000, percent: 21 },
  
  ];

  export() {
    // Placeholder export logic
    console.log('Export dashboard for', this.selectedCompany.value);
  }

  toggleView() {
    this.viewMode = this.viewMode === 'chart' ? 'table' : 'chart';
  }

}
