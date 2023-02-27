import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnamneseService {

  constructor() { }

  modelos: any[] = [
    { titulo: 'Adulto' },
    { titulo: 'Infantil' },
    { titulo: 'Idoso' },
   
  ];

  perguntas: any[] = [
    {texto: 'Primeira pergunta', tipo: 1},
    {texto: 'Segunda pergunta', tipo: 2},
    {texto: 'Terceira pergunta', tipo: 1},
  ]

}
