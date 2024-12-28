import { Routes } from '@angular/router';
import { EncapsulationComponent } from '../encapsulation/encapsulation.component';
import { SubjectsComponent } from '../subjects/subjects.component';
import { RxjsComponent } from '../rxjs/rxjs.component';
import { ObservablePromiseComponent } from '../observable-promise/observable-promise.component';
import { DomComponent } from '../dom/dom.component';

export const routes: Routes = [
    {path:'encapsulation', component:EncapsulationComponent},
    {path:'subjects', component:SubjectsComponent},
    {path:'rxjs', component:RxjsComponent},
    {path:'observalPromise', component:ObservablePromiseComponent},
    {path:'dom', component:DomComponent},
];
