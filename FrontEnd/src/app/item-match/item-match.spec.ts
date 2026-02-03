import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMatch } from './item-match';

describe('ItemMatch', () => {
  let component: ItemMatch;
  let fixture: ComponentFixture<ItemMatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemMatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMatch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
