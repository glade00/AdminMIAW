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

    clients = [
        {
            name: 'Lego'
        },
        {
            name: 'Ville de La Rochelle'
        },
        {
            name: 'Peugeot'
        }
    ];

    skills = [
        {
            name: 'Développement WordPress',
            logo: 'assets/wordpress.jpg'
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
    constructor() { }

    ngOnInit(): void {
    }

}
