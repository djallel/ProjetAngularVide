import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFeatureAComponent } from './subject-feature-a.component';

describe('SubjectFeatureAComponent', () => {
  let component: SubjectFeatureAComponent;
  let fixture: ComponentFixture<SubjectFeatureAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectFeatureAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectFeatureAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
