import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

declare var require: any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {

  /**
  * Método constructor
  * @method Constructor
  */
  constructor(private fb: FormBuilder, private router: Router) {
  }

  /**
    * Método que se ejecuta al iniciar la vista. realiza la carga inicial de datos
    * @method ngOnInit
  */
  ngOnInit() {
  }


}
