import { Injectable } from '@angular/core';

export interface Task {
  name: string;
  isDone: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks: Task[] = [];

  constructor() {}

  addTask(task: Task) {
    this.tasks.push(task);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  markAsDone(index: number) {
    const doneTaskIndex = this.tasks.findIndex((t, i) => index === i);
    if (doneTaskIndex > -1) {
      const curStatus = this.tasks[doneTaskIndex].isDone;
      this.tasks[doneTaskIndex].isDone = !curStatus;
    }
  }
}
