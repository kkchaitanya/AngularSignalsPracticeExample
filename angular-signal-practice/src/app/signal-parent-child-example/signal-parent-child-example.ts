import { Component, signal } from '@angular/core';
import { SignalItemChild } from '../signal-item-child/signal-item-child';

@Component({
  imports: [SignalItemChild],
  selector: 'app-signal-parent-child-example',
  styleUrl: './signal-parent-child-example.css',
  templateUrl: './signal-parent-child-example.html',
})
export class SignalParentChildExample {
  tasks = signal<any[]>([{ id: 1, title: "Learn Signals", done: true },
  { id: 2, title: "Practice computed", done: true },])
  addTask(taskValue: string) {
    if (taskValue)
      this.tasks.update(list => [...list, { id: Date.now(), title: taskValue, done: false }]);
  }

  toggleTask(taskid: any) {
    console.log("task_id", taskid);
  }
}
