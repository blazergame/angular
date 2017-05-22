import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneJobComponent } from './one-job.component';

describe('OneJobComponent', () => {
  let component: OneJobComponent;
  let fixture: ComponentFixture<OneJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
