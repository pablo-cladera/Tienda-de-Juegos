import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonasService } from 'src/app/personas/services/personas.service';
import { switchMap} from 'rxjs/operators';
import { PersonaLite } from 'src/app/personas/interfaces/personalite.interface';

@Component({
  selector: 'app-view-cliente',
  templateUrl: './view-cliente.component.html',
  styles: [
  ]
})
export class ViewClienteComponent implements OnInit {
  persona: PersonaLite = {
    ciudad: '',
    tipoPersona: '',
    id: 0
  };
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
