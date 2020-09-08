import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
    declarations: [     // registering components which are imported above
        AppComponent,
        ServerComponent
    ],
    imports: [          // adds other modules to this (main) module
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
