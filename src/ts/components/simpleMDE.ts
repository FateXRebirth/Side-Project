/// <reference path="../_all.ts" />

// declare var SimpleMDE: any;

module app {
  'use strict'

  // bypass TSLint
  declare var firebase: any;
  interface IMyScope extends ng.IScope {
    event: any;
  }
  class SimpleMDEController {
    public simplemde: SimpleMDE;
    public ref: any;
    public data: any;

    // static $inject: string[] = ['$scope', '$log', '$firebaseObject'];
    static $inject: string[] = ['$scope', '$log', '$firebaseArray'];

    // constructor(private $scope: IMyScope, private $log: ng.ILogService, private $firebaseObject: AngularFireObjectService) {
    constructor(private $scope: IMyScope, private $log: ng.ILogService, private $firebaseArray: AngularFireArrayService) {
      // Initialize the Firebase SDK
      const config = {
        apiKey: "AIzaSyCYg_BmMdLvYyzrnJM7hn-YonNlaT9sKDQ",
        authDomain: "gallery-228f2.firebaseapp.com",
        databaseURL: "https://gallery-228f2.firebaseio.com",
        projectId: "gallery-228f2",
        storageBucket: "gallery-228f2.appspot.com",
        messagingSenderId: "39963305448"
      };
      firebase.initializeApp(config);
      // Get textarea for simplemde
      var elem = <HTMLElement>(document.getElementById('Editor'));
      // Create SimpleMDE instance
      this.simplemde = new SimpleMDE({
        element: elem
      });
      this.simplemde.value("# This is a test\n\n```sh\n$ npm install node\n$ npm install gulp -g\n$ npm install npm@next\n```");
      // Get firebase reference
      this.ref = firebase.database().ref()
      // console.log(this.$firebaseObject(ref))     
    }

    public $onInit() {
      console.log(this.$scope.event);
      console.log("Init");
      setTimeout(() => {
        this.data = this.$firebaseArray(this.ref.child("images"))
      })
    }

    public $onDestroy() {
      console.log("Destroy");
    }

    public Submit() {
      console.log(this.simplemde.value())
      this.data.$add({
        text: this.simplemde.value()
      }).then(function(ref: any) {
        console.log(ref)
      });
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
        text: '=',
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