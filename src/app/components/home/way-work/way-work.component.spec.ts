import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayWorkComponent } from './way-work.component';

describe('WayWorkComponent', () => {
  let component: WayWorkComponent;
  let fixture: ComponentFixture<WayWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
