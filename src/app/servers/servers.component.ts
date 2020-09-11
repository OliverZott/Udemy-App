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

    allowNewServer = false;
    serverCreationStatus = 'No server was created!';

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit(): void {
    }

    onCreateServer(): void {
        this.serverCreationStatus = 'Server was created!';
    }


    // On mouse-over, execute myFunction
    public myFunction(): void {
        document.getElementById('myCheck').click();
    }
}
