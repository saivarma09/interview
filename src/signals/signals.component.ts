import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
count = signal(0);
arr = signal([1,2,3,4]);

comCount = computed(() => this.count() + this.count())

constructor(){
  effect(()=>{
    console.log('on changes', this.count())
  })
}


updateSignal(){
  this.count.set(this.count()+1)
}

updateArray(){
  this.arr.update(value => [...value,this.count()])
}
}
