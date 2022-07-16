import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonasService } from '../services/personas.service';
import { switchMap} from 'rxjs/operators';
import { PersonaLite } from '../interfaces/personalite.interface';

@Component({
  selector: 'app-view-persona',
  templateUrl: './view-persona.component.html',
  styles: [
  ]
})
export class ViewPersonaComponent implements OnInit {
  persona: PersonaLite = {};
  constructor( private activatedRoutes: ActivatedRoute,
               private persServices: PersonasService) {

  }

  ngOnInit(): void {
    this.activatedRoutes.params
      .pipe(
        switchMap(
          ({idPers}) => this.persServices.buscarPersById(idPers))
        )
        .subscribe(resp => {
          this.persona = resp;
        });
  }

}
