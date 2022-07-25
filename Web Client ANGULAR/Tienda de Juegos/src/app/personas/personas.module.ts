import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultPersonasComponent } from './result-personas/result-personas.component';
import { SearchPersonasComponent } from './search-personas/search-personas.component';
import { MainPersonasComponent } from './main-personas/main-personas.component';
import { CreatePersonaComponent } from './create-persona/create-persona.component';
import { PersonasService } from './services/personas.service';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';
import { EditPersonaComponent } from './edit-persona/edit-persona.component';


@NgModule({
  declarations: [
    ResultPersonasComponent, 
    SearchPersonasComponent, 
    MainPersonasComponent, 
    CreatePersonaComponent,
    EditPersonaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
     MainPersonasComponent,
     CreatePersonaComponent,
     EditPersonaComponent
  ],
  providers: [
    PersonasService
  ]
})
export class PersonasModule { }