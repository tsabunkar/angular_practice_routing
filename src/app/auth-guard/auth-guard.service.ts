import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { MyAuthService } from './auth.service';

@Injectable() //MyAuthGuard is service
export class MyAuthGuard implements CanActivate, CanActivateChild {

    constructor(private myAuthService: MyAuthService, private router: Router) { }

    //canActivate() method is used to gaurd only parent route and all its child routes
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean> | Promise<boolean> | boolean { //this method can run async or sync code
        const promiseObject = this.myAuthService.isAuthenticated();
        return promiseObject.then((result: boolean) => {
            if (result) {
                return true; //allowing the route to navigate (As it is safe)
            } else {
                this.router.navigate(['/']) //Not allowing the route to navigate, thus redirecting
                // the route to some other place (As it is not safe)
                return false;
            }
        }).catch((err) => {
            console.log(err);
            this.router.navigate(['/not-found']) //redirecting the route (As it is not safe)
            return false;
        });
    }//ANgular should load this canActivate method, before any route is loaded


    //If we wnat to gaurd only our specific child gaurd but not its parent gaurd then use -canActivateChild()
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);

    }
}