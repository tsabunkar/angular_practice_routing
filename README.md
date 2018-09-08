# AngularRouting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

=============================================================================================================
Routing - Should be registered in app.module.ts (If AppModule is only module you have)

-------------------------------------------------------------------------------------------------------------
If we reload the page, then it is not SPA application, The state of the page will be lost if we reload the
complete page.

-------------------------------------------------------------------------------------------------------------
Paths Navigation in Angular:-

<a [routerLink]="['/users']" >Users</a>  -> (Absolute path) : 
Which means , whenever I click this anchor tag I will always be redirected to (base url http://localhost:4200/) http://localhost:4200/users
Irrespective of number of clicks I will also be redirected to base url -> http://localhost:4200/users

<a [routerLink]="['users']" >Users</a>  -> (relative path) : 
which means, whenever I click this anchor tag, The base url will be appended with '/users' on every click
so on first click I will be redirected to : http://localhost:4200/users
on second click I will be redirected to : http://localhost:4200/users/users
and soon ....
Thus in relative path - at the end of base url '/users' will be appended on every click
ALso In relative path we can use Navigate like -> 
<a [routerLink]="['./users']" >Users</a> (Same location)
<a [routerLink]="['../users']" >Users</a> (Go up-one folder)

-------------------------------------------------------------------------------------------------------------
Navigating progrmmatically :
import { Router } from '@angular/router';

___clas___{
  constructor(private router : Router) { }
   
    xyz(){
     this.router.navigate(['/servers'])
    }
}


-------------------------------------------------------------------------------------------------------------
