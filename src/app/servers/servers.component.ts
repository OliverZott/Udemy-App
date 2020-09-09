import { Component, OnInit } from '@angular/core';

@Component({
    // selector: 'app-servers',
    // selector: '[app-servers]', // selector as attribute as in CSS (tslint not recommend)
    selector: '.app-servers',
    // template: '<app-server></app-server>',
    /* template: `
        <app-server>
            blub
        </app-server>`,
    */
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
