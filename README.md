# Hoteljsondb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve --o` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

In this project i made a website where user can signin if he is new or he can login if he has credentials .after login the user can perform CRUD operations 
Create :- Add new restaurent record
Read   :- read the restaurents record
Update :- Update the restaurent records
Delete :-Delete the restaurent record

I have used dummy server instead of actual server.js the dummy server is known as json-server which is being created in angular itself.
the data is stored in json format  in db.json file.
I have created 3 components login,restaurentdash and signup to perform specific task as their names. and also created a service named shared to perform the http operations like get,put,post and delete.
The project is modular and it contains DI:-dependency injection,event binding,property binding,reactive forms .
