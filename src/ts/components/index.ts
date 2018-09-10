/// <reference path="../_all.ts" />

module app {
  'use strict'

  class IndexController {
    public test: string;

    static $inject: string[] = ["$element", "$log"];

    constructor(private $element: ng.IRootElementService, private $log: ng.ILogService) {
      this.test = "test"
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

  export class Index implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    // public controllerAs: string = 'vm'; // default is $ctrl
    public templateUrl: string;
    public transclude: boolean;

    constructor() {
      this.bindings = {
        test: "=" //One Way Binding
      }

      this.controller = IndexController;
      this.templateUrl = "components/index.html";
      this.transclude = false;
    }

    public static Factory(): ng.IComponentOptions {
      return new Index;
    }

  }

}