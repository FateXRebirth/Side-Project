/// <reference path="../_all.ts" />

module app {
  'use strict'

  /* 
  if you want to use JQuery to manipulate DOM element 
  you have to install @types/JQuery first, then add the reference to your TS file
  notice, this just makes your TSLint won't throw an error while you develop
  You also have to import JQuery libraries in your HTML or doing this in another way.

  // example
  <header class="F-header" ng-controller="controller as c">
    <h1 class="title test">Fate：Rebirth {{ count }} </h1>
    <button ng-click="c.Add()">button</button>
    <button ng-click="event.Add()">button</button>
  </header>
  */

  interface IMyScope extends ng.IScope {
    count: number;
    Add: any;
    event: any;
  }

  export class Controller implements ng.IController {

    static $inject: string[] = ['$scope', '$log'];
    
    private _$scope: IMyScope;
    private _$log: ng.ILogService;
    
    constructor($scope: IMyScope, $log: ng.ILogService) {
      this._$scope = $scope;
      this._$log = $log;
      this._$scope.event = this;
      this._$scope.count = 1;
      this._$scope.Add = function() {
        $scope.count++;
        $log.debug("Add from scope");
      }
    }
    
    public Add() {
      this._$scope.count++;
      this._$log.debug("Add from this class");
      $('.test').css('color', 'red');
    }


  }
}