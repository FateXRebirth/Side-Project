
module app {
  'use strict'
  
  export class ScaffoldCtrl {

      public injection(): Array<any> {
          return [
              ScaffoldCtrl
          ]
      }
  
      constructor() {
      }
  }

}

module app {
  'use strict'

  export class ScaffoldDirective implements ng.IDirective {

    public injection(): Array<any> {
          return [
              () => { 
                  return new ScaffoldDirective() 
              }
          ]
      }
    
      public templateUrl: string
    public restrict: string

      constructor() {
          this.templateUrl = 'partials/templates/directive.html'
          this.restrict = 'E'
      }

      public link ($scope: ng.IScope, element: JQuery, attributes: ng.IAttributes): void {
          element.text("I'm a directive")
      }

  }

}

module app {
  'use strict'

  export class ScaffoldModel {

      constructor(){
      }

  }
}

module app {
  'use strict'

  export class ScaffoldService {

      public injection(): Array<any> {
          return [
              ScaffoldService
          ]
      }

    constructor() {
      }

  }
}

module app {
  'use strict'

  var myapp: ng.IModule = angular.module('app', ['ngRoute'])

  myapp.controller('ctrl', ScaffoldCtrl.prototype.injection())

  myapp.service('service', ScaffoldService.prototype.injection())

  myapp.directive('directive', ScaffoldDirective.prototype.injection())

  myapp.config(['$routeProvider', function($routeProvider: ng.route.IRouteProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html'}).
  otherwise({redirectTo: '/home'})
  }])
}