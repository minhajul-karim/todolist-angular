import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css'],
})
export class AddTaskFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  addTaskForm = this.formBuilder.group({
    task: ''
  })

  ngOnInit(): void {}
}
