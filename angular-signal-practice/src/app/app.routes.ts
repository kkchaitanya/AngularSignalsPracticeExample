import { Routes } from '@angular/router';
import { TaskPractice } from './task-practice/task-practice';
import { App } from './app';
import { SignalComputedExample } from './signal-computed-example/signal-computed-example';
import { SignalEffectsExample } from './signal-effects-example/signal-effects-example';
import { SignalParentChildExample } from './signal-parent-child-example/signal-parent-child-example';
import { SignalHttpExample } from './signal-http-example/signal-http-example';

export const routes: Routes = [
  { path: '', component: App },
  { path: 'app-task-practice', component: TaskPractice }, 
  { path:'app-signal-computed-example',component:SignalComputedExample},
  { path:'app-signal-effects-example',component:SignalEffectsExample},
  { path:'app-signal-parent-child-example',component:SignalParentChildExample},
  { path:'app-signal-http-example',component:SignalHttpExample},
  { path: '**', redirectTo: '' } 
];
