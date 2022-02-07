import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

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
    sex: any;
    /**
     * @property {boolean} lactancy_disabled - indicador de switch de lactancia deshabilitado
     */
    lactancy_disabled: boolean;
    /**
     * @property {boolean} lactancy_checked - indicador de switch de lactancia activado
     */
    lactancy_checked: boolean;
    /**
     * @property {Date} minDate - cota inferior en fecha de nacimiento
     */
    minDate: Date;
    /**
     * @property {Date} maxDate - cota superior en fecha de nacimiento
     */
    maxDate: Date;

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
        this.maxDate = moment().subtract(1, 'days').toDate();
        this.minDate = moment().subtract(200, 'years').toDate();
        this.sex = [
            {
                name: "Masculino",
                value: 1
            }, {
                name: "Femenino",
                value: 2
            }
        ];
        this.form = new FormGroup({
            'nombre': new FormControl(null, [
                Validators.required,
                Validators.pattern(/\w+/)
            ]),
            'apellido': new FormControl(null, [
                Validators.required,
                Validators.pattern(/\w+/)
            ]),
            'sexo': new FormControl(null, [
                Validators.required
            ]),
            'lactancia': new FormControl(null),
            'nacimiento': new FormControl(null, [
                Validators.required
            ]),
            'telefono': new FormControl(null, [
                Validators.required,
                Validators.pattern(/\d{6,20}/)
            ]),
        });
    }
    
    /**
      * Método que se ejecuta al detectar cambios en los radio button
      * @method onRadioChange
    */
    onRadioChange(event: any) {
        this.lactancy_disabled = event.value != 2;
        this.lactancy_checked = this.lactancy_disabled ? false : this.lactancy_checked;
    }

    /**
      * Método que se ejecuta al detectar cambios en el switch de lactancia
      * @method onSlideChange
    */
    onSlideChange(event: any) {
        this.lactancy_checked = event.checked;
    }

    /**
      * Método que verifica los datos y muestra un error o llama a la vista de bienvenida
      * @method onSubmitted
    */
    onSubmitted() {
        this.error = "";
        const json = {};
        if(!this.form.valid) {
            Object.keys(this.form.controls).forEach(field => {
                const control = this.form.get(field);
               this.error += control.errors ? `Verifique el campo ${field}\n` : "";
                json[field] = control.value;
            });
        } else{
            this.router.navigate(["dashboard"]);
        }
    }
}
