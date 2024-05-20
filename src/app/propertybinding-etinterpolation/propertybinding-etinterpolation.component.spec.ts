import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybindingETinterpolationComponent } from './propertybinding-etinterpolation.component';

describe('PropertybindingETinterpolationComponent', () => {
  let component: PropertybindingETinterpolationComponent;
  let fixture: ComponentFixture<PropertybindingETinterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertybindingETinterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertybindingETinterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
