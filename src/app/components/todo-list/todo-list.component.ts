import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  userPermission: string = 'normal';
  screenType: string = "edit";
  items: any[] = [
    {
      nome: "Varrer a casa",
      check: true
    },
    {
      nome: "Passar roupa",
      check: false
    },
    {
      nome: "Jogar LOL",
      check: false
    },
    {
      nome: "Ir pra academia",
      check: false
    },
  ]
}
