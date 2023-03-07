import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


import { AnamneseComponent } from './anamnese/anamnese.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ClinicaComponent } from './clinica/clinica.component';
import { AjustesComponent } from './ajustes.component';
import { TabsComponent } from './tabs/tabs.component';


import { AjustesRoutingModule } from './ajustes-routing.module';
import { PagesRoutingModule } from '../pages-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModeloComponent } from './anamnese/modelo/modelo.component';
import { NovaperguntaComponent } from './anamnese/modelo/novapergunta/novapergunta.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AnamneseComponent,
    CategoriasComponent,
    ClinicaComponent,
    AjustesComponent,
    TabsComponent,
    ModeloComponent,
    NovaperguntaComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    AjustesRoutingModule,
    PagesRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    NgbModalModule,
    MatInputModule,
    MatListModule,
    DragDropModule,
    MatTableModule,
    MatSlideToggleModule,
    MatMenuModule
  ],
  exports: [
    AnamneseComponent,
    CategoriasComponent,
    ClinicaComponent,
    AjustesComponent,
    TabsComponent,
    ModeloComponent,
    NovaperguntaComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'auto' } }
  ]
})
export class AjustesModule { }
