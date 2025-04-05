import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {TodoContainerComponent} from './components/todo-container/todo-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TodoContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
