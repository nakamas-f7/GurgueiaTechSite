import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjustesComponent } from './ajustes.component';
import { AnamneseComponent } from './anamnese/anamnese.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ClinicaComponent } from './clinica/clinica.component';


const routes: Routes = [
    { path: '', component: AjustesComponent},
    { path: 'ajustes', component: AjustesComponent},
    { path: 'anamnese', component: AnamneseComponent },
    { path: 'clinica', component: ClinicaComponent },
    { path: 'categorias', component: CategoriasComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AjustesRoutingModule { }
