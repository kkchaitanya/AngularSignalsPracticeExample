import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskPractice } from './task-practice';

describe('TaskPractice', () => {
  let component: TaskPractice;
  let fixture: ComponentFixture<TaskPractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskPractice],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskPractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
