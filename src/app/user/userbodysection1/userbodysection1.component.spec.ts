import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userbodysection1Component } from './userbodysection1.component';

describe('Userbodysection1Component', () => {
  let component: Userbodysection1Component;
  let fixture: ComponentFixture<Userbodysection1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Userbodysection1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userbodysection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
