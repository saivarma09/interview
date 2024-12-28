import { Component, ViewEncapsulation } from '@angular/core';
import { EncapsulationChild1Component } from './encapsulation-child-1/encapsulation-child-1.component';
import { EncapsulationChild2Component } from './encapsulation-child-2/encapsulation-child-2.component';

@Component({
  selector: 'app-encapsulation',
  imports: [EncapsulationChild1Component,EncapsulationChild2Component],
  templateUrl: './encapsulation.component.html',
  styleUrl: './encapsulation.component.scss',
  encapsulation:ViewEncapsulation.Emulated
})
export class EncapsulationComponent {

}
