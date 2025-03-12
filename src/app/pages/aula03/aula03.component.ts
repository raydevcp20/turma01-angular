import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { FormatCEPPipe } from '../../pipes/format-cep.pipe';

@Component({
  selector: 'app-aula03',
  imports: [
    FormsModule,
    TodoListComponent,
  ],
  templateUrl: './aula03.component.html',
  styleUrl: './aula03.component.css',
})
export class Aula03Component {
  password: string = '';
  itens: string[] = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
  buttonType: string = 'success';
}
