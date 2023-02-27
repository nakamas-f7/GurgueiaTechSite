import { Component, OnInit } from '@angular/core';
import { ModeloService } from './modelo.service';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.scss']
})
export class ModeloComponent implements OnInit {

  constructor(
    private service: ModeloService
  ){}

  ngOnInit(): void {
    // console.log(this.perguntas)
  }

  perguntas: any = this.service.perguntas;

}
