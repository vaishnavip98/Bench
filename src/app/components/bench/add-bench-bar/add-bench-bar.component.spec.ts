import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBenchBarComponent } from './add-bench-bar.component';

describe('AddBenchBarComponent', () => {
  let component: AddBenchBarComponent;
  let fixture: ComponentFixture<AddBenchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBenchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBenchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
