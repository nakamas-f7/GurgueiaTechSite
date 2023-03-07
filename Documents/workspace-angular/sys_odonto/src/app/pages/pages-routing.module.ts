import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroComponent } from './paciente/cadastro/cadastro.component';
import { PacienteComponent } from './paciente/paciente.component';


const routes: Routes = [
    // { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
    // { path: 'dashboard', component: DashboardComponent },
    { path: 'pacientes', component: PacienteComponent },
    { path: 'pacientes/cadastro', component: CadastroComponent },
    { path: 'agenda', component: AgendaComponent },
    {
        path: 'ajustes',
        loadChildren: () => import('./ajustes/ajustes.module')
            .then(p => p.AjustesModule), pathMatch: 'prefix'
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
