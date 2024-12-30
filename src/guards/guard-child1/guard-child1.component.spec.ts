import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardChild1Component } from './guard-child1.component';

describe('GuardChild1Component', () => {
  let component: GuardChild1Component;
  let fixture: ComponentFixture<GuardChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
