import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root', // Torna o pipe injetável
})
@Pipe({
  name: 'formatCEP' // nome do pipe
})
export class FormatCEPPipe implements PipeTransform {
  transform(value: string): string {
    // velue é o valor que será passado para o pipe
    let firstFormat = value.slice(0, 6);
    let secondFormat = value.slice(6, 9);
    return firstFormat + "-" + secondFormat;
    // o retorno é o valor que será exibido na tela
  }
}
