import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-aula02',
  imports: [CommonModule],
  templateUrl: './aula02.component.html',
  styleUrl: './aula02.component.css'
})
export class Aula02Component {
  clicou: boolean = true;
  tipo: string = "error";


  itens: string[] = [
    "Pão",
    "Cebola",
    "Arroz",
    "Detergente",
    "Biscoito",
    "Biscoito 2"
  ]


  choseAlert: any = "129";
}
