import { NgStyle } from '@angular/common';
import { Component, effect, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  // Declaração Input Signals - Forma mais antiga
  // @Input() text:string = "Seu texto aqui";
  // @Input({required: true}) color:string = "";
  
  // @Input("titulo") text:string = ""; //Forma 2
  // @Input({required: true, alias: "titulo"}) text:string = ""; //Forma 3

  // Declaração Output Signals - Forma mais antiga
  // @Output() clicou = new EventEmitter<string>();
  // @Output("clicou") clicou = new EventEmitter<void>(); //Forma 2


  // Declaração Input Signals - Forma mais atual e mais recomendada
  text = input("Seu texto aqui");
  // text = input("Seu texto aqui", {alias: "titulo"}); // Forma 2
  color = input.required<string>();

  // Declaração Output Signals - Forma mais atual e mais recomendada
  clicou = output<string>();
  // clicou = output<string>({alias: "onClick"}); // Forma 2

  constructor(){
    // Descomente para ver o exemplo visto em aula na prática sobre effect
    // effect(()=>{
    //   O effect é chamado toda vez que o valor de qualquer inputSignal for alterado
    //   console.log("Texto do botão:", this.text);
    // })
  }
}
