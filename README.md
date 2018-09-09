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
->Fetching routes Parameter :
While defining the routes specifiy -
{ path: 'users/:myid/:myname', component: UsersComponent }

While fetching the paramter from the url - 
this.activatedRoute.snapshot.params['myid']

->Fetching routes Parameter Dyanmically:
this.activatedRoute.params.subscribe((params : Params) => {})

params - here is an Observables, Observables helps us to work with Async functions
Observable is some event which might happens in the future, without having to wait for that event to happen, thus methods which has subsribed to this Observable will be notified when the event occurs in the future


-------------------------------------------------------------------------------------------------------------
How to pass and retrieve Query parameters in Angular -

->PASSING :-
*)Passing QueryParams & Fragments-
    <a [routerLink]="['/servers', 5, 'editmyserver']" 
      [queryParams]="{allowEdit : 1}"
      fragment="loading"
        class="list-group-item"
        *ngFor="let server of servers">
        {{ server.name }}
      </a>
*)Passing QueryParams & Fragments (Doing Programmatically) -

  this.router.navigate(
            ['/servers', id, 'editmyserver'],
            {
                queryParams: { allowEdit: '1' },
                fragment: 'loading'
            }
        );

->FETCHING/RETRIVING :-
*)fetching/Retrieving QueryParams & Fragments : 

    console.log('Query Param is : ', this.activatedRoute.snapshot.queryParams);
    console.log('Fragment Param is : ', this.activatedRoute.snapshot.fragment);

but better approach is not using snapshot apporach, rather using Observable-subscribe approach
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('Query Param is : ', params);
    })
    this.activatedRoute.fragment.subscribe(params => {
      console.log('Fragment Param is : ', params);
    })

Note : queryParams is of type-> Observable


-------------------------------------------------------------------------------------------------------------
Gaurds -> It is used to protect/safegaurd/gaurd our routes
To protect our route we use -> canActivate() -> [THis will protect parent route and all its child routes]
whereas, canActivateChild() -> [This will protect only child routes but not parent route] 

canDeactive() -> 
  If user login and click on server tab > devserver > clicks editServer btn > NOw changes servername (input text box) but forgot to click updateServer or tries to go back page, then we need to implement a logic to show a pop-up, saying do you want to save the changes ?


-------------------------------------------------------------------------------------------------------------
Passing Static data in a route :-
const appRoutes: Routes = [
  -----
  { path: 'not-found', component: ErrorPageComponent, data: { errorMessageKey: 'Page not found!' } }
  ------
]

Now to fetch this data object value :-    this.activatedRoute.snapshot.data['errorMessageKey']


-------------------------------------------------------------------------------------------------------------
If we want to fetch the dynamic data before route is rendered/hit/load
for ex- if we want to fetch some data from backend before route is rendered
In this use case we will use resolver gaurd
Resolver is also a service gaurd , This will allow us to run some code before a route is rendered
so difference b/w resolver & canActivate is - 
resolver will never decides weather a route must be loaded or not.
It will always load the route, but before loading the route it will allow us to run some code

check this ex in- server-resolver.service.ts


-------------------------------------------------------------------------------------------------------------
localhost:42000/server
If we r hosting this in the real production server then this routing might not work bcoz-
routes/url will be parsed/handled by server machine first then, url will be parsed by Angular
In that case use the old technique called -> hashMode Routing
In app-routing.module.ts -
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })], //* default is false
Url would be like - http://localhost:4200/#/servers


-------------------------------------------------------------------------------------------------------------
