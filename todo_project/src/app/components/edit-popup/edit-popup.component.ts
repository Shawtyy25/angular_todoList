import {Component, input, output} from '@angular/core';
import {Todo} from '../../model/todo-type';

@Component({
  selector: 'app-edit-popup',
  imports: [],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss'
})
export class EditPopupComponent {
  todo = input.required<Todo>();
  closePopupSignal = output();
  editedData = output<Todo>();

  closePopup(): void {
    this.closePopupSignal.emit();
  }

  saveEdits(changedTitle: string, changedDesc: string): void {
    const updatedTodo: Todo = {
      ...this.todo(),
      title: changedTitle,
      description: changedDesc,
      modalState: false,
    }

    this.editedData.emit(updatedTodo);
  }


}
