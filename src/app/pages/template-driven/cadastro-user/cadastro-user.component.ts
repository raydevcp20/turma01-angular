import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-user',
  imports: [FormsModule],
  templateUrl: './cadastro-user.component.html',
  styleUrl: './cadastro-user.component.css'
})
export class CadastroUserComponent {
  usuario:any = {};

  constructor(private router: Router){}

  navigateTo(url:string){
    this.router.navigateByUrl(url);
  }

  onSubmit(form: any){
    this.usuario = form.value;
    console.log(this.usuario);
    // this.navigateTo('aula07/login');
  }
}
