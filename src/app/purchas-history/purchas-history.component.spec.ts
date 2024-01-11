import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasHistoryComponent } from './purchas-history.component';

describe('PurchasHistoryComponent', () => {
  let component: PurchasHistoryComponent;
  let fixture: ComponentFixture<PurchasHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchasHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
