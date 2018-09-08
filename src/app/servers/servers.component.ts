import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService, private router: Router
    , private activeRoute: ActivatedRoute) { }
  //ActivatedRoute -> it simply injects the current activated route

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReloadOfSameComponent() {
    this.router.navigate(['/servers'], { relativeTo: this.activeRoute })
    //here in relativeTo we define realative to which path we r loading

  }

}
