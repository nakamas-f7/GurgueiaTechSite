import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { PerguntaInterface } from 'src/app/util/pergunta.interface';
import { AnamneseService } from '../anamnese/anamnese.service';

export interface px {
  pergunta: PerguntaInterface,
  ativa: boolean
}

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.scss']
})
export class ClinicaComponent {

  constructor(private serv: AnamneseService) { }

  perguntas = this.serv.perguntas;

  modelos = this.serv.modelosAnamnese;

  colunas: string[] = ['mover', 'pergunta', 'config', 'menu']

  marcados: PerguntaInterface[] = []

  x = false;
  marcado(p: PerguntaInterface): void {
    // if(this.marcados.includes(p))

    if (!this.x && !this.marcados.includes(p))
      this.marcados.push(p);
    else if(this.marcados.includes(p))
      this.marcados.slice();
    this.x = !this.x;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.perguntas, event.previousIndex, event.currentIndex);
  }

}
