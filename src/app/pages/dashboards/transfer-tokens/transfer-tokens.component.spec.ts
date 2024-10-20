import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferTokensComponent } from './transfer-tokens.component';

describe('TransferTokensComponent', () => {
  let component: TransferTokensComponent;
  let fixture: ComponentFixture<TransferTokensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferTokensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
