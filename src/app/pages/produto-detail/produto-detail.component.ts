import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detail',
  imports: [],
  templateUrl: './produto-detail.component.html',
  styleUrl: './produto-detail.component.css'
})
export class ProdutoDetailComponent {
  id: string;

  constructor(activatedRoute: ActivatedRoute) {
    // A classe activatedRoute serve para pegar os parametros da rota
    this.id = activatedRoute.snapshot.params['id']; // pega o id da rota pelo parametro
  }
}
