import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-child-1',
  imports: [],
  templateUrl: './encapsulation-child-1.component.html',
  styleUrl: './encapsulation-child-1.component.scss',
  encapsulation:ViewEncapsulation.Emulated
})
export class EncapsulationChild1Component {

}
