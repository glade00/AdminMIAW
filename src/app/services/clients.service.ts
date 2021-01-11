import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})

export class ClientsService {
  name = '';

  clientsData = [
    {
      name: 'love',
    },
    {
      name: 'Aquarium de La Rochelle',
    },
    {
      name: 'Le Bathyscaphe',
    }
  ];
  clientsService: any;
  clients: any;
  httpClient: any;
  constructor() { }
  getClients() {
    this.clientsService.getClients().subscribe((response: any) => {
      this.clients = response;
    });
  }

  addClient(data: Client) {
    return this.httpClient.post('http://localhost:3000/clients', data);
  }
}
