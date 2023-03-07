import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjustesRoutingModule } from './ajustes/ajustes-routing.module';
import { AjustesModule } from './ajustes/ajustes.module';
import { PagesRoutingModule } from './pages-routing.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { FlatpickrModule } from 'angularx-flatpickr';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import * as toolbar from '@angular/material/toolbar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AgendaComponent } from './agenda/agenda.component';
import { AnamneseComponent } from './ajustes/anamnese/anamnese.component';
import { ModeloComponent } from './ajustes/anamnese/modelo/modelo.component';
import { NovaperguntaComponent } from './ajustes/anamnese/modelo/novapergunta/novapergunta.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuscaComponent } from './paciente/busca/busca.component';
import { CadastroComponent } from './paciente/cadastro/cadastro.component';
import { PacienteComponent } from './paciente/paciente.component';
import { SidebarComponent } from './sidebar/sidebar.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    DashboardComponent,
    PacienteComponent,
    SidebarComponent,
    AgendaComponent,
    // VendasComponent,
    // ComunicacaoComponent,
    CadastroComponent,
    BuscaComponent,
    AgendaComponent
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
    MatDialogModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModalModule,
    MatButtonToggleModule, 
    
  ],
  exports: [
    DashboardComponent,
    PacienteComponent,
    SidebarComponent,
    AgendaComponent,
    // VendasComponent,
    // ComunicacaoComponent,
    CadastroComponent,
    BuscaComponent,
    AnamneseComponent,
    ModeloComponent,
    NovaperguntaComponent,
    AgendaComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'auto' } }
  ]
})
export class PagesModule { }
