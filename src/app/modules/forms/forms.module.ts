import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFormComponent } from './pages/home-form/home-form.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SolicitanteComponent } from './components/solicitante/solicitante.component';



@NgModule({
  declarations: [
    HomeFormComponent,
    SolicitanteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeFormComponent
  ]
})
export class FormsModule { }
