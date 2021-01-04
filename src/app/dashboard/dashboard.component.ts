import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user = {
    name: 'Jean'
  };
  skills = [
    {
      name: 'Développement WordPress',
      logo: 'assets/img/wordpress.png'
    },
    {
      name: 'Développement Front-end',
      logo: null
    },
    {
      name: 'Webdesign',
      logo: null
    }
  ];
  clients = [
    {
      name: 'Martin',
    },
    {
      name: 'Robert',
    },
    {
      name: 'Bastien',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
