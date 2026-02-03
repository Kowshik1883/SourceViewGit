import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-item-match',
  standalone: false,
  templateUrl: './item-match.html',
  styleUrls: ['./item-match.scss'],
    animations: [
    trigger('sectionAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(14px)' }),
        animate('260ms cubic-bezier(.4,0,.2,1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('180ms cubic-bezier(.4,0,.2,1)', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ]),
    trigger('viewSwap', [
      transition('* <=> *', [
        group([
          query(':enter', [
            style({ opacity: 0, transform: 'translateX(-48px)' }),
            animate('360ms 30ms cubic-bezier(.45,.05,.2,.95)', style({ opacity: 1, transform: 'translateX(0)' }))
          ], { optional: true }),
          query(':leave', [
            animate('300ms cubic-bezier(.45,.05,.2,.95)', style({ opacity: 0, transform: 'translateX(48px)' }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class ItemMatch {

  isDashboard = true;

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
    { key: 'cmf', label: 'CMF', count: 6, percent: 1 }  ];

  platformMetrics = [
    { key: 'itemsNotSelectedPlatforms', label: 'Items NOT SELECTED PLATFORM(s)', count: 0, percent: 0 },
    { key: 'implantsNotRequired', label: 'Implants NOT REQUIRED', count: 711, percent: 22 },
    { key: 'instrument', label: 'INSTRUMENT', count: 2, percent: 0 },
    { key: 'itemsNotEquivalent', label: 'Items NOT EQUIVALENT', count: 0, percent: 0 },
    { key: 'kitMultiSku', label: 'KIT or MULTI-SKU', count: 0, percent: 0 }
  ];

  itemsData = [
    {
      customerQty: 2,
      mfgName: 'Acumed',
      mfgItem: '30-0304',
      itemDesc: '3.0mm x 14mm Non-Locking Hexalobe Screw',
      actualUom: 'EA', status: 'Active', specialty: 'Orthopaedics', platform: 'Trauma', segment: 'Implant',
      jjItem: 'JJ-55410', jjItemDesc: 'Locking Hexalobe Screw 3.0x14', jjUom: 'EA', jjProposedQty: 2,
      net: 42.75, netTotal: 85.50, jjNet: 40.00, jjNetTotal: 80.00
    },
    {
      customerQty: 2,
      mfgName: 'Acumed',
      mfgItem: '30-0331',
      itemDesc: 'SCREW BONE 2.7mm x 22mm LOCKING HEXALOBE',
      actualUom: 'EA', status: 'Active', specialty: 'Orthopaedics', platform: 'Trauma', segment: 'Implant',
      jjItem: 'JJ-56220', jjItemDesc: 'Locking Bone Screw 2.7x22', jjUom: 'EA', jjProposedQty: 2,
      net: 44.10, netTotal: 88.20, jjNet: 41.50, jjNetTotal: 83.00
    },
    {
      customerQty: 1,
      mfgName: 'Acumed',
      mfgItem: '30-0347',
      itemDesc: '2.7mm x 16mm Non-Locking Hexalobe Screw',
      actualUom: 'EA', status: 'Active', specialty: 'Orthopaedics', platform: 'Trauma', segment: 'Instrument',
      jjItem: 'JJ-56160', jjItemDesc: 'Hexalobe Screw 2.7x16', jjUom: 'EA', jjProposedQty: 1,
      net: 37.25, netTotal: 37.25, jjNet: 35.00, jjNetTotal: 35.00
    },
    {
      customerQty: 1,
      mfgName: 'Acumed',
      mfgItem: '30-0352',
      itemDesc: '2.7mm x 26mm Non-Locking Hexalobe Screw',
      actualUom: 'EA', status: 'Active', specialty: 'Orthopaedics', platform: 'Trauma', segment: 'Instrument',
      jjItem: 'JJ-56260', jjItemDesc: 'Hexalobe Screw 2.7x26', jjUom: 'EA', jjProposedQty: 1,
      net: 38.10, netTotal: 38.10, jjNet: 36.00, jjNetTotal: 36.00
    },
    {
      customerQty: 1,
      mfgName: 'Acumed',
      mfgItem: '30-0353',
      itemDesc: 'SCREW NONLOCKING HEXALOBE 2.7mm x 28mm',
      actualUom: 'EA', status: 'Active', specialty: 'Orthopaedics', platform: 'Trauma', segment: 'Instrument',
      jjItem: 'JJ-56280', jjItemDesc: 'Hexalobe Screw 2.7x28', jjUom: 'EA', jjProposedQty: 1,
      net: 38.60, netTotal: 38.60, jjNet: 36.75, jjNetTotal: 36.75
    },
    {
      customerQty: 1,
      mfgName: 'Acumed',
      mfgItem: '3004-23012',
      itemDesc: 'SCREW HEXLOBE MULTI 2.3mm x 12mm',
      actualUom: 'EA', status: 'Active', specialty: 'Orthopaedics', platform: 'Trauma', segment: 'Implant',
      jjItem: 'JJ-53120', jjItemDesc: 'Multi Hexalobe Screw 2.3x12', jjUom: 'EA', jjProposedQty: 1,
      net: 41.90, netTotal: 41.90, jjNet: 39.00, jjNetTotal: 39.00
    }
  ];

  toggleDashboard() { this.isDashboard = !this.isDashboard; }
  goDashboard() { this.isDashboard = true; }
  goItems() { this.isDashboard = false; }
}
