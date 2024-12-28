import { Component, OnInit } from '@angular/core';
import { debounceTime, from, interval, Observable, of, range, switchMap } from 'rxjs';
import { RxjsService } from './rxjs.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit {
  ofOutput: any = [];
  fromOutput: any = [];
  rangeOutput: any = [];
  intervalOutput: any = [];
  switchFilterValue: any = [];
  debounceFilterValue: any = [];
  search = new FormControl()

  defaultArray = [1, 2, 3, 4]
  mappedArray: any;
  filterArray: any;
  reduceValue: any;
  contactValue: any;
  findInfo: any;
  debounceValue = new FormControl();
  selectedRxjs:string = "";

  constructor(private rxjsService: RxjsService) {

  }

  ngOnInit(): void {

    this.search.valueChanges.pipe(
      switchMap((res: any) => this.rxjsService.getSearchInfo(res))).subscribe((res: any) => {
        console.log(res)
        this.switchFilterValue = res.users
      })
    this.debounceValue.valueChanges.pipe(
      debounceTime(1000),
      switchMap((res: any) => this.rxjsService.getSearchInfo(res))).subscribe((res: any) => {
        this.debounceFilterValue = res.users
      })
  }

  ofOperator() {
    of(1, 2, 3, 'string').subscribe((res: any) => {
      this.ofOutput.push(res)
    })
  }
  fromOperator() {
    from([1, 2, 3, 'string']).subscribe((res: any) => {
      this.fromOutput.push(res)
    })
  }
  rangeOperator() {
    range(10).subscribe((res: any) => {
      this.rangeOutput.push(res)
    })
  }
  intervalOperator() {
    interval(1000).subscribe((res: any) => {
      this.intervalOutput.push(res)
    })
  }

  mapOperator() {
    this.mappedArray = this.defaultArray.map(res => res * 2);
  }

  filterOperator(search: any) {

    this.filterArray = this.defaultArray.filter(res => res === Number(search));
    console.log(this.filterArray)
  }
  findOperator(search: any) {
    this.findInfo = this.defaultArray.find(res => res === Number(search));
  }
  reduceOperator() {
    this.reduceValue = this.defaultArray.reduce((value, previousValue) => value + previousValue);
  }
  contactOperator() {
    this.contactValue = this.defaultArray.concat(this.defaultArray);
  }




}
