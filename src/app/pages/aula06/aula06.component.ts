import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aula06',
  imports: [
    RouterLink // import necessário para o uso do RouterLink
  ],
  templateUrl: './aula06.component.html',
  styleUrl: './aula06.component.css'
})
export class Aula06Component {
  itens: string[] = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
}
