import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


export interface MyCanComponentDeactive {
    //wkt interface only have method declaration not method body
    mycanDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable()
export class MyCanDeactiveGaurd implements CanDeactivate<MyCanComponentDeactive> {

    canDeactivate(
        myCanComponentDeactive: MyCanComponentDeactive,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        return myCanComponentDeactive.mycanDeactivate();

    }

}
