/// <reference path="./_all.ts"/>
module app {
  'use strict'

  var myapp: ng.IModule = angular.module('app', ['ngRoute', 'ui.router', "firebase"])

  myapp.factory('firebaseService', app.FirebaseService.Factory());

  // myapp.component('index', app.Index.Factory());

  // myapp.component('articles', app.Articles.Factory());

  // myapp.component('about', app.About.Factory());

  // myapp.component('contact', app.Contact.Factory());
  
  // myapp.controller('controller', app.Controller)

  // myapp.directive('directive', app.Directive.Factory())

  myapp.component('component', app.Component.Factory());

  // myapp.component('simplemde', app.SimpleMDEComponent.Factory());

  // myapp.config(['$routeProvider', function($routeProvider: ng.route.IRouteProvider) {
  //   $routeProvider
  //   .when('/home', {templateUrl: 'partials/home.html'})
  //   .when('/about', {templateUrl: 'partials/about.html'})
  //   .when('/404', {templateUrl: 'partials/404.html'})
  //   .otherwise({redirectTo: '/404'})
  // }])

  // myapp.config(['$stateProvider', '$locationProvider', function($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider) {
    
  //   $locationProvider.html5Mode(true);
  //   $locationProvider.hashPrefix('');

  //   var index = {
  //     name: 'index',
  //     url: '/',
  //     component: 'index'
  //   }

  //   var articles = {
  //     name: 'articles',
  //     url: '/articles',
  //     component: 'articles'
  //   }

  //   var about = {
  //     name: 'about',
  //     url: '/about',
  //     component: 'about'
  //   }

  //   var contact = {
  //     name: 'contact',
  //     url: '/contact',
  //     component: 'contact'
  //   }
    
  //   $stateProvider.state(index);
  //   $stateProvider.state(articles);
  //   $stateProvider.state(about);
  //   $stateProvider.state(contact);

  // }])

}