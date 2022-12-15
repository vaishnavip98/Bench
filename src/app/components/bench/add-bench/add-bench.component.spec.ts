import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBenchComponent } from './add-bench.component';

describe('AddBenchComponent', () => {
  let component: AddBenchComponent;
  let fixture: ComponentFixture<AddBenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBenchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
