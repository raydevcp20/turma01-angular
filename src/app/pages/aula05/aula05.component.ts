import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-aula05',
  imports: [
    ButtonComponent, 
    InputComponent,
  ],
  templateUrl: './aula05.component.html',
  styleUrl: './aula05.component.css'
})
export class Aula05Component {
  text: string = "Texto do botão";

  ngOnInit(){
    //Descomente para ver o exemplo visto em aula na prática sobre effect
    // setTimeout(() => {
    //   this.text = "Texto alterado";
    // }, 5000);
  }

  aoClicar(event: any){
    console.log("Evento de clique no botão:", event);
  }

  aoDigitar(event: any){
    console.log("Evento de digito no input:", event);
  }
}
