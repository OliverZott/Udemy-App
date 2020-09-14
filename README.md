# Angular Project - Udemy App
last video:
https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655748#overview
## Content
- Components & Databinding
- Directives
- Services & Dependency Injection
- Routing
- Observables (async code)
- Forms
- Pipes
- Http
- Authentication
- Optimization & NgModules
- Deployment
- Animations & Testing

## Basics
- Angular workflow:  
  - https://angular.io/guide/bootstrapping 
  - Load `index.html`
  - Run `dynamically included script-imports`   
  - Script-imports will dynamically replace `<app-componentXY></app-componentXY>` with components  
- Bootstrap  
  - npm install bootstrap@3
- Angular flow   
  - `main.ts` -> `ap.module.ts` -> `app.component.ts` --> now `index.html` can load app-root
  - index.html contains some scripts automatically
  
 ## Components
 - components: html + ts + css
 - modules: bundle components to a package
 - Templates & Styles ..commit `6ab991ed`
 - Selector as...   (commit `2e319acd`)
   - attribute [] 
   - class .
   
 ## Databinding
 - Communication:  `Business Logic (ts) <-----> Templates (html)`
 
 - **Output Data** **`ts --> html`**  
   - String Interpolation *`{{ data }}`*  
     - USE: when just outputting something
     - can contain anything returning a string!!
     - like method returning a string or {{ 'string' '}}
   - Property Binding *`[property]="data"`*
     - USE: when changing property (html-element or directive or component)
     - most time can use property OR data binding
     
 
 - React to user **Events** **`ts <-- html`**  
   - Event Binding *`(event)="expression"`*
     - `(input)="..."` ...input is **DOM-Event** provided by **DOM-Element** 
     - `$event` ...gives access to event-data
 
 - Two-way-binding **`ts <--> html`**  
   - *`[(ngModel)]="data"`*
 
 
## Directives
- directives = instructions in the DOM
- components = directives with templates (instruction is: angular plz add template and js)
- use **Attribute style** to select directive !   
  `selector: '[appDirectiveName]'` ... `<div appDirectiveName` 
 
- Directive Examples:
  - `*ngIf`
 
 
 
 
 
 
## Linting
https://palantir.github.io/tslint/
- Script in `package.json`
- Rules in `tslint.json`
- `ng lint --fix`  
- Fixable: https://palantir.github.io/tslint/rules/

 
 
 
 
 
 
 
 
 
 

## Initial Readme:
[Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.
- `ng serve` - `http://localhost:4200/`
- `ng generate component component-name`, `ng generate directive|pipe|service|class|guard|interface|enum|module`.
-`ng build`, `--prod` 
- `ng test` unit-tests [Karma](https://karma-runner.github.io).
- `ng e2e`  [Protractor](http://www.protractortest.org/).
- `ng help` 
