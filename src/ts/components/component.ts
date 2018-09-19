/// <reference path="../_all.ts" />

module app {
  'use strict'

  /*

  // example 
  <component test="1+1"></component>
  */
  class ComponentController {
    public test: string;

    static $inject: string[] = ["$element", "$log"];

    public firebaseService: any;

    constructor(private $element: ng.IRootElementService, private $log: ng.ILogService) {
      this.test = "test";
    }

    public $onInit() {
      console.log("Init Component");
    }

    public $onChanges(changesObj: any) {
      console.log("Changed Obj: ");
      console.log(changesObj);
    }

    public $postLink() {
      console.log(this.$element);
    }

    public $onDestroy() {}

    public Echo() {
      this.$log.debug("Echo from Controller through $log");
    }
  }

  export class Component implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    // public controllerAs: string = 'vm'; // default is $ctrl
    public template: string;
    // public templateUrl: string;
    public transclude: boolean;

    constructor() {
      this.bindings = {
        test: "=" //One Way Binding
      }

      this.controller = ComponentController;
      this.template = `
        <div>
          <span> Variable: {{ $ctrl.test }} </span>
          <button ng-click="$ctrl.Echo()">Click Me To Echo</button>
        </div>`;
      //this.templateUrl = "/Templates/components/editUser.template.html";
      this.transclude = false;
    }

    public static Factory(): ng.IComponentOptions {
      return new Component;
    }

  }

}