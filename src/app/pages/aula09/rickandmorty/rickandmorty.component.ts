import { Component } from '@angular/core';
import { PublicApiService } from '../../../services/public-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rickandmorty',
  imports: [FormsModule],
  templateUrl: './rickandmorty.component.html',
  styleUrl: './rickandmorty.component.css'
})
export class RickandmortyComponent {
  character: any = {};
  id: number = 0;

  constructor(private publicApiService: PublicApiService) { }

  ngOnInit(){}
  
  searchCharacter(){
    this.publicApiService.getRickAndMortyCharacter(this.id)
    .subscribe({
      next: (response) => {
        console.log("next", response);
        this.character = response;
      },
      error: (response) => {
        console.error(response);
      }
    })
  }
}
