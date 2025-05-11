import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgStyle],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: any = {};

  constructor(private router: Router){}

  navigateTo(url:string){
    this.router.navigateByUrl(url);
    // this.router.navigate(["aula07","cadastro","user"]);
  }

  onSubmit(form: any){
    this.login = form.value;
    console.log(this.login);
    alert(`email: ${this.login.email}. Senha: ${this.login.senha}`)
    this.navigateTo('/todo-list');
  }
}
