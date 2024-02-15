import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/Shared/_models';
import { UserService } from '@app/Shared/_services';
import { BehaviorSubject } from 'rxjs';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users?: User[];
    userRole:any = null;
    constructor(private userService: UserService) { 
        this.userRole = new BehaviorSubject(JSON.parse(sessionStorage.getItem('user')!));  
    }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            users.forEach((element:any)=>{
                element.password = btoa(element.password)
            })
            this.users = users;
            console.log(users,'===home===');
        });
    }
}