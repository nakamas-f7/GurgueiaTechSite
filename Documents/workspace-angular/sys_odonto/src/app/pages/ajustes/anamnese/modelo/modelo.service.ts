import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  constructor() { }

  perguntas: any[] = [
    {texto: 'Primeira pergunta', tipo: 1},
    {texto: 'Segunda pergunta', tipo: 2},
    {texto: 'Terceira pergunta', tipo: 1},
  ]
  
}
