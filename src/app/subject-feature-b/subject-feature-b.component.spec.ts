import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFeatureBComponent } from './subject-feature-b.component';

describe('SubjectFeatureBComponent', () => {
  let component: SubjectFeatureBComponent;
  let fixture: ComponentFixture<SubjectFeatureBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectFeatureBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectFeatureBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
