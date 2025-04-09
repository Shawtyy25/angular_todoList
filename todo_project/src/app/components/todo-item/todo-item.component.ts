import {Component, input, output} from '@angular/core';
import {Todo} from '../../model/todo-type';
import {tick} from '@angular/core/testing';
import {HighlightCompletedDirective} from '../../directives/highlight-completed.directive';
import {EditPopupComponent} from "../edit-popup/edit-popup.component";

@Component({
  selector: 'app-todo-item',
    imports: [
        HighlightCompletedDirective,
        EditPopupComponent

    ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todo_toggled = output<Todo>();
  todo_deleted = output<Todo>();
  todo_edited = output<Todo>();

  tickItem(): void {
    this.todo_toggled.emit(this.todo());
  }

  deleteItem(): void {
    this.todo_deleted.emit(this.todo());
  }

  editTodo(): void {
    this.todo().modalState = true;
  }
  closeTodoEditor(): void {
    this.todo().modalState = false;
  }

  updateTodo(updatedTodo: Todo): void {
    this.todo_edited.emit(updatedTodo);
  }



}
