import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryDashboard } from './summary-dashboard';

describe('SummaryDashboard', () => {
  let component: SummaryDashboard;
  let fixture: ComponentFixture<SummaryDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
