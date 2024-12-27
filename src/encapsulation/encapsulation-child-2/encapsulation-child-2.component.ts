import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-child-2',
  imports: [],
  templateUrl: './encapsulation-child-2.component.html',
  styleUrl: './encapsulation-child-2.component.scss',
   encapsulation:ViewEncapsulation.ShadowDom
})
export class EncapsulationChild2Component {

}
