import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseHistoryListComponent } from './purchase-history-list.component';

describe('PurchaseHistoryListComponent', () => {
  let component: PurchaseHistoryListComponent;
  let fixture: ComponentFixture<PurchaseHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
