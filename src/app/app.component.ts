import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Dashboard';
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
}