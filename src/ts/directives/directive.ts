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
    self: any;
    Echo: any;
    vm: DirectiveController
  }

  class DirectiveController implements ng.IController {

    static $inject = ["$scope", "$log"];

    public $log: ng.ILogService;

    constructor(protected scope: IMyScope, $log: ng.ILogService) {
      scope.vm = this;
      this.$log = $log;
    }    

    public Echo() {
      console.log("Echo from directive's controller");
    }

    public ChangeText () {            
      this.scope.text2='This text from directive\'s controller';    
      console.log(this.scope)
      this.$log.debug("Change from directive's controller")       
    }
  }

  export class Directive implements ng.IDirective<IMyScope>{

    // _$log: ng.ILogService;

    // constructor($log: ng.ILogService) {
    //   this._$log = $log;
    // }

    // bindToController: boolean = true;
    public controller: any;
    public controllerAs: string;

    public restrict: string;
    public template: string;
    public scope: any;

    public MyScope: any;

    public link: ng.IDirectiveLinkFn<IMyScope> = (
      scope: IMyScope,
      element: ng.IAugmentedJQuery,
      attributes: ng.IAttributes,
      controller: any
    ) => {
      console.log(scope)

      this.MyScope = scope;

      // this.scope = scope

      // scope.vm.Echo()

      scope.text2 = 'This text from scope2';
      
      // scope.text = 'This text from scope2';

      scope.self = this;

      scope.Echo = function() {
        console.log("Echo from scope")
      }

      // this.controller.prototype.Echo();
      // console.log(this.controller.$inject)
      // console.log(controller)
      // console.log(this.controller)

      // scope.vm.$log.debug("Echo from scope throught controller")
      
    };

    constructor() {
      this.controller = DirectiveController;
      this.controllerAs = "Ctrl";
      this.restrict = 'E';
      this.template = `
      <div style="text-align: center"> 
        <p> binding text: {{text}} </p> 
        <p> this scope text: {{text2}} </p> 
        <p> binding text throught @: {{text3}} </p> 
        <a href="#" ng-click="Echo()">Echo from scope</a> <br>
        <a href="#" ng-click="self.Echo()">Echo from this class</a> <br>
        <button ng-click="Ctrl.ChangeText()">Button1</button> <br>
        <button ng-click="vm.ChangeText()">Button2</button> <br>
        <button ng-click="self.ChangeText()">Button3</button> <br>
      </div>`;
      this.scope = {
        "text": "=",
        "text3": "@"
      }
    }

    public Echo() {
      console.log("Echo from this class")
    }

    public ChangeText() {
      this.MyScope.text2 = "This text from directive";
      console.log(this.MyScope)
      console.log("Change from directive")       
    }

    public static Factory(): ng.IDirectiveFactory<IMyScope> {
      // const directive = function($log: ng.ILocationService) {
      //   return new Directive($log);
      // }

      const directive = function() {
        return new Directive();
      }

      return directive;
    }

  }
  
}