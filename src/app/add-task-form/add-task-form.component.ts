import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService, Task } from '../todo.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css'],
})
export class AddTaskFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {}

  addTaskForm = this.formBuilder.group({
    task: '',
  });

  ngOnInit(): void {}

  addTask() {
    const newTask = { ...this.addTaskForm.value, isDone: false };
    this.todoService.addTask(newTask);
    this.addTaskForm.reset();
  }
}
