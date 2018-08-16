/// <reference path="../_all.ts" />

module app {
  'use strict'

  /*
  If you want to custom your own MyScope for extending property such as scope.text = "Test"
  You have to inject these there class ng.IDirective<IMyScope>, ng.IDirectiveLinkFn<IMyScope>, ng.IDirectiveFactory<IMyScope>

  <: one-way binding
  =: two-way binding
  &: function binding
  @: pass only strings

  // example
  <directive text="abc"></directive>
  <directive text="1==2"></directive>
  */

  interface IMyScope extends ng.IScope {
    text: string;
    text2: string;
    self: Object;
    echo: Function;
  }

  export class Directive implements ng.IDirective<IMyScope>{

    _$log: ng.ILogService;

    constructor($log: ng.ILogService) {
      this._$log = $log;
    }

    restrict: string = 'E';
    template: string = `
      <div> 
        <p> binding text: {{text}}</p> 
        <p> this scope text: {{text2}}</p> 
        <a href="#" ng-click="echo()">Echo from scope</a> <br>
        <a href="#" ng-click="self.echo()">Echo from this class</a> <br>
      </div>`;
    scope: {[key: string]: string } = {
      "text": "="
    }

    link: ng.IDirectiveLinkFn<IMyScope> = (
      scope: IMyScope,
      element: ng.IAugmentedJQuery,
      attributes: ng.IAttributes,
    ) => {
      // this.scope.text = scope.text;
      console.log(scope);
      console.log(this);
      this.scope.text = '123';
      scope.text2 = '456';
      scope.self = this;
      scope.echo = function() {
        console.log("echo from scope")
      }
    };

    public echo() {
      this._$log.debug("echo from $log")
      console.log("echo from this class")
    }

    public static Factory(): ng.IDirectiveFactory<IMyScope> {
      const directive = function($log: ng.ILogService) {
        return new Directive($log);
      }

      return directive;
    }

    
  }
  
}