import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpfsDataComponent } from './ipfs-data.component';

describe('IpfsDataComponent', () => {
  let component: IpfsDataComponent;
  let fixture: ComponentFixture<IpfsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpfsDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpfsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
