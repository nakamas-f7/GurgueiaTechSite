import { AfterViewInit, Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Paciente } from './paciente.interface';
import { PacienteService } from './paciente.service';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = $localize`Primeira`;
  itemsPerPageLabel = $localize`Itens por página:`;
  lastPageLabel = $localize`Última`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Próxima';
  previousPageLabel = 'Anterior';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Página 1 de 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Página ${page + 1} de ${amountPages}`;
  }
}

export interface PacienteTeste {
  id: number,
  nome: string,
  telefone: string,
  email: string
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
})
export class PacienteComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private service: PacienteService,
    // private pipe: FilterPipe
  ) { }

  // busca = 'X';
  pacientes: Paciente[] = []
  // paciente!: Paciente;
  term: any;

  displayedColumns: string[] = ['id', 'nome', 'telefone', 'email'];
  dataSource = new MatTableDataSource(this.service.listaPacientes);

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit() {
    // this.service.gerarPacientes(4);
    // this.service.listaPacientes.subs
    this.pacientes = this.service.listaPacientes;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  public buscaPaciente(value: string) {
    const filter = this.pacientes.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.service.listaPacientes = filter;
    this.dataSource.data = filter;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // console.log(this.dataSource.filter)
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //   public buscar(value: Event){
  //     const filter = this.pacientes.filter((res: any) => {
  //       return !res.name.indexOf(value.toLowerCase());
  //     });    
  //     console.log(filter);
  //     this.service.listaPacientes = filter;
  //     this.dataSource.data = filter;
  //   }

  abrirCadastro() {
    const dialogRef = this.dialog.open(CadastroComponent, {
      width: '880px',
      // data: {nome: 'Fulano', idade: 22} //para editar
    });

    dialogRef.afterClosed().subscribe(
      (result) => {
        // this.paciente = new Paciente();
        // this.paciente = result;
        if (result) {
          console.log(result)
          this.service.listaPacientes.push(
            result
          )
        }

        this.dataSource.data = this.service.listaPacientes;

      });
  }




}
