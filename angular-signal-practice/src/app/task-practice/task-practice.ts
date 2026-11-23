import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-task-practice',
  styleUrl: './task-practice.css',
  templateUrl: './task-practice.html',
})
export class TaskPractice {
  completedCount = signal(0);

  increment() {
    this.completedCount.update(current => current + 1);
  }

  reset() {
    this.completedCount.set(0);
  }
}
