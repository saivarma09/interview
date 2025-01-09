import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsExampleComponent } from './js-example.component';

describe('JsExampleComponent', () => {
  let component: JsExampleComponent;
  let fixture: ComponentFixture<JsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
