import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjustesModule } from './ajustes/ajustes.module';
import { PagesRoutingModule } from './pages-routing.module';
import { AjustesRoutingModule } from './ajustes/ajustes-routing.module';

import * as toolbar from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { PacienteComponent } from './paciente/paciente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AgendaComponent } from './agenda/agenda.component';
import { VendasComponent } from './vendas/vendas.component';
import { ComunicacaoComponent } from './comunicacao/comunicacao.component'
import { CadastroComponent } from './paciente/cadastro/cadastro.component';
import { BuscaComponent } from './paciente/busca/busca.component';
import { AnamneseComponent } from './ajustes/anamnese/anamnese.component';
import { ModeloComponent } from './ajustes/anamnese/modelo/modelo.component';
import { NovaperguntaComponent } from './ajustes/anamnese/modelo/novapergunta/novapergunta.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PacienteComponent,
    SidebarComponent,
    AgendaComponent,
    VendasComponent,
    ComunicacaoComponent,
    CadastroComponent,
    BuscaComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AjustesModule,
    PagesRoutingModule,
    AjustesRoutingModule,
    toolbar.MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule
  ],
  exports: [
    DashboardComponent,
    PacienteComponent,
    SidebarComponent,
    AgendaComponent,
    VendasComponent,
    ComunicacaoComponent,
    CadastroComponent,
    BuscaComponent,
    AnamneseComponent,
    ModeloComponent,
    NovaperguntaComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'auto' } }
  ]
})
export class PagesModule { }
