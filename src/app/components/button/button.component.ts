import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  //Forma 1
  @Input() text:string = "Seu texto aqui";
  @Input({required: true}) color:string = "";
  //Forma 2
  // @Input("titulo") text:string = "";
  //Forma 3
  // @Input({required: true, alias: "titulo"}) text:string = "";

  //Forma 1
  @Output() clicou = new EventEmitter<string>();
  //Forma 2
  // @Output("clicou") clicou = new EventEmitter<void>();
}
