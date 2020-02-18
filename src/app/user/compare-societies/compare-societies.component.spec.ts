import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareSocietiesComponent } from './compare-societies.component';

describe('CompareSocietiesComponent', () => {
  let component: CompareSocietiesComponent;
  let fixture: ComponentFixture<CompareSocietiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareSocietiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareSocietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
