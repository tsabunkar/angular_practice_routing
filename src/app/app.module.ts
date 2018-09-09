import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import { ServersService } from './servers/servers.service';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyAppRoutingModule } from './routing/app-routing.module';
import { MyAuthGuard } from './auth-guard/auth-guard.service';
import { MyAuthService } from './auth-guard/auth.service';
import { MyCanDeactiveGaurd } from './servers/edit-server/can-deactivate-gaurd.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MyServerResolverGaurd } from './servers/server/server-resolver.service';

/* const appRoutes: Routes = [ //this Routes is an array , which has list of all the routes
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:myid/:myname', component: UserComponent }, // myid -> dynamic paramter in the url
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:myIdVara', component: ServerComponent },
  { path: 'servers/:id/editmyserver', component: EditServerComponent },
] */

//? using the concept of Child Routes (Nested Routes)

/* 
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
 */
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot(appRoutes) // RouterModule must be added in imports Array. RouterModule has forRoot() method
    // which is used to register all our list of routes
    //*Importing our own custom routing module (which has details of all the routes and its component)
    MyAppRoutingModule
  ],
  providers: [ServersService, MyAuthGuard, MyAuthService,
    MyCanDeactiveGaurd, MyServerResolverGaurd],//Gaurds must provided in providers array
  bootstrap: [AppComponent]
})
export class AppModule { }
