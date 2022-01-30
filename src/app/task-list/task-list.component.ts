import { Component, OnInit } from '@angular/core';
import {TodoService, Task} from '../todo.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {

  constructor(private todoService: TodoService) {}

  tasks: Task[] = this.todoService.getTasks();

  ngOnInit(): void {}
}
