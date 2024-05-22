import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormTemplateDrivenComponent } from './user-form-template-driven.component';

describe('UserFormTemplateDrivenComponent', () => {
  let component: UserFormTemplateDrivenComponent;
  let fixture: ComponentFixture<UserFormTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormTemplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
