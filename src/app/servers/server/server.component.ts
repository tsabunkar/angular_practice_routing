import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const idVal = this.activatedRoute.snapshot.params['myIdVara']
    console.log('-------');
    console.log(idVal);//string
    console.log(+idVal);//number
    this.server = this.serversService.getServer(+idVal);//converting string to number

    this.activatedRoute.queryParams.subscribe(params => {
      console.log('Query Param is : ', params);
      console.log('Query Param is : ', params.allowEdit);//string
      console.log('Query Param is : ', +params.allowEdit);//number
      this.server = this.serversService.getServer(+params['allowEdit']);
    })

  }

}
