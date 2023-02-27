import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
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
    MatDialogModule
  ],
  exports: [
    AnamneseComponent,
    CategoriasComponent,
    ClinicaComponent,
    AjustesComponent,
    TabsComponent
  ]
})
export class AjustesModule { }
