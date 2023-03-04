import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedForLoopComponent } from './nested-for-loop.component';

describe('NestedForLoopComponent', () => {
  let component: NestedForLoopComponent;
  let fixture: ComponentFixture<NestedForLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedForLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedForLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
