import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface MyServer {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class MyServerResolverGaurd implements Resolve<MyServer>{
    constructor(private serverService: ServersService) { }

    resolve(activateRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot)
        : Observable<MyServer> | Promise<MyServer> | MyServer {

        return this.serverService.getServer(+activateRouteSnapshot.params['myIdVara']);
    }
}
//!using reolver for this route - localhost:4200/servers/myIdVara
//? In route -   { path: ':myIdVara', component: ServerComponent , resolve : {serverKey : MyServerResolverGaurd} }
//* where serverKey is key and value is MyServerResolverGaurd thus we r Passing dynamic data to a route
