import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

    clients: Array<Client> = [];
    clientsData: Array<Client> = [];
    constructor(private httpClient: HttpClient) { }

    ngOnInit(): void {
        this.getClients();

    }
    getClients(): Observable<any> {
        return this.httpClient.get('http://localhost:3000/clients');
    }
    addClient(data: Client) {
        this.clientsData.push(data);
    }

}
