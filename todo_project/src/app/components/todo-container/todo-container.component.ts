import {Component, signal, WritableSignal} from '@angular/core';
import {Todo} from '../../model/todo-type';
import {FormsModule} from '@angular/forms';
import {TodoItemComponent} from '../todo-item/todo-item.component';
import {isLocalCompilationDiagnostics} from '@angular/compiler-cli';

@Component({
  selector: 'app-todo-container',
  imports: [
    FormsModule,
    TodoItemComponent
  ],
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.scss'
})
export class TodoContainerComponent {
  todoList = signal<Array<Todo>>([]);
  currentId: number = 0;


  addNewTask(element: HTMLInputElement | null): void {
    if (element instanceof HTMLInputElement) {
      const value: string = element.value;


      if (value) {
        const newTodoItem: Todo = {title: value, id: this.currentId, isCompleted: false};
        this.todoList.set([...this.todoList(), newTodoItem]);
        this.currentId++;
      }

      element.value = '';
      element.focus();
    }

  }

  deleteTodo(todoItem: Todo): void {
    this.todoList.set(
      this.todoList().filter(todo => todo.id !== todoItem.id)

    );
  }

  tickTodo(todoItem: Todo): void {
    this.todoList.set(
      this.todoList().map((todo) => {
        return todo.id === todoItem.id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : { ...todo };
      })
    )

  }

}
