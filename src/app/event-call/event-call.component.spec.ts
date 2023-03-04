import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCallComponent } from './event-call.component';

describe('EventCallComponent', () => {
  let component: EventCallComponent;
  let fixture: ComponentFixture<EventCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
