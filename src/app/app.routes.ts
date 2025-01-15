import { Routes } from '@angular/router';
import { EncapsulationComponent } from '../encapsulation/encapsulation.component';
import { SubjectsComponent } from '../subjects/subjects.component';
import { RxjsComponent } from '../rxjs/rxjs.component';
import { ObservablePromiseComponent } from '../observable-promise/observable-promise.component';
import { DomComponent } from '../dom/dom.component';
import { GuardsComponent } from '../guards/guards.component';
import { canActivateGuard } from '../guards/guards-types/can-active/can-activate.guard';
import { GuardChildComponent } from '../guards/guard-child/guard-child.component';
import { GuardChild1Component } from '../guards/guard-child1/guard-child1.component';
import { canActivateChildGuard } from '../guards/guards-types/can-active-child/can-activate-child.guard';
import { canDeactivateGuard } from '../guards/guards-types/can-deactive/can-deactivate.guard';
import { Component } from '@angular/core';
import { SignalsComponent } from '../signals/signals.component';
import { JavaScriptComponent } from '../java-script/java-script.component';
import { LifeCycleHooksComponent } from '../life-cycle-hooks/life-cycle-hooks.component';
import { CreateComponent } from '../create/create.component';
import { HtmlComponent } from '../html/html.component';
import { JsExampleComponent } from '../js-example/js-example.component';

export const routes: Routes = [
    {path:'', redirectTo:'angular', pathMatch:"full"},
    {path:'encapsulation', component:EncapsulationComponent},
    {path:'subjects', component:SubjectsComponent},
    {path:'rxjs', component:RxjsComponent},
    {path:'observalPromise', component:ObservablePromiseComponent},
    {path:'angular', component:DomComponent},
    {path:'guards', component:GuardsComponent, canActivate:[canActivateGuard], canActivateChild:[canActivateChildGuard] ,children:[
        {path:'guards-child', component:GuardChildComponent, canDeactivate:[canDeactivateGuard]},
        {path:'guards-child-1', component:GuardChild1Component},
    ]},
    {path:"signal", component:SignalsComponent},
    {path:"java-script", component:JavaScriptComponent},
    {path:"life-cycle", component:LifeCycleHooksComponent},
    {path:'create', component:CreateComponent},
    {path:'HTML', component:HtmlComponent},
    {path:'jsexample', component:JsExampleComponent},
];
