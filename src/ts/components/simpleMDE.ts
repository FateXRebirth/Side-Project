/// <reference path="../_all.ts" />

// declare var SimpleMDE: any;

module app {
  'use strict'

  var value: any;

  interface IMyScope extends ng.IScope {
    event: any;
  }

  class SimpleMDEController {
    public content: string;
    public simplemde: SimpleMDE;

    static $inject: string[] = ['$scope', '$log'];

    constructor(private $scope: IMyScope, private $log: ng.ILogService) {
      this.content = "";
      this.$scope.event = this;
      var elem = <HTMLElement>(document.getElementById('Editor'));
      this.simplemde = new SimpleMDE({
        element: elem
      });
    }

    public $onInit() {
      console.log("Init");
    }

    public $onDestroy() {
      console.log("Destroy");
    }

    public Submit() {
      console.log(this.simplemde.value())
    }
  }

  export class SimpleMDEComponent implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    // public controllerAs: string = 'vm'; // default is $ctrl
    public templateUrl: string;
    public transclude: boolean;

    constructor() {
      this.bindings = {
        
      }
      this.controller = SimpleMDEController;
      this.templateUrl = "components/simpleMDE.html";
      this.transclude = true;
    }

    public static Factory(): ng.IComponentOptions {
      return new SimpleMDEComponent;
    }

  }

}