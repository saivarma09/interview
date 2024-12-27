import { Routes } from '@angular/router';
import { EncapsulationComponent } from '../encapsulation/encapsulation.component';
import { SubjectsComponent } from '../subjects/subjects.component';

export const routes: Routes = [
    {path:'encapsulation', component:EncapsulationComponent},
    {path:'subjects', component:SubjectsComponent},
];
