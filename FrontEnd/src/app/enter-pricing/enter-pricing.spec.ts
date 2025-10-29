import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPricing } from './enter-pricing';

describe('EnterPricing', () => {
  let component: EnterPricing;
  let fixture: ComponentFixture<EnterPricing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterPricing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterPricing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
