import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupWithdrawComponent } from './topup-withdraw.component';

describe('TopupWithdrawComponent', () => {
  let component: TopupWithdrawComponent;
  let fixture: ComponentFixture<TopupWithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopupWithdrawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopupWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
