import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    /**
     * @property {User} user - Instancia del modelo usuario
     */
    user: User;

    /**
      * Método constructor
      * @method Constructor
      */
    constructor(private router: Router) {
        const json: any = this.router.getCurrentNavigation().extras.state;
        this.user = new User(json);
        console.log("r", this.user)
        console.log("fr", json)
    }

    ngOnInit() {
    }

}

