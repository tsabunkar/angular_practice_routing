import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubcription: Subscription

  //fetching the dynamic parameter value from the url
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.activatedRoute.snapshot.params['myid'],
      name: this.activatedRoute.snapshot.params['myname'],
    };
    this.paramsSubcription = this.activatedRoute.params
      .subscribe((params: Params) => { //Params - is an object which holds the parameter which we have defined
        //in the url
        this.user.id = params['myid'];
        this.user.name = params['myname'];
      })

  }

  //!It is always a good practice to unsubscribe the subcription which we have done
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramsSubcription.unsubscribe();
  }


}
