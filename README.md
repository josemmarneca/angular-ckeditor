# Angular 8 Ckeditor 4

### Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

And support Ckeditor 4 with ngmodel

The Ckeditor 4 documentation are in https://ckeditor.com/docs/ckeditor4/latest/guide/dev_angular.html



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
#### steps install

1 - npm install --save ckeditor4-angular

2-  In app.module import the CKEditorModule and FormsModule  
###### note: FormsModule (is to support ngmodel)

3 - To fix the problem in node module  An accessor cannot be declared in an ambient context.
###### Use:
    "skipLibCheck": true,
