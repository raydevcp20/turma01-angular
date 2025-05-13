import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { PublicApiService } from '../../services/public-api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-aula09',
  imports: [],
  templateUrl: './aula09.component.html',
  styleUrl: './aula09.component.css',
})
export class Aula09Component {
  newPacient: any = {
      "nome": "Alice Maria Barbosa",
      "idade": 24,
      "telefone": "(81) 93423-5432",
      "endereco": "Avenida Central, 6600, Recife - PE",
      "condicao": "Gripe",
      "status": "alta"
    };

  constructor(
    private userService: UserService,
    private publicApiService: PublicApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.publicApiService.getPokemon()
    .pipe(map((response: any) => {
      console.log("map", response);
      return response.results;
    }))
    .subscribe({
      next: (response)=>{
        console.log("next", response);
      },
      error: (response)=>{
        console.error(response);
      }
    })
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  createPacient(){
    this.userService.createUser(this.newPacient).subscribe({
      next: (response) => {
        console.log("Paciente criado com sucesso!", response);
      },
      error: (error) => {
        console.error("Erro ao criar paciente", error);
      }
    });

  }
}
