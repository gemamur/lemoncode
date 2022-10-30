# Basico

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Uso:

Accede al contenido mediante el botón de login del menú superior:
usuario: master8@lemoncode.net
contraseña: 12345678

Solo está implementado el botón de login, el logout y la navegación con el resto de botones pero no hay más contenido.

En el servicio se ha implementado el login, el logout, y la recogida de datos del usuario logeado mediante el uso de localStorage como método para persistir los datos.

En layout hay dos componentes: publicheader y privateheader que solo son contenedores del menú, no tienen más función que esa, podría haber dejado el publicmenu y el privatemenu directamente sobre un header o el navbar que he creado. Por darle uso, he puesto que aparezca el nombre de usuario en el privateheader cuando se conecta el usuario.
