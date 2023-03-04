import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionCallComponent } from './function-call/function-call.component';
import { EventCallComponent } from './event-call/event-call.component';
import { InputTextComponent } from './input-text/input-text.component';
import { CounterComponent } from './counter/counter.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ElseIfComponent } from './else-if/else-if.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { NestedForLoopComponent } from './nested-for-loop/nested-for-loop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { ChildComponent } from './child/child.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AaaaaComponent } from './aaaaa/aaaaa.component';
import { BasicRoutingComponent } from './basic-routing/basic-routing.component';


@NgModule({
  declarations: [
    AppComponent,
    FunctionCallComponent,
    EventCallComponent,
    InputTextComponent,
    CounterComponent,
    PropertyBindingComponent,
    ElseIfComponent,
    SwitchCaseComponent,
    ForLoopComponent,
    NestedForLoopComponent,
    StyleBindingComponent,
    BasicFormComponent,
    TodoListComponent,
    TwoWayBindingComponent,
    PipesComponent,
    ChildComponent,
    TempleteDrivenFormComponent,
    ReactiveFormComponent,
    AaaaaComponent,
    BasicRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
