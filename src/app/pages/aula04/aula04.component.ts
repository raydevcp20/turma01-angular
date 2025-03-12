import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { FormatCEPPipe } from '../../pipes/format-cep.pipe';

@Component({
  selector: 'app-aula04',
  imports: [
    DatePipe,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    JsonPipe,
    SlicePipe,
    FormatCEPPipe,
  ],
  templateUrl: './aula04.component.html',
  styleUrl: './aula04.component.css'
})
export class Aula04Component {
  date: any = new Date();
  text: string = 'Exemplo de texto';
  number: number = 1290.5;
  obj: any = { nome: 'Fulano', idade: 30, endereco: { rua: 'Rua 1', numero: 10 } };

}
