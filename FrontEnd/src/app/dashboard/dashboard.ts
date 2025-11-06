import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  viewMode: 'dashboard' | 'validation' | 'match' | 'items' = 'dashboard';

  validationScore = 82; // percent value
  matchScore = 64; // percent value

  metrics = {
    totalVendors: 1280,
    potentialIssues: 37,
    flags: 12,
    duplicates: 8,
    highRisk: 5,
    lastRun: '2025-11-05 14:32'
  };

  validationIssues = [
    { id: 1, text: 'Missing address information for vendor #442' },
    { id: 2, text: 'Invalid tax ID format for vendor #910' },
    { id: 3, text: 'Bank account number length mismatch for vendor #221' }
  ];

  matchIssues = [
    { id: 11, text: 'Possible duplicate: Vendor #1123 & Vendor #1198' },
    { id: 12, text: 'Name normalization conflict: "ACME Intl" vs "ACME International"' },
    { id: 13, text: 'High similarity to blocked vendor record #78' }
  ];

  correctionMetrics = [
    { key: 'skusCorrected', label: 'SKUs CORRECTED', count: 3211, percent: 99 },
    { key: 'uomCorrected', label: 'UOM CORRECTED', count: 21, percent: 1 },
    { key: 'itemsNotFound', label: 'Items NOT FOUND', count: 3, percent: 0 },
    { key: 'itemsNotYetMatched', label: 'Items FOUND and NOT YET MATCHED', count: 5, percent: 0 },
    { key: 'itemsDiscontinued', label: 'Items DISCONTINUED', count: 34, percent: 1 }
  ];

  matchCategoryMetrics = [
    { key: 'trauma', label: 'Trauma', count: 3211, percent: 99 },
    { key: 'cmf', label: 'CMF', count: 6, percent: 0 },
    { key: 'powerTools', label: 'Power Tools', count: 5, percent: 0 }
  ];

  platformMetrics = [
    { key: 'itemsNotSelectedPlatforms', label: 'Items NOT SELECTED PLATFORM(s)', count: 0, percent: 0 },
    { key: 'implantsNotRequired', label: 'Implants NOT REQUIRED', count: 711, percent: 22 },
    { key: 'instrument', label: 'INSTRUMENT', count: 2, percent: 0 },
    { key: 'itemsNotEquivalent', label: 'Items NOT EQUIVALENT', count: 0, percent: 0 },
    { key: 'kitMultiSku', label: 'KIT or MULTI-SKU', count: 0, percent: 0 }
  ];

  switchMode(mode: 'dashboard' | 'validation' | 'match' | 'items') {
    this.viewMode = mode;
  }
}
