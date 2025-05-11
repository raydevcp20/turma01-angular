import { Component, inject } from '@angular/core';
// import { GeneralService } from '../../services/general.service';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-aula08',
  imports: [NgTemplateOutlet, CadastroComponent, CommonModule, FormsModule],
  templateUrl: './aula08.component.html',
  styleUrl: './aula08.component.css',
})
export class Aula08Component {
  statusPedido: string = 'enviado';
  generalService = inject(GeneralService);

  constructor() {}
}
