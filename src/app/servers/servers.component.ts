import { Component, OnInit } from '@angular/core';

@Component({
    selector: '.app-servers',        // selector as element
    // selector: '[app-servers]',   // selector as attribute as in CSS (tslint not recommend)
    // selector: '.app-servers',    // selector as class
    // template: '<app-server></app-server>',
    /* template: `
        <app-server>
            test
        </app-server>`,
    */
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName = 'Default Server Name';
    serverCreated = false;
    servers = ['Testserver', 'Testserver 2'];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit(): void {
    }

    onCreateServer(): void {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }

    onUpdateServerName(event: Event): void {
        console.log(event);
        this.serverName = (event.target as HTMLInputElement).value;
    }
}
