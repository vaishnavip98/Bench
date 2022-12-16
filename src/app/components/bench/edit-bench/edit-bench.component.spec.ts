import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBenchComponent } from './edit-bench.component';

describe('EditBenchComponent', () => {
  let component: EditBenchComponent;
  let fixture: ComponentFixture<EditBenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBenchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
