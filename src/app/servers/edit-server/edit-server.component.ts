import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MyCanComponentDeactive } from './can-deactivate-gaurd.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
//? Implementing MyCanComponentDeactive interface so as to use mycanDeactivate() method
export class EditServerComponent implements OnInit, MyCanComponentDeactive {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  isAllowedToEdit = false;

  constructor(private serversService: ServersService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //retrieving query params & fragment
    /* 
    console.log('Query Param is : ', this.activatedRoute.snapshot.queryParams);
    console.log('Fragment Param is : ', this.activatedRoute.snapshot.fragment);
     */
    //! but better approach is not using snapshot apporach, rather using Observable-subscribe approach
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('Query Param is : ', params);
      console.log('** ', params['allowEdit']);
      this.isAllowedToEdit = params['allowEdit'] === '3' ? true : false;  //allowing only devserver to edit
    })
    this.activatedRoute.fragment.subscribe(params => {
      console.log('Fragment Param is : ', params);
    })
    //queryParams is of type-> Observable

    console.log('%%%%%');
    console.log(this.activatedRoute.snapshot.params['id']);
    const idValue = this.activatedRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(+idValue);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    console.log('""""""on click of update server btn"""""""');
    console.log(this.serverName);
    console.log(this.serverStatus);
    console.log(this.server.id);
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });

    this.isChangesSaved = true; //?changes were saved, thus navigate to other place
    // this.router.navigate(['../'], { relativeTo: this.activatedRoute })
    this.router.navigate(['/servers'])
  }

  //?If user login and click on server tab > devserver > clicks editServer btn > NOw changes servername but
  //?forgot to click updateServer or tries to go back page, then we need to implement a logic to show a pop-up
  //?saying do you want to save the changes ?

  isChangesSaved = false;

  mycanDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    //here we need to write the logic for showing popup
    if (!this.isAllowedToEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.serverStatus)
      && !this.isChangesSaved) {
      return confirm('Do you want to discard changes ?')
      // return false;
    }
    else {
      return true;
    }
  }

}
