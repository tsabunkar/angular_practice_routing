import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyAuthService } from '../auth-guard/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router, private myAuthService: MyAuthService) { }

    ngOnInit() {
    }

    onClickLoadMyServer(id: number) {
        //do some complex calculation , sending data to backend and fetching value form backend
        //after we want to redirect to some specific routes

        /*     this.router.navigate(['/servers'])//absolute path */

        this.router.navigate(
            ['/servers', id, 'editmyserver'],
            {
                queryParams: { allowEdit: '1' },
                fragment: 'loading'
            }
        );

        //will navigate to -> http://localhost:4200/servers/1/editmyserver?allowEdit=1#loading
        //which has both queryParam and fragment

    }

    onLogin() {
        this.myAuthService.login();
    }

    onLogout() {
        this.myAuthService.logout();
    }
}
