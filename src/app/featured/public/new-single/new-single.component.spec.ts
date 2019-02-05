import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSingleComponent } from './new-single.component';

describe('NewSingleComponent', () => {
  let component: NewSingleComponent;
  let fixture: ComponentFixture<NewSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
