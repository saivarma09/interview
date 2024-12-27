import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationChild2Component } from './encapsulation-child-2.component';

describe('EncapsulationChild2Component', () => {
  let component: EncapsulationChild2Component;
  let fixture: ComponentFixture<EncapsulationChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationChild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
