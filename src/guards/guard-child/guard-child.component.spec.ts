import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardChildComponent } from './guard-child.component';

describe('GuardChildComponent', () => {
  let component: GuardChildComponent;
  let fixture: ComponentFixture<GuardChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
