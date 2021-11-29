import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePurchaseHistoryListComponent } from './employee-purchase-history-list.component';

describe('EmployeePurchaseHistoryListComponent', () => {
  let component: EmployeePurchaseHistoryListComponent;
  let fixture: ComponentFixture<EmployeePurchaseHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePurchaseHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePurchaseHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
