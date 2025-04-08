import {Component, input, output} from '@angular/core';
import {Todo} from '../../model/todo-type';
import {tick} from '@angular/core/testing';
import {HighlightCompletedDirective} from '../../directives/highlight-completed.directive';

@Component({
  selector: 'app-todo-item',
  imports: [
    HighlightCompletedDirective

  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<Todo>();
  todo_toggled = output<Todo>();
  todo_deleted = output<Todo>();

  tickItem(): void {
    this.todo_toggled.emit(this.todo());
  }

  deleteItem(): void {
    this.todo_deleted.emit(this.todo());
  }

  protected readonly tick = tick;
}
