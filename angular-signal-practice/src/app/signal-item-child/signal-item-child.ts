import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signal-item-child',
  styleUrl: './signal-item-child.css',
  templateUrl: './signal-item-child.html',
})
export class SignalItemChild {
  title = input.required<string>();
  done = input<boolean>(false);
   toggled = output<void>();
}
