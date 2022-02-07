import * as moment from 'moment';

export class User {

    /**
     * Método constructor
     * @param {Object} data - Objeto con los valores a establecer
     */
    constructor(data: any) {

        this._nombre = data.nombre;
        this._apellido = data.apellido;
        this._lactancia = !data.lactancia ? "No" : "Si";
        this._telefono = data.telefono;
        this._sexo = data.sexo == 1 ? "Masculino" : "Femenino";
        this._nacimiento = moment(data.nacimiento).format("L");
        this._edad = moment().diff(moment(data.nacimiento), "years");
    }

    /**
     * @property {string} nombre - Nombre de la persona
     */
    private _nombre: string;
    /**
     * @property {string} apellido - Apellido
     */
    private _apellido: string;
    /**
     * @property {string} lactancia - Embarazo o lactancia
     */
    private _lactancia: string;
    /**
     * @property {string} telefono - Numero de telefono
     */
    private _telefono: string;
    /**
     * @property {string} nacimiento - Fecha de nacimiento en formato dd/mm/yyyy
     */
    private _nacimiento: string;
    /**
     * @property {number} edad - Edad actual
     */
    private _edad: number;
    /**
     * @property {string} sexo - Genero del individuo
     */
    private _sexo: string;

    get nombre() { return this._nombre; }

    get apellido() { return this._apellido; }

    get lactancia() { return this._lactancia; }

    get telefono() { return this._telefono; }

    get sexo() { return this._sexo; }

    get nacimiento() { return this._nacimiento; }
    
    get edad() { return this._edad; }

}
