import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { AnamneseService } from '../anamnese.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.scss']
})
export class ModeloComponent implements OnInit {

  constructor(
    private service: AnamneseService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // console.log(this.perguntas)
  }
  matcher = new MyErrorStateMatcher();
  perguntas: any[] = this.service.perguntas;
  dataSource = new MatTableDataSource(this.perguntas);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  formCadastroModelo = this.fb.group({
    id: [''],
    nome: ['', Validators.required],
    perguntas: ['']
  });


  onSubmit(){
    
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.perguntas, event.previousIndex, event.currentIndex);
  }


}