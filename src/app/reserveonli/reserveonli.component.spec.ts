import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveonliComponent } from './reserveonli.component';

describe('ReserveonliComponent', () => {
  let component: ReserveonliComponent;
  let fixture: ComponentFixture<ReserveonliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveonliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveonliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
