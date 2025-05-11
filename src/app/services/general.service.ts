import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  formatCPF(cpf: string): string {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
    // Formata o CPF com pontos e traço
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
  }

  formatCNPJ(cnpj: string): string {
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, '');
    // Formata o CNPJ com pontos e barra
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d)/, '$1.$2.$3/$4-$5');
  }

  formatCEP(cep: string): string {
    // Remove caracteres não numéricos
    cep = cep.replace(/\D/g, '');
    // Formata o CEP com traço
    return cep.replace(/(\d{5})(\d)/, '$1-$2');
  }
}
