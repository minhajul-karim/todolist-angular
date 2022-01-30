import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AddTaskFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
