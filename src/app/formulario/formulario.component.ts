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
     * @property {String} error - Mensaje de error que devuelve UserService al realizar la petición
     */
    error: String;
    /**
     * @property {FormGroup} form - Referencia al formulario del componente
     */
    form: FormGroup;
    /**
     * @property {string[]} sex - Lista de generos aceptados
     */
    sex: String[];
    /**
     * @property {boolean} lactactia_disabled - indicador de switch de lactancia deshabilitado
     */
    lactactia_disabled: boolean;

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
        this.sex = ["Masculino", "Femenino"]
        this.form = new FormGroup({
            'nombre': new FormControl(null, [
                Validators.required
            ]),
            'apellido': new FormControl(null, [
                Validators.required
            ]),
            'sexo': new FormControl(null, [
                Validators.required
            ]),
            'lactancia': new FormControl(null, [
                Validators.required
            ]),
            'nacimiento': new FormControl(null, [
                Validators.required
            ]),
            'telefono': new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[+]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*\$/)
            ]),
        });
    }

  onSubmitted() {
  }
}
