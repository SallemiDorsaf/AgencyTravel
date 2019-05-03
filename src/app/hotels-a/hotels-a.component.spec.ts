import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsAComponent } from './hotels-a.component';

describe('HotelsAComponent', () => {
  let component: HotelsAComponent;
  let fixture: ComponentFixture<HotelsAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
