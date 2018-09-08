import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onClickLoadMyServer() {
    //do some complex calculation , sending data to backend and fetching value form backend
    //after we want to redirect to some specific routes
    this.router.navigate(['/servers'])//absolute path
  }

}
