import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnamneseService } from './anamnese.service';
import { ModeloComponent } from './modelo/modelo.component';

@Component({
  selector: 'app-anamnese',
  templateUrl: './anamnese.component.html',
  styleUrls: ['./anamnese.component.scss']
})
export class AnamneseComponent implements OnInit {

  constructor(
    private service: AnamneseService,
    public dialog: MatDialog
  ) { }

  public modelos: any[] = [];

  ngOnInit() {
    this.modelos = this.service.modelosAnamnese;
  }

  novoModelo() {
    const dialogRef = this.dialog.open(ModeloComponent, {
      width: '1000px',
      // data: {nome: 'Fulano', idade: 22} //para editar
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        // this.paciente = new Paciente();
        // this.paciente = result;
        if (result) {
          console.log(result)
          this.service.modelosAnamnese.push(
            result
          )
        }

        // this.dataSource.data = this.service.listaPacientes;

      });
  }

  delete(x: number){
    this.modelos.splice(x,1);
  }
}
