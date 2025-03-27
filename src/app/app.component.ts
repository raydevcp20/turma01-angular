import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aulas de exercicios - Turma 01';
  activeRoute: string = '';

  constructor(private location: Location) {
    this.activeRoute = this.location.path();
    // console.log(this.location.path()); // retorna a rota atual
  }
}
