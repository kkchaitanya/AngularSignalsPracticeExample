import { Component, computed, signal } from '@angular/core';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Component({
  imports: [],
  selector: 'app-signal-computed-example',
  styleUrl: './signal-computed-example.css',
  templateUrl: './signal-computed-example.html',
})
export class SignalComputedExample {
  tasks = signal<Task[]>([{ id: 1, title: "Learn Signals", done: true },
  { id: 2, title: "Practice computed", done: true },])

  totalCount = computed(()=>this.tasks().length);
  completedCount = computed(()=>this.tasks().filter(x=>x.done==true).length);
  toggleTask(id: number) {
    this.tasks.update(list => list.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }
  addTask(taskValue: string) {
    if(taskValue)
    this.tasks.update(list => [...list, { id: Date.now(), title: taskValue, done: false }]);
  }

}
