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

}
