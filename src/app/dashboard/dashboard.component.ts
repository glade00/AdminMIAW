import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user = {
    name: 'Jean'
  };
  skills = [
    {
      name: 'Développement WordPress',
      logo: 'assets/wordpress.png'
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
  clients = [];

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientsService.getClients().subscribe(response => {
      this.clients = response;
    });
  }
}
