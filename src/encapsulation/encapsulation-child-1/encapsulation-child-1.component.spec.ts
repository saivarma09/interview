import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationChild1Component } from './encapsulation-child-1.component';

describe('EncapsulationChild1Component', () => {
  let component: EncapsulationChild1Component;
  let fixture: ComponentFixture<EncapsulationChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
