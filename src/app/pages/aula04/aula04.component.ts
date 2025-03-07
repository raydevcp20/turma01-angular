import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-aula04',
  imports: [ButtonComponent, InputComponent],
  templateUrl: './aula04.component.html',
  styleUrl: './aula04.component.css'
})
export class Aula04Component {
  text: string = "Texto do botão";

  aoClicar(event: any){
    console.log("Evento de clique no botão:", event);
  }

  aoDigitar(event: any){
    console.log("Evento de digito no input:", event);
  }
}
