import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../users/user/user.component';
import { ServersComponent } from '../servers/servers.component';
import { ServerComponent } from '../servers/server/server.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const appRoutes: Routes = [ //this Routes is an array , which has list of all the routes
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':myid/:myname', component: UserComponent } //smiliar to ->  { path: 'users/:myid/:myname', component: UsersComponent },
        ]
    },
    {
        path: 'servers', component: ServersComponent, children: [
            { path: ':myIdVara', component: ServerComponent }, //similiar to ->   { path: 'servers/:myIdVara', component: ServerComponent }
            { path: ':id/editmyserver', component: EditServerComponent } //similar to ->   { path: 'servers/:id/editmyserver', component: EditServerComponent }
        ]
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' },   //this ** -> is called validcard Route, which will capture all
    //the rotues which end client can enter (//!Note : Validcard route should always be placed at  bottom in the
    //! list of routes bcoz- ROUTES GET PARASE FROM TOP TO BOTTOM)
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class MyAppRoutingModule { }
