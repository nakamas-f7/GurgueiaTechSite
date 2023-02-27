import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string){
    this.emmitSearch.emit(value);
  }
}
