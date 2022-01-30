import { Injectable } from '@angular/core';

interface Task {
  name: string;
  isDone: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  tasks: Task[] = [];

  constructor() { }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
