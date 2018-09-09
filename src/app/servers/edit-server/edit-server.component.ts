import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  isAllowedToEdit = false;

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute) { }

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
      this.isAllowedToEdit = params['allowEdit'] === '3' ? true : false;
      //allowing only devserver to edit
    })
    this.activatedRoute.fragment.subscribe(params => {
      console.log('Fragment Param is : ', params);
    })
    //queryParams is of type-> Observable


    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
  }

}
