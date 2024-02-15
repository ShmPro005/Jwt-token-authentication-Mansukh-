import { Component } from '@angular/core';

import { AuthenticationService } from './Shared/_services';
import { User } from './Shared/_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    user?: User | null;

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.authenticationService.logout();
        window.location.reload();
    }
}