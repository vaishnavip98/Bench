import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchHeaderComponent } from './bench-header.component';

describe('BenchHeaderComponent', () => {
  let component: BenchHeaderComponent;
  let fixture: ComponentFixture<BenchHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenchHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
