import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaaaComponent } from './aaaaa.component';

describe('AaaaaComponent', () => {
  let component: AaaaaComponent;
  let fixture: ComponentFixture<AaaaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaaaaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaaaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
