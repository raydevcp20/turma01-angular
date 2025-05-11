import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastro: any = {};
  
  onSubmit(forms: any){
    if(forms.value.senha === forms.value.confirm){
      this.cadastro = {
        codigo: forms.value.codigo,
        senha:  forms.value.senha
      }
      localStorage.setItem("cadastro", JSON.stringify(this.cadastro));
    }
  }
}
