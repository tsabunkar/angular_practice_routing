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
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';

const appRoutes: Routes = [ //this Routes is an array , which has list of all the routes
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:myid/:myname', component: UsersComponent }, // myid -> dynamic paramter in the url
  { path: 'servers', component: ServersComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) // RouterModule must be added in imports Array. RouterModule has forRoot() method
    // which is used to register all our list of routes
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
