import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    /**
     * @property {User} user - Instancia del modelo usuario
     */
    user: User;

    /**
      * Método constructor
      * @method Constructor
      */
    constructor(private router: Router, private location: Location) {
        const navigation = this.router.getCurrentNavigation();
        if(navigation) {
            const json = navigation.extras.state;
            this.user = new User(json);
        } else {
            this.location.back();
        }
    }

}

