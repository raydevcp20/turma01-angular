import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aulas-exercicios';
  array = null;
  boleano:boolean = false;
  user: any = {
    nome:"",
    login:"",
    email:""
  }
  clicou: boolean = false;
  color: string = "#000000";
  itens: string[] = [
    "Pão",
    "Cebola",
    "Arroz",
    "Detergente",
    "Biscoito",
    "Biscoito 2"
  ]
  choseAlert: string = "12";


  somar(){
    let soma = 1+1;
    return soma
  }

  returnColor(){
    if(this.clicou){
      return "#";
    }else if(!this.clicou){
      return "#"
    }else if(!this.clicou){
      return "#"
    }else if(!this.clicou){
      return "#"
    }else{
      return "!";
    }
  }
}
