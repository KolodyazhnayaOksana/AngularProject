import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeWorkComponent } from './welcome-work.component';

describe('WelcomeWorkComponent', () => {
  let component: WelcomeWorkComponent;
  let fixture: ComponentFixture<WelcomeWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
