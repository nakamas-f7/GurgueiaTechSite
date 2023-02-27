import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AnamneseComponent } from '../anamnese/anamnese.component';
import { CategoriasComponent } from '../categorias/categorias.component';
import { ClinicaComponent } from '../clinica/clinica.component';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';



export interface Dados {
  label: string;
  content: string;
  link: string;
  pagina: any
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {  

  public links = [
    { label: 'Clínica', content: '<app-clinica></app-clinica>', link: 'clinica', pagina: ClinicaComponent },
    { label: 'Anamnese', content: '<app-anamnese></app-anamnese>', link: 'anamnese', pagina: AnamneseComponent },
    { label: 'Categorias', content: '<app-categorias></app-categorias>', link: 'categorias', pagina: CategoriasComponent }
  ];

  asyncTabs: Observable<Dados[]>;
  ativo = this.links[0];

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<Dados[]>) => {
      setTimeout(() => {
        observer.next(
          this.links
        );
      }, 500);
    });
  }

}
