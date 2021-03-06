import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../users/user/user.component';
import { ServersComponent } from '../servers/servers.component';
import { ServerComponent } from '../servers/server/server.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MyAuthGuard } from '../auth-guard/auth-guard.service';
import { MyCanDeactiveGaurd } from '../servers/edit-server/can-deactivate-gaurd.service';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { MyServerResolverGaurd } from '../servers/server/server-resolver.service';


const appRoutes: Routes = [ //this Routes is an array , which has list of all the routes
    { path: '', component: HomeComponent },
    {
        //* protecting/gaurding only child routes (i.e-users/:myid/:myname) but not parent route ('/users') by using - canActivateChild
        path: 'users', canActivateChild: [MyAuthGuard], component: UsersComponent, children: [
            { path: ':myid/:myname', component: UserComponent } //smiliar to ->  { path: 'users/:myid/:myname', component: UsersComponent },
        ]
    },
    {
        //* protecting/gaurding '/servers'(parent route) and all its child routes (i.e-servers/myIdVara, servers/id/editmyserver) by using - canActivate
        path: 'servers', canActivate: [MyAuthGuard], component: ServersComponent, children: [
            { path: ':myIdVara', component: ServerComponent, resolve: { serverKey: MyServerResolverGaurd } }, //using reolver for this route - servers/myIdVara //?Passing dyanmic data to a route
            { path: ':id/editmyserver', component: EditServerComponent, canDeactivate: [MyCanDeactiveGaurd] } //similar to ->   { path: 'servers/:id/editmyserver', component: EditServerComponent }
        ]
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: { errorMessageKey: 'Page not found!' } }, //?Passing static data to a route
    { path: '**', redirectTo: '/not-found' },   //this ** -> is called validcard Route, which will capture all
    //the rotues which end client can enter (//!Note : Validcard route should always be placed at  bottom in the
    //! list of routes bcoz- ROUTES GET PARASE FROM TOP TO BOTTOM)
]

@NgModule({
    // imports: [RouterModule.forRoot(appRoutes, { useHash: true })], //* default is false, is called hashMode Routing
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class MyAppRoutingModule { }
