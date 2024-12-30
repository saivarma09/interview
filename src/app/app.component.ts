import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interview';
  listed:any=[
    {title:'DOM',route:'/dom'},
    {title:'Encapsulation',route:'/encapsulation'},
    {title:'Observale-promise',route:'/observalPromise'},
    {title:'RXJS',route:'/rxjs'},
    {title:'Subjects',route:'/subjects'},
    {title:'Guards',route:'/guards'}
  ];
  constructor(public router:Router){}
}
