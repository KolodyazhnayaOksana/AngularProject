import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWorkCardComponent } from './how-work-card.component';

describe('HowWorkCardComponent', () => {
  let component: HowWorkCardComponent;
  let fixture: ComponentFixture<HowWorkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWorkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWorkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
