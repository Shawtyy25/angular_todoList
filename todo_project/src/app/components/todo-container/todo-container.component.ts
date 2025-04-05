import { Component } from '@angular/core';
import {Todo} from '../../model/todo-type';

@Component({
  selector: 'app-todo-container',
  imports: [],
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.scss'
})
export class TodoContainerComponent {
  newTask: string = '';
  todoList: Todo[] = [];
  currentId: number = 0;

  addNewTask(element: HTMLInputElement | null): void {
    if (element instanceof HTMLInputElement) {
      const value: string = element.value;

      if (value) {
        this.newTask = value;
        this.todoList.push({title: value, id: this.currentId});
        this.newTask = '';
        this.currentId++;
        console.log(this.todoList);
      }

      element.value = '';
      element.focus();
    }

  }
}
