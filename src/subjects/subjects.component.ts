import { JsonPipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  imports: [JsonPipe],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SubjectsComponent {
  data: any = [];
  behaviorData: any = [];
  RData: any = [];

  subject = new Subject();
  behaviorSubject = new BehaviorSubject(1);
  replaySubject = new ReplaySubject();

  emitInfo() {
    this.subject.next(1);
    setTimeout(() => {
      this.subject.next(2);
    }, 3000)
    setTimeout(() => {
      this.subject.next(3);
    }, 6000)
    setTimeout(() => {
      this.subject.next(4);
    }, 9000)
  }

  emitBhInfo() {
  this.behaviorSubject.next(1);
    setTimeout(() => {
      this.behaviorSubject.next(2);
    }, 3000)
    setTimeout(() => {
      this.behaviorSubject.next(3);
    }, 6000)
    setTimeout(() => {
      this.behaviorSubject.next(4);
    }, 9000)
  }
  emitRInfo() {
  this.replaySubject.next(1);
    setTimeout(() => {
      this.replaySubject.next(2);
    }, 3000)
    setTimeout(() => {
      this.replaySubject.next(3);
    }, 6000)
    setTimeout(() => {
      this.replaySubject.next(4);
    }, 9000)
  }


  getData() {
    this.subject.subscribe((res: any) => {
      console.log(res)
      this.data.push(res)
    })
  }
  getRData() {
    this.replaySubject.subscribe((res: any) => {
      console.log(res)
      this.RData.push(res)
    })
  }

  getBehaviorData(){
    this.behaviorSubject.subscribe((res: any) => {
      console.log(res)
      this.behaviorData.push(res)
    })
  }

}
