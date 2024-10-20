import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryTransactionsComponent } from './query-transactions.component';

describe('QueryTransactionsComponent', () => {
  let component: QueryTransactionsComponent;
  let fixture: ComponentFixture<QueryTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
