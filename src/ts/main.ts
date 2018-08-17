/// <reference path="./_all.ts"/>
module app {
  'use strict'

  var myapp: ng.IModule = angular.module('app', ['ngRoute', 'ui.router'])
  
  myapp.controller('controller', app.Controller)

  myapp.directive('directive', app.Directive.Factory())

  myapp.component('component', app.Component.Factory());

  // myapp.config(['$routeProvider', function($routeProvider: ng.route.IRouteProvider) {
  //   $routeProvider
  //   .when('/home', {templateUrl: 'partials/home.html'})
  //   .when('/about', {templateUrl: 'partials/about.html'})
  //   .when('/404', {templateUrl: 'partials/404.html'})
  //   .otherwise({redirectTo: '/404'})
  // }])

  // myapp.config(['$stateProvider', function($stateProvider: ng.ui.IStateProvider) {
  //   var helloState = {
  //     name: 'hello',
  //     url: '/hello',
  //     template: '<h3>hello world!</h3>'
  //   }
  
  //   var aboutState = {
  //     name: 'about',
  //     url: '/about',
  //     template: '<h3>Its the UI-Router hello world app!</h3>'
  //   }

  //   $stateProvider.state(helloState);
  //   $stateProvider.state(aboutState);
  // }])

}