import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BUserComponent } from './buser.component';

describe('BUserComponent', () => {
  let component: BUserComponent;
  let fixture: ComponentFixture<BUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
