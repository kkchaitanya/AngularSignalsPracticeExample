import { Component, effect, signal } from '@angular/core';
import { single } from 'rxjs';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Component({
  imports: [],
  selector: 'app-signal-effects-example',
  styleUrl: './signal-effects-example.css',
  templateUrl: './signal-effects-example.html',
})
export class SignalEffectsExample {
  tasks = signal<Task[]>(JSON.parse(localStorage.getItem('my_tasks') || '[]'));
  anotherSignal = signal<string[]>(JSON.parse(localStorage.getItem('my_str') || '[]'));
  constructor(){
    effect(()=>{
      const currentTasks = this.tasks();
      localStorage.setItem('my_tasks', JSON.stringify(currentTasks));
      console.log('Saved to localStorage:', currentTasks.length, 'tasks');
    })

    effect(()=>{
      const currentTasks = this.anotherSignal();
      localStorage.setItem('my_str', JSON.stringify(currentTasks));
      console.log('Saved to localStorage:', currentTasks.length, 'str');
    })
  }
 toggleTask(id: number) {
    this.tasks.update(list => list.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }
  addTask(taskValue: string) {
    if(taskValue)
    this.tasks.update(list => [...list, { id: Date.now(), title: taskValue, done: false }]);
  }
  addStr(strInput:string){
    if(strInput)
     this.anotherSignal.update(list => [...list ,strInput]);
  }
}
