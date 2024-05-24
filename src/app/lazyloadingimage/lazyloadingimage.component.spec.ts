import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadingimageComponent } from './lazyloadingimage.component';

describe('LazyloadingimageComponent', () => {
  let component: LazyloadingimageComponent;
  let fixture: ComponentFixture<LazyloadingimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyloadingimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadingimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
