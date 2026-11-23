import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

interface Todo { id: number; title: string; completed: boolean; }
@Component({
  imports: [],
  selector: 'app-signal-http-example',
  styleUrl: './signal-http-example.css',
  templateUrl: './signal-http-example.html',
})
export class SignalHttpExample {
  private http = inject(HttpClient);
 todos = toSignal(
    this.http.get<Todo[]>('https://typicode.com'),
    { initialValue: [] }
  );
}
