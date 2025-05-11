import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-aula07',
  imports: [FormsModule],
  templateUrl: './aula07.component.html',
  styleUrl: './aula07.component.css',
})
export class Aula07Component {
  user: any = {};
  cadastro: any = {};

  constructor(private router: Router) {}

  //Metodo usado ao enviar um formulario
  // O evento submit do formulario chama esse metodo
  onSubmit(forms: any) {
    if (forms.value.senha === forms.value.confirm) {
      this.cadastro = {
        codigo: forms.value.codigo,
        senha: forms.value.senha,
      };
      localStorage.setItem('cadastro', JSON.stringify(this.cadastro));
    }
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
