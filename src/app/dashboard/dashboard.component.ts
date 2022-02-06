import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}

