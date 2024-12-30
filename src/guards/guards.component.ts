import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-guards',
  imports: [RouterOutlet],
  templateUrl: './guards.component.html',
  styleUrl: './guards.component.scss'
})
export class GuardsComponent {

  constructor(private router:Router){}
  activateChild(){
    this.router.navigate(['guards/guards-child'])
  }
  deactiveChild(){
    this.router.navigate(['guards'])
  }
}
